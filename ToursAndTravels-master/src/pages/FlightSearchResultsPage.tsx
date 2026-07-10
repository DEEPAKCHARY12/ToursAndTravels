import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
    Plane,
    Filter,
    ChevronDown,
    Search,
    Loader2,
    Calendar,
    Users,
    Plus,
    Minus,
    MapPin
} from 'lucide-react';

interface Flight {
    id: string;
    airline: string;
    flightNumber: string;
    aircraft: string;
    departureTime: string;
    departureAirport: string;
    departureCity: string;
    arrivalTime: string;
    arrivalAirport: string;
    arrivalCity: string;
    duration: string;
    stops: number;
    stopAirport?: string;
    price: number;
    currency: string;
}

interface Airport {
    code: string;
    city: string;
    name: string;
}

const AIRPORTS: Airport[] = [
    { code: 'LHR', city: 'London', name: 'Heathrow' },
    { code: 'LGW', city: 'London', name: 'Gatwick' },
    { code: 'CDG', city: 'Paris', name: 'Charles de Gaulle' },
    { code: 'ORY', city: 'Paris', name: 'Orly' },
    { code: 'SIN', city: 'Singapore', name: 'Changi' },
    { code: 'JFK', city: 'New York', name: 'John F. Kennedy' },
    { code: 'EWR', city: 'Newark', name: 'Liberty' },
    { code: 'DEL', city: 'New Delhi', name: 'Indira Gandhi' },
    { code: 'BOM', city: 'Mumbai', name: 'Chhatrapati Shivaji' },
    { code: 'DXB', city: 'Dubai', name: 'International' },
    { code: 'DOH', city: 'Doha', name: 'Hamad' },
    { code: 'AMS', city: 'Amsterdam', name: 'Schiphol' },
];

