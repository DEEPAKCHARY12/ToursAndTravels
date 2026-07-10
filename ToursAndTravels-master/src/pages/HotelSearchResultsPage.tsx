
import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
    MapPin,
    Users,
    Search,
    ChevronLeft,
    ChevronRight,
    Star
} from 'lucide-react';
import { HOTELS } from '../data/hotels';
import HotelCard from '../components/common/HotelCard';

const ITEMS_PER_PAGE = 10;

export default function HotelSearchResultsPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    
    // Initial State from URL or Defaults
    const [destination, setDestination] = useState(searchParams.get('location') || 'Goa, India');
    const [checkIn, setCheckIn] = useState(searchParams.get('checkIn') || new Date().toISOString().split('T')[0]);
    const [checkOut, setCheckOut] = useState(searchParams.get('checkOut') || new Date(Date.now() + 86400000).toISOString().split('T')[0]);
    // const [guests, setGuests] = useState(searchParams.get('guests') || '2 Adults, 0 Children, 1 Room');
    const [currentPage, setCurrentPage] = useState(1);

    // Guest Selector State
    const [showGuestSelector, setShowGuestSelector] = useState(false);
    const [guestCounts, setGuestCounts] = useState({
        adults: 2,
        children: 0,
        rooms: 1
    });

    // State for filters
    const [priceRange, setPriceRange] = useState(20000);
    const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
    const [selectedAmenities, setSelectedAmenities] = useState<string[]>(['Free Wifi', 'Swimming Pool', 'Air Conditioning']);
    const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>(['Resorts', 'Hotels']);
    
    // Derived state for active search queries (applied on Search button click)
    const [activeSearch, setActiveSearch] = useState({
        destination: searchParams.get('location') || 'Goa, India',
        checkIn: searchParams.get('checkIn') || new Date().toISOString().split('T')[0],
        checkOut: searchParams.get('checkOut') || new Date(Date.now() + 86400000).toISOString().split('T')[0],
        guests: searchParams.get('guests') || '2 Adults, 0 Children, 1 Room'
    });

    // Mock options for filters
    const amenitiesOptions = ['Free WiFi', 'Swimming Pool', 'Air Conditioning', 'Breakfast Included', 'Parking'];
    const propertyTypeOptions = ['Resorts', 'Hotels', 'Villas', 'Homestays'];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    const handleUpdateSearch = () => {
        // Format guest string
        const guestString = `${guestCounts.adults} Adults, ${guestCounts.children} Children, ${guestCounts.rooms} Room`;
        // setGuests(guestString);
        
        // Update functionality: set active search state and URL params
        setActiveSearch({ destination, checkIn, checkOut, guests: guestString });
        setSearchParams({ location: destination, checkIn, checkOut, guests: guestString });
        setCurrentPage(1); // Reset to page 1 on new search
    };

    const handleGuestChange = (type: 'adults' | 'children' | 'rooms', increment: boolean) => {
        setGuestCounts(prev => {
            const newValue = increment ? prev[type] + 1 : prev[type] - 1;
            // Prevent going below 1 for adults/rooms, 0 for children
            if (type === 'adults' && newValue < 1) return prev;
            if (type === 'rooms' && newValue < 1) return prev;
            if (type === 'children' && newValue < 0) return prev;
            
            return { ...prev, [type]: newValue };
        });
    };

    const filteredHotels = useMemo(() => {
        return HOTELS.filter(hotel => {
            // Destination Filter (Search Text Match)
            if (activeSearch.destination && activeSearch.destination.toLowerCase() !== 'goa, india') {
                const destLower = activeSearch.destination.toLowerCase();
                 // very basic check if hotel location includes search text
                if (!hotel.location.toLowerCase().includes(destLower) && !hotel.name.toLowerCase().includes(destLower)) {
                    return false;
                }
            }

            // Price Filter
            if (hotel.price > priceRange) return false;

            // Rating Filter
            if (selectedRatings.length > 0) {
               const matchesRating = selectedRatings.some(r => hotel.rating >= r);
               if (!matchesRating) return false;
            }

            // Simple mock filtering for demo purposes
            // In a real app we would check amenities and property types against hotel properties
            
            return true;
        });
    }, [priceRange, selectedRatings, selectedAmenities, selectedPropertyTypes, activeSearch]);

    // Pagination Logic
    const totalPages = Math.ceil(filteredHotels.length / ITEMS_PER_PAGE);
    const paginatedHotels = filteredHotels.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handleRatingChange = (rating: number) => {
        setSelectedRatings(prev => 
            prev.includes(rating) ? prev.filter(r => r !== rating) : [...prev, rating]
        );
        setCurrentPage(1);
    };

    const handleCheckboxChange = (
        item: string,
        setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>
    ) => {
        setSelectedItems(prev =>
            prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
        );
        setCurrentPage(1);
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen">
             {/* Breadcrumbs & Search Header */}
             <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav aria-label="Breadcrumb" className="flex mb-4 text-xs font-medium text-slate-500 dark:text-slate-400">
                        <ol className="flex items-center space-x-2">
                            <li><a href="/" className="hover:text-primary">Home</a></li>
                            <li><ChevronRight className="w-3 h-3" /></li>
                            <li><a href="#" className="hover:text-primary">India</a></li>
                            <li><ChevronRight className="w-3 h-3" /></li>
                            <li className="text-slate-900 dark:text-slate-200">Goa Hotels</li>
                        </ol>
                    </nav>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-slate-50 dark:bg-slate-800/50 p-2 rounded-xl border border-slate-200 dark:border-slate-700">
                        <div className="relative flex items-center bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                            <MapPin className="w-5 h-5 text-slate-400 mr-2" />
                            <div className="flex flex-col flex-1">
                                <label className="text-[10px] uppercase tracking-wider font-bold text-slate-500">Destination</label>
                                <input 
                                    className="bg-transparent border-none p-0 focus:ring-0 text-sm font-semibold w-full text-slate-900 dark:text-white placeholder-slate-400" 
                                    type="text" 
                                    value={destination}
                                    onChange={(e) => setDestination(e.target.value)}
                                    placeholder="Where are you going?"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="flex items-center bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                                <div className="flex flex-col flex-1">
                                    <label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 mb-1">Check-in</label>
                                    <input 
                                        type="date" 
                                        className="bg-transparent border-none p-0 focus:ring-0 text-xs font-semibold w-full text-slate-900 dark:text-white"
                                        value={checkIn}
                                        onChange={(e) => setCheckIn(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex items-center bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                                <div className="flex flex-col flex-1">
                                    <label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 mb-1">Check-out</label>
                                    <input 
                                        type="date" 
                                        className="bg-transparent border-none p-0 focus:ring-0 text-xs font-semibold w-full text-slate-900 dark:text-white"
                                        value={checkOut}
                                        onChange={(e) => setCheckOut(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="relative flex items-center bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                            <Users className="w-5 h-5 text-slate-400 mr-2" />
                            <div className="flex flex-col flex-1 relative">
                                <label className="text-[10px] uppercase tracking-wider font-bold text-slate-500">Guests</label>
                                <button 
                                    className="text-left text-sm font-semibold w-full text-slate-900 dark:text-white focus:outline-none"
                                    onClick={() => setShowGuestSelector(!showGuestSelector)}
                                >
                                    {guestCounts.adults} Adults, {guestCounts.children} Children, {guestCounts.rooms} Room
                                </button>
                                
                                {showGuestSelector && (
                                    <div className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 p-4 z-50">
                                        {/* Adults */}
                                        <div className="flex justify-between items-center mb-4">
                                            <div>
                                                <p className="font-bold text-slate-900 dark:text-white">Adults</p>
                                                <p className="text-xs text-slate-500">Ages 13 or above</p>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <button 
                                                    onClick={() => handleGuestChange('adults', false)}
                                                    className="w-8 h-8 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center text-slate-500 hover:border-primary hover:text-primary transition-colors disabled:opacity-50"
                                                    disabled={guestCounts.adults <= 1}
                                                >
                                                    -
                                                </button>
                                                <span className="w-4 text-center font-bold text-slate-900 dark:text-white">{guestCounts.adults}</span>
                                                <button 
                                                    onClick={() => handleGuestChange('adults', true)}
                                                    className="w-8 h-8 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center text-slate-500 hover:border-primary hover:text-primary transition-colors"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        {/* Children */}
                                        <div className="flex justify-between items-center mb-4">
                                            <div>
                                                <p className="font-bold text-slate-900 dark:text-white">Children</p>
                                                <p className="text-xs text-slate-500">Ages 0-12</p>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <button 
                                                    onClick={() => handleGuestChange('children', false)}
                                                    className="w-8 h-8 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center text-slate-500 hover:border-primary hover:text-primary transition-colors disabled:opacity-50"
                                                    disabled={guestCounts.children <= 0}
                                                >
                                                    -
                                                </button>
                                                <span className="w-4 text-center font-bold text-slate-900 dark:text-white">{guestCounts.children}</span>
                                                <button 
                                                    onClick={() => handleGuestChange('children', true)}
                                                    className="w-8 h-8 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center text-slate-500 hover:border-primary hover:text-primary transition-colors"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        {/* Rooms */}
                                        <div className="flex justify-between items-center mb-4">
                                            <div>
                                                <p className="font-bold text-slate-900 dark:text-white">Rooms</p>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <button 
                                                    onClick={() => handleGuestChange('rooms', false)}
                                                    className="w-8 h-8 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center text-slate-500 hover:border-primary hover:text-primary transition-colors disabled:opacity-50"
                                                    disabled={guestCounts.rooms <= 1}
                                                >
                                                    -
                                                </button>
                                                <span className="w-4 text-center font-bold text-slate-900 dark:text-white">{guestCounts.rooms}</span>
                                                <button 
                                                    onClick={() => handleGuestChange('rooms', true)}
                                                    className="w-8 h-8 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center text-slate-500 hover:border-primary hover:text-primary transition-colors"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        <button 
                                            onClick={() => setShowGuestSelector(false)}
                                            className="w-full py-2 bg-primary text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
                                        >
                                            Done
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                        <button 
                            onClick={handleUpdateSearch}
                            className="bg-primary text-white font-bold rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 py-3 md:py-0 active:scale-95"
                        >
                            <Search className="w-5 h-5" />
                            Update Search
                        </button>
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <aside className="w-full md:w-64 flex-shrink-0 space-y-6">
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Star Rating</h3>
                            <div className="space-y-2">
                                {[5, 4, 3, 2, 1].map((rating) => (
                                    <label key={rating} className="flex items-center gap-3 cursor-pointer group">
                                        <input 
                                            type="checkbox" 
                                            className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary h-4 w-4"
                                            checked={selectedRatings.includes(rating)}
                                            onChange={() => handleRatingChange(rating)}
                                        />
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-current' : 'text-slate-300 dark:text-slate-600'}`} />
                                            ))}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Price Range</h3>
                            <div className="px-2">
                                <input 
                                    type="range" 
                                    min="1000" 
                                    max="20000" 
                                    value={priceRange} 
                                    onChange={(e) => { setPriceRange(Number(e.target.value)); setCurrentPage(1); }}
                                    className="w-full h-1 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary" 
                                />
                                <div className="flex justify-between mt-3">
                                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">₹1,000</span>
                                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">₹{priceRange.toLocaleString()}+</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Amenities</h3>
                            <div className="space-y-3">
                                {amenitiesOptions.map((amenity) => (
                                    <label key={amenity} className="flex items-center gap-3 cursor-pointer">
                                        <input 
                                            type="checkbox" 
                                            className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary h-4 w-4"
                                            checked={selectedAmenities.includes(amenity)}
                                            onChange={() => handleCheckboxChange(amenity, setSelectedAmenities)}
                                        />
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{amenity}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Property Type</h3>
                            <div className="space-y-3">
                                {propertyTypeOptions.map((type) => (
                                    <label key={type} className="flex items-center gap-3 cursor-pointer">
                                        <input 
                                            type="checkbox" 
                                            className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary h-4 w-4"
                                            checked={selectedPropertyTypes.includes(type)}
                                            onChange={() => handleCheckboxChange(type, setSelectedPropertyTypes)}
                                        />
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{type}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Hotel List */}
                    <div className="flex-1">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                                {filteredHotels.length} hotels found in {activeSearch.destination}
                            </h1>
                            <div className="flex items-center gap-3">
                                <span className="text-sm text-slate-500 font-medium">Sort by:</span>
                                <select className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-semibold rounded-lg focus:ring-primary focus:border-primary px-3 py-1.5 cursor-pointer text-slate-900 dark:text-white">
                                    <option>Recommended</option>
                                    <option>Price (Low to High)</option>
                                    <option>Price (High to Low)</option>
                                    <option>Guest Rating</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {paginatedHotels.map(hotel => (
                                <HotelCard key={hotel.id} hotel={hotel} />
                            ))}
                            
                            {paginatedHotels.length === 0 && (
                                <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">No hotels found</h3>
                                    <p className="text-slate-500">Try adjusting your filters to see more results.</p>
                                    <button 
                                        onClick={() => { setPriceRange(20000); setSelectedRatings([]); setDestination('Goa, India'); handleUpdateSearch(); }}
                                        className="mt-4 text-primary font-semibold hover:underline"
                                    >
                                        Reset Filters
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Pagination Controls */}
                        {totalPages > 1 && (
                            <div className="mt-12 flex justify-center">
                                <nav className="flex items-center space-x-2">
                                    <button 
                                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                        disabled={currentPage === 1}
                                        className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                    
                                    {[...Array(totalPages)].map((_, i) => (
                                        <button
                                            key={i + 1}
                                            onClick={() => setCurrentPage(i + 1)}
                                            className={`w-10 h-10 rounded-lg font-bold transition-colors ${
                                                currentPage === i + 1
                                                    ? 'bg-primary text-white shadow-md'
                                                    : 'border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300'
                                            }`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}
                                    
                                    <button 
                                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                        disabled={currentPage === totalPages}
                                        className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </nav>
                            </div>
                        )}
                        
                        {/* Page Info */}
                         <div className="mt-4 text-center text-xs text-slate-400">
                            Showing page {currentPage} of {totalPages}
                         </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