export default function FlightSearchResultsPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    
    // Core search state (from URL)
    const destinationParam = searchParams.get('to') || 'Anywhere';
    const originParam = searchParams.get('from') || 'LHR';
    const dateParam = searchParams.get('date') || '';
    // const travelersParam = searchParams.get('travelers') || '1 Adult'; // Unused now that we use counters

    // API Data state
    const [flights, setFlights] = useState<Flight[]>([]);
    const [loading, setLoading] = useState(true);
    
    // Sidebar Filter state
    const [priceRange, setPriceRange] = useState(1000);
    const [selectedStops, setSelectedStops] = useState<number[]>([]);
    const [selectedAirlines, setSelectedAirlines] = useState<string[]>([]);
    const [sortBy, setSortBy] = useState("Best Value");
    
    // Top Bar Search state
    const [tripType, setTripType] = useState("Round-trip");
    
    // Route Selection
    const [routeOrigin, setRouteOrigin] = useState<Airport>(
        AIRPORTS.find(a => a.code === originParam) || AIRPORTS[0]
    );
    const [routeDestination, setRouteDestination] = useState<Airport | null>(
        AIRPORTS.find(a => a.code === destinationParam) || null
    );
    const [originSearch, setOriginSearch] = useState("");
    const [destSearch, setDestSearch] = useState("");
    const [showOriginDropdown, setShowOriginDropdown] = useState(false);
    const [showDestDropdown, setShowDestDropdown] = useState(false);

    // Dates
    const [startDate, setStartDate] = useState(dateParam.split(' - ')[0] || "");
    const [endDate, setEndDate] = useState(dateParam.split(' - ')[1] || "");

    // Travelers
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [showTravelerPopover, setShowTravelerPopover] = useState(false);

    // Results display state
    const [visibleFlightsCount, setVisibleFlightsCount] = useState(3);

    const fetchFlights = useCallback(async () => {
        setLoading(true);
        try {
            const params = new URLSearchParams();
            params.append('max_price', priceRange.toString());
            selectedStops.forEach(stop => params.append('stops', stop.toString()));
            selectedAirlines.forEach(airline => params.append('airlines', airline));
            params.append('sort_by', sortBy);
            
            if (originParam) params.append('origin', originParam);
            if (destinationParam && destinationParam !== 'Anywhere') params.append('destination', destinationParam);

            const response = await fetch(`http://localhost:8000/api/flights?${params.toString()}`);
            const data = await response.json();
            
            setFlights(data);
        } catch (error) {
            console.error("Error fetching flights:", error);
        } finally {
            setLoading(false);
        }
    }, [priceRange, selectedStops, selectedAirlines, sortBy, originParam, destinationParam]);

    useEffect(() => {
        fetchFlights();
    }, [fetchFlights]);

    const handleStopChange = (stop: number) => {
        setSelectedStops(prev =>
            prev.includes(stop) ? prev.filter(s => s !== stop) : [...prev, stop]
        );
    };

    const handleModifySearch = () => {
        const destCode = routeDestination?.code || 'Anywhere';
        const dateStr = tripType === "Round-trip" && endDate ? `${startDate} - ${endDate}` : startDate;
        const travelersStr = `${adults} Adult${adults > 1 ? 's' : ''}${children > 0 ? `, ${children} Child${children > 1 ? 'ren' : ''}` : ''}`;

        setSearchParams({
            from: routeOrigin.code,
            to: destCode,
            date: dateStr,
            travelers: travelersStr
        });
        setVisibleFlightsCount(3);
    };

    const handleReset = () => {
        setPriceRange(1000);
        setSelectedStops([]);
        setSelectedAirlines([]);
        setSortBy("Best Value");
        setRouteOrigin(AIRPORTS[0]);
        setRouteDestination(null);
        setStartDate("");
        setEndDate("");
        setAdults(1);
        setChildren(0);
        setTripType("Round-trip");
        setVisibleFlightsCount(3);
        setSearchParams({
            from: 'LHR',
            to: 'Anywhere',
            date: '',
            travelers: '1 Adult'
        });
    };

    const getFullLabel = (code: string) => {
        const airport = AIRPORTS.find(a => a.code === code);
        return airport ? `${airport.city} (${airport.code})` : code;
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
            {/* Search Summary Section - Overhauled */}
            <section className="bg-white dark:bg-neutral-800 shadow-sm border-b border-neutral-200 dark:border-neutral-700 py-6 relative z-30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
                        <div className="flex flex-wrap lg:flex-nowrap items-stretch gap-0 bg-neutral-50 dark:bg-neutral-900/50 rounded-xl border border-neutral-200 dark:border-neutral-700 w-full overflow-visible">
                            
                            {/* Trip Type */}
                            <div className="flex items-center px-4 py-3 border-r border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 rounded-l-xl lg:w-40">
                                <div className="flex flex-col w-full">
                                    <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider mb-1">Trip Type</span>
                                    <div className="relative group">
                                        <select 
                                            value={tripType}
                                            onChange={(e) => setTripType(e.target.value)}
                                            className="w-full bg-transparent border-none p-0 pr-6 font-bold text-neutral-800 dark:text-white focus:ring-0 cursor-pointer text-sm appearance-none truncate"
                                        >
                                            <option value="Round-trip">Round-trip</option>
                                            <option value="One-way">One-way</option>
                                        </select>
                                        <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
                                    </div>
                                </div>
                            </div>

                            {/* Origin */}
                            <div className="flex-1 min-w-[160px] px-4 py-3 border-r border-neutral-200 dark:border-neutral-700 relative hover:bg-neutral-100 dark:hover:bg-neutral-800/50 cursor-pointer transition-colors" onClick={() => setShowOriginDropdown(!showOriginDropdown)}>
                                <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider mb-1 block">From</span>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                                    <span className="font-bold text-neutral-800 dark:text-white text-sm truncate">
                                        {routeOrigin ? `${routeOrigin.city} (${routeOrigin.code})` : 'Select City'}
                                    </span>
                                </div>
                                
                                {showOriginDropdown && (
                                    <div className="absolute top-full left-0 w-full mt-1 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-xl py-2 z-50 max-h-60 overflow-y-auto">
                                        <div className="px-3 pb-2 border-b border-neutral-100 dark:border-neutral-700 mb-1">
                                            <input 
                                                type="text" 
                                                autoFocus
                                                value={originSearch}
                                                onChange={(e) => setOriginSearch(e.target.value)}
                                                onClick={(e) => e.stopPropagation()}
                                                placeholder="Search city or airport..."
                                                className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded px-2 py-1.5 text-xs focus:ring-1 focus:ring-primary outline-none"
                                            />
                                        </div>
                                        {AIRPORTS.filter(a => a.city.toLowerCase().includes(originSearch.toLowerCase()) || a.code.toLowerCase().includes(originSearch.toLowerCase())).map(airport => (
                                            <button 
                                                key={airport.code}
                                                className="w-full text-left px-4 py-2 hover:bg-primary/10 text-sm flex flex-col transition-colors"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setRouteOrigin(airport);
                                                    setShowOriginDropdown(false);
                                                    setOriginSearch("");
                                                }}
                                            >
                                                <span className="font-bold text-neutral-800 dark:text-white">{airport.city} ({airport.code})</span>
                                                <span className="text-xs text-neutral-500">{airport.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Destination */}
                            <div className="flex-1 min-w-[160px] px-4 py-3 border-r border-neutral-200 dark:border-neutral-700 relative hover:bg-neutral-100 dark:hover:bg-neutral-800/50 cursor-pointer transition-colors" onClick={() => setShowDestDropdown(!showDestDropdown)}>
                                <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider mb-1 block">To</span>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                                    <span className="font-bold text-neutral-800 dark:text-white text-sm truncate">
                                        {routeDestination ? `${routeDestination.city} (${routeDestination.code})` : 'Anywhere'}
                                    </span>
                                </div>

                                {showDestDropdown && (
                                    <div className="absolute top-full left-0 w-full mt-1 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-xl py-2 z-50 max-h-60 overflow-y-auto">
                                        <div className="px-3 pb-2 border-b border-neutral-100 dark:border-neutral-700 mb-1">
                                            <input 
                                                type="text" 
                                                autoFocus
                                                value={destSearch}
                                                onChange={(e) => setDestSearch(e.target.value)}
                                                onClick={(e) => e.stopPropagation()}
                                                placeholder="Search city or airport..."
                                                className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded px-2 py-1.5 text-xs focus:ring-1 focus:ring-primary outline-none"
                                            />
                                        </div>
                                        <button 
                                            className="w-full text-left px-4 py-2 hover:bg-primary/10 text-sm font-bold text-neutral-500 italic"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setRouteDestination(null);
                                                setShowDestDropdown(false);
                                                setDestSearch("");
                                            }}
                                        >
                                            Anywhere
                                        </button>
                                        {AIRPORTS.filter(a => a.city.toLowerCase().includes(destSearch.toLowerCase()) || a.code.toLowerCase().includes(destSearch.toLowerCase())).map(airport => (
                                            <button 
                                                key={airport.code}
                                                className="w-full text-left px-4 py-2 hover:bg-primary/10 text-sm flex flex-col transition-colors"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setRouteDestination(airport);
                                                    setShowDestDropdown(false);
                                                    setDestSearch("");
                                                }}
                                            >
                                                <span className="font-bold text-neutral-800 dark:text-white">{airport.city} ({airport.code})</span>
                                                <span className="text-xs text-neutral-500">{airport.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Dates */}
                            <div className="flex-[1.5] min-w-[280px] px-4 py-3 border-r border-neutral-200 dark:border-neutral-700 relative hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-colors">
                                <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider mb-1 block">Dates</span>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-primary shrink-0" />
                                    <div className="flex items-center gap-1 w-full overflow-hidden">
                                        <input 
                                            type="date" 
                                            value={startDate}
                                            onChange={(e) => setStartDate(e.target.value)}
                                            className="bg-transparent border-none p-0 text-sm font-bold text-neutral-800 dark:text-white focus:ring-0 w-full min-w-[110px]"
                                        />
                                        {tripType === "Round-trip" && (
                                            <>
                                                <span className="text-neutral-400 shrink-0 mx-1">-</span>
                                                <input 
                                                    type="date" 
                                                    value={endDate}
                                                    onChange={(e) => setEndDate(e.target.value)}
                                                    className="bg-transparent border-none p-0 text-sm font-bold text-neutral-800 dark:text-white focus:ring-0 w-full min-w-[110px]"
                                                />
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Travelers */}
                            <div className="flex-1 min-w-[150px] px-4 py-3 relative hover:bg-neutral-100 dark:hover:bg-neutral-800/50 cursor-pointer transition-colors" onClick={() => setShowTravelerPopover(!showTravelerPopover)}>
                                <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider mb-1 block">Travelers</span>
                                <div className="flex items-center gap-2">
                                    <Users className="w-4 h-4 text-primary shrink-0" />
                                    <span className="font-bold text-neutral-800 dark:text-white text-sm truncate">
                                        {adults + children} Traveler{adults + children > 1 ? 's' : ''}
                                    </span>
                                </div>

                                {showTravelerPopover && (
                                    <div className="absolute top-full right-0 lg:left-0 w-64 mt-1 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-xl p-4 z-50 animate-in fade-in zoom-in duration-150" onClick={(e) => e.stopPropagation()}>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div className="flex flex-col">
                                                    <span className="font-bold text-sm text-neutral-800 dark:text-white">Adults</span>
                                                    <span className="text-[10px] text-neutral-500">12+ years</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <button 
                                                        disabled={adults <= 1}
                                                        onClick={() => setAdults(prev => prev - 1)}
                                                        className="w-8 h-8 rounded-full border border-neutral-200 dark:border-neutral-700 flex items-center justify-center hover:border-primary hover:text-primary transition-all disabled:opacity-30"
                                                    >
                                                        <Minus className="w-4 h-4" />
                                                    </button>
                                                    <span className="font-bold w-4 text-center">{adults}</span>
                                                    <button 
                                                        onClick={() => setAdults(prev => prev + 1)}
                                                        className="w-8 h-8 rounded-full border border-neutral-200 dark:border-neutral-700 flex items-center justify-center hover:border-primary hover:text-primary transition-all"
                                                    >
                                                        <Plus className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex flex-col">
                                                    <span className="font-bold text-sm text-neutral-800 dark:text-white">Children</span>
                                                    <span className="text-[10px] text-neutral-500">2-11 years</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <button 
                                                        disabled={children <= 0}
                                                        onClick={() => setChildren(prev => prev - 1)}
                                                        className="w-8 h-8 rounded-full border border-neutral-200 dark:border-neutral-700 flex items-center justify-center hover:border-primary hover:text-primary transition-all disabled:opacity-30"
                                                    >
                                                        <Minus className="w-4 h-4" />
                                                    </button>
                                                    <span className="font-bold w-4 text-center">{children}</span>
                                                    <button 
                                                        onClick={() => setChildren(prev => prev + 1)}
                                                        className="w-8 h-8 rounded-full border border-neutral-200 dark:border-neutral-700 flex items-center justify-center hover:border-primary hover:text-primary transition-all"
                                                    >
                                                        <Plus className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                            <button 
                                                className="w-full bg-primary text-white py-2 rounded-lg font-bold text-xs mt-2"
                                                onClick={() => setShowTravelerPopover(false)}
                                            >
                                                Apply
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <button 
                            onClick={handleModifySearch}
                            className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 shrink-0 h-full min-h-[56px]"
                        >
                            <Search className="w-5 h-5" /> Modify Search
                        </button>
                    </div>
                </div>
            </section>

            <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full relative z-10">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters Sidebar */}
                    <aside className="w-full lg:w-1/4 flex-shrink-0 space-y-6">
                        <div className="flex justify-between items-center pb-4 border-b border-neutral-200 dark:border-neutral-700">
                            <h2 className="text-lg font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                                <Filter className="w-5 h-5" /> Filters
                            </h2>
                            <button
                                onClick={handleReset}
                                className="text-primary text-sm font-semibold hover:underline"
                            >
                                Reset all
                            </button>
                        </div>

                        {/* Price Range */}
                        <div className="space-y-3">
                            <h3 className="font-semibold text-neutral-800 dark:text-white">Price Range</h3>
                            <div className="flex justify-between text-sm text-neutral-500 mb-2">
                                <span>$100</span>
                                <span>$1000</span>
                            </div>
                            <input
                                className="w-full h-1 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary"
                                type="range"
                                min="100"
                                max="1000"
                                value={priceRange}
                                onChange={(e) => setPriceRange(Number(e.target.value))}
                            />
                            <div className="text-right text-sm font-bold text-primary mt-1">Up to ${priceRange}</div>
                        </div>

                        {/* Stops */}
                        <div className="space-y-3 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                            <h3 className="font-semibold text-neutral-800 dark:text-white">Stops</h3>
                            <div className="space-y-2">
                                {[0, 1, 2].map(stop => (
                                    <label key={stop} className="flex items-center space-x-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            checked={selectedStops.includes(stop)}
                                            onChange={() => handleStopChange(stop)}
                                            className="form-checkbox h-5 w-5 text-primary rounded border-neutral-300 focus:ring-primary transition duration-150 ease-in-out"
                                        />
                                        <span className="text-neutral-600 dark:text-neutral-300 group-hover:text-primary transition-colors">
                                            {stop === 0 ? 'Non-stop' : `${stop} Stop${stop > 1 ? 's' : ''}`}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Airlines */}
                        <div className="space-y-3 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                            <h3 className="font-semibold text-neutral-800 dark:text-white">Airlines</h3>
                            <div className="space-y-2">
                                {AIRPORTS.slice(0, 7).map(a => a.code !== 'AMS' && (
                                    <label key={a.code} className="flex items-center space-x-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            checked={selectedAirlines.includes(a.city)}
                                            onChange={() => setSelectedAirlines(prev => prev.includes(a.city) ? prev.filter(x => x !== a.city) : [...prev, a.city])}
                                            className="form-checkbox h-5 w-5 text-primary rounded border-neutral-300 focus:ring-primary"
                                        />
                                        <span className="text-neutral-600 dark:text-neutral-300 text-sm">{a.city}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Flight Results */}
                    <div className="w-full lg:w-3/4 space-y-4">
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-neutral-600 dark:text-neutral-300 font-medium">
                                {loading ? 'Fetching flights...' : (
                                    <>Showing <span className="font-bold text-neutral-900 dark:text-white">{Math.min(visibleFlightsCount, flights.length)} of {flights.length} flights</span></>
                                )}
                            </p>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-neutral-500">Sort by:</span>
                                <select 
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="form-select bg-transparent border-none py-1 pl-2 pr-8 font-semibold text-neutral-900 dark:text-white focus:ring-0 cursor-pointer"
                                >
                                    <option value="Best Value" className="bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white">Best Value</option>
                                    <option value="Price: Low to High" className="bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white">Price: Low to High</option>
                                </select>
                            </div>
                        </div>

                        {loading ? (
                            <div className="flex flex-col items-center justify-center py-20 bg-white dark:bg-neutral-800 rounded-xl shadow-sm">
                                <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
                                <p className="text-neutral-500 animate-pulse">Searching for the best flights...</p>
                            </div>
                        ) : flights.length === 0 ? (
                            <div className="text-center py-12 bg-white dark:bg-neutral-800 rounded-xl shadow-sm">
                                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">No flights found</h3>
                                <p className="text-neutral-500">Try adjusting your filters or search criteria.</p>
                            </div>
                        ) : (
                            flights.slice(0, visibleFlightsCount).map((flight) => (
                                <div key={flight.id} className="bg-white dark:bg-neutral-800 rounded-xl shadow-sm hover:shadow-md border border-neutral-100 dark:border-neutral-700 transition-all hover:-translate-y-0.5">
                                    <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                                        <div className="md:col-span-3 flex items-center gap-4">
                                            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full p-2 border border-neutral-100 shadow-sm">
                                                <Plane className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-neutral-900 dark:text-white">{flight.airline}</h4>
                                                <p className="text-xs text-neutral-500">{flight.flightNumber} • {flight.aircraft}</p>
                                            </div>
                                        </div>
                                        <div className="md:col-span-6 flex items-center justify-center text-center">
                                            <div className="flex flex-col items-start min-w-[60px]">
                                                <span className="text-xl font-bold text-neutral-900 dark:text-white">{flight.departureTime}</span>
                                                <span className="text-xs text-neutral-500 font-bold truncate max-w-[80px]">{getFullLabel(flight.departureAirport)}</span>
                                            </div>
                                            <div className="flex-1 px-4 flex flex-col items-center">
                                                <span className="text-xs text-neutral-400 mb-1">{flight.duration}</span>
                                                <div className="w-full h-px bg-neutral-300 relative flex items-center justify-center">
                                                    <div className="w-2 h-2 rounded-full bg-neutral-300 absolute left-0"></div>
                                                    <Plane className="w-4 h-4 text-neutral-300 rotate-90 bg-white dark:bg-neutral-800 px-1" />
                                                    <div className="w-2 h-2 rounded-full bg-neutral-300 absolute right-0"></div>
                                                    {flight.stops > 0 && <div className="w-2 h-2 rounded-full border border-neutral-300 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" title={`Stop at ${flight.stopAirport}`}></div>}
                                                </div>
                                                <span className={`text-xs font-bold mt-1 ${flight.stops === 0 ? 'text-emerald-600' : 'text-orange-500'}`}>
                                                    {flight.stops === 0 ? 'Non-stop' : `${flight.stops} Stop${flight.stops > 1 ? 's' : ''} ${flight.stopAirport ? `(${flight.stopAirport})` : ''}`}
                                                </span>
                                            </div>
                                            <div className="flex flex-col items-end min-w-[60px]">
                                                <span className="text-xl font-bold text-neutral-900 dark:text-white">{flight.arrivalTime}</span>
                                                <span className="text-xs text-neutral-500 font-bold truncate max-w-[80px]">{getFullLabel(flight.arrivalAirport)}</span>
                                            </div>
                                        </div>
                                        <div className="md:col-span-3 flex flex-col items-end justify-center pl-4 md:border-l border-neutral-100 dark:border-neutral-700">
                                            <span className="text-xs text-neutral-400 mb-1">Total price</span>
                                            <div className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">{flight.currency}{flight.price}</div>
                                            <button 
                                                onClick={() => console.log("Selected Flight:", flight.id, flight)}
                                                className="w-full border border-primary text-primary hover:bg-primary hover:text-white py-2 px-4 rounded-lg font-bold transition-all"
                                            >
                                                Select
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}

                        {!loading && flights.length > visibleFlightsCount && (
                            <div className="pt-6 text-center">
                                <button 
                                    onClick={() => setVisibleFlightsCount(prev => prev + 3)}
                                    className="text-primary font-semibold hover:underline flex items-center justify-center mx-auto gap-1"
                                >
                                    Show more flights <ChevronDown className="w-4 h-4" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
