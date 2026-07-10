
import React, { useState } from 'react';
import { Search, RotateCcw, ChevronDown, ChevronUp, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const DURATION_OPTIONS = [
    { label: '1-3 Days', value: '1-3' },
    { label: '4-7 Days', value: '4-7' },
    { label: '8-14 Days', value: '8-14' },
    { label: '15+ Days', value: '15+' },
];

const TOUR_TYPES = ['Adventure', 'Honeymoon', 'Family', 'Pilgrimage', 'Wildlife', 'Camping', 'International', 'City Breaks'];
const INCLUSIONS = ['Meals', 'Transport', 'Guide', 'WiFi', 'Entry Tickets'];
const ACCOMMODATIONS = ['Luxury Resort', 'Boutique Hotel', 'Capsule Hotel Experience', 'Overwater Villa', 'Mountain Chalet', 'Cliffside Hotel'];
const DESTINATIONS = ['Indonesia', 'France', 'Japan', 'Maldives', 'Switzerland', 'Greece', 'Thailand', 'Italy', 'Spain'];

export interface FilterState {
    search: string;
    destinations: string[];
    startDate: string;
    endDate: string;
    price: number;
    durations: string[];
    tourTypes: string[];
    accommodations: string[];
    inclusions: string[];
    ratings: number[];
}

interface PackageFiltersProps {
    filters: FilterState;
    onChange: (filters: FilterState) => void;
    onClear: () => void;
}

const PackageFilters: React.FC<PackageFiltersProps> = ({ filters, onChange, onClear }) => {
    const [destSearch, setDestSearch] = useState('');
    const [expanded, setExpanded] = useState<Record<string, boolean>>({
        destination: true,
        date: true,
        price: true,
        duration: true,
        type: true,
        accommodation: true,
        inclusions: true,
        rating: true,
    });

    const toggleSection = (section: string) => {
        setExpanded(prev => ({ ...prev, [section]: !prev[section] }));
    };

    const handleCheckboxChange = (section: keyof FilterState, value: string | number) => {
        const currentValues = filters[section] as (string | number)[];
        const newValues = currentValues.includes(value as never)
            ? currentValues.filter(v => v !== value)
            : [...currentValues, value];

        onChange({ ...filters, [section]: newValues });
    };

    const filteredDestinations = DESTINATIONS.filter(d =>
        d.toLowerCase().includes(destSearch.toLowerCase())
    );

    return (
        <div className="flex flex-col gap-6">
            {/* Clear All / Apply Mobile */}
            <div className="flex lg:hidden justify-between items-center bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm">
                <span className="font-bold text-slate-900 dark:text-white">Filters</span>
                <button
                    onClick={onClear}
                    className="text-sm text-primary font-bold flex items-center gap-1"
                >
                    <RotateCcw className="w-3.5 h-3.5" /> Clear All
                </button>
            </div>

            {/* Main Filters Container */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
                <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
                    <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        Filters
                    </h3>
                    <button
                        onClick={onClear}
                        className="hidden lg:flex text-xs text-primary font-bold items-center gap-1 hover:underline"
                    >
                        <RotateCcw className="w-3 h-3" /> Clear All
                    </button>
                </div>

                <div className="p-6 space-y-8 max-h-[calc(100vh-250px)] overflow-y-auto custom-scrollbar">
                    {/* Destination (Multi-select with search) */}
                    <section>
                        <button
                            onClick={() => toggleSection('destination')}
                            className="w-full flex justify-between items-center mb-4 text-slate-900 dark:text-white font-bold text-sm"
                        >
                            Destination {expanded.destination ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                        {expanded.destination && (
                            <div className="space-y-4">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <input
                                        type="text"
                                        placeholder="Search destinations..."
                                        value={destSearch}
                                        onChange={(e) => setDestSearch(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-xl text-xs outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                                    />
                                </div>
                                <div className="space-y-2 max-h-40 overflow-y-auto custom-scrollbar pr-2">
                                    {filteredDestinations.map((dest) => (
                                        <label key={dest} className="flex items-center group cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={filters.destinations.includes(dest)}
                                                onChange={() => handleCheckboxChange('destinations', dest)}
                                                className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary/20 transition-all cursor-pointer"
                                            />
                                            <span className="ml-3 text-sm text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">{dest}</span>
                                        </label>
                                    ))}
                                    {filteredDestinations.length === 0 && (
                                        <p className="text-xs text-slate-400 italic">No destinations found</p>
                                    )}
                                </div>
                            </div>
                        )}
                    </section>

                    {/* Date Range Picker */}
                    <section>
                        <button
                            onClick={() => toggleSection('date')}
                            className="w-full flex justify-between items-center mb-4 text-slate-900 dark:text-white font-bold text-sm"
                        >
                            Date Range {expanded.date ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                        {expanded.date && (
                            <div className="grid grid-cols-1 gap-3">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">From</label>
                                    <input
                                        type="date"
                                        value={filters.startDate}
                                        onChange={(e) => onChange({ ...filters, startDate: e.target.value })}
                                        className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">To</label>
                                    <input
                                        type="date"
                                        value={filters.endDate}
                                        onChange={(e) => onChange({ ...filters, endDate: e.target.value })}
                                        className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                    />
                                </div>
                            </div>
                        )}
                    </section>

                    {/* Price Range */}
                    <section>
                        <button
                            onClick={() => toggleSection('price')}
                            className="w-full flex justify-between items-center mb-4 text-slate-900 dark:text-white font-bold text-sm"
                        >
                            Price Range {expanded.price ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                        {expanded.price && (
                            <div className="space-y-4">
                                <div className="flex justify-between text-xs font-bold text-slate-500">
                                    <span>$100</span>
                                    <span className="text-primary">${filters.price.toLocaleString()}</span>
                                    <span>$10,000</span>
                                </div>
                                <input
                                    type="range"
                                    min="100"
                                    max="10000"
                                    value={filters.price}
                                    onChange={(e) => onChange({ ...filters, price: parseInt(e.target.value) })}
                                    className="w-full h-1.5 bg-slate-100 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary"
                                />
                            </div>
                        )}
                    </section>

                    {/* Duration */}
                    <section>
                        <button
                            onClick={() => toggleSection('duration')}
                            className="w-full flex justify-between items-center mb-4 text-slate-900 dark:text-white font-bold text-sm"
                        >
                            Duration {expanded.duration ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                        {expanded.duration && (
                            <div className="space-y-3">
                                {DURATION_OPTIONS.map((opt) => (
                                    <label key={opt.value} className="flex items-center group cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={filters.durations.includes(opt.value)}
                                            onChange={() => handleCheckboxChange('durations', opt.value)}
                                            className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary/20 transition-all cursor-pointer"
                                        />
                                        <span className="ml-3 text-sm text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">{opt.label}</span>
                                    </label>
                                ))}
                            </div>
                        )}
                    </section>

                    {/* Tour Type */}
                    <section>
                        <button
                            onClick={() => toggleSection('type')}
                            className="w-full flex justify-between items-center mb-4 text-slate-900 dark:text-white font-bold text-sm"
                        >
                            Tour Type {expanded.type ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                        {expanded.type && (
                            <div className="space-y-3">
                                {TOUR_TYPES.map((type) => (
                                    <label key={type} className="flex items-center group cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={filters.tourTypes.includes(type)}
                                            onChange={() => handleCheckboxChange('tourTypes', type)}
                                            className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary/20 transition-all cursor-pointer"
                                        />
                                        <span className="ml-3 text-sm text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">{type}</span>
                                    </label>
                                ))}
                            </div>
                        )}
                    </section>

                    {/* Accommodation Type */}
                    <section>
                        <button
                            onClick={() => toggleSection('accommodation')}
                            className="w-full flex justify-between items-center mb-4 text-slate-900 dark:text-white font-bold text-sm"
                        >
                            Accommodation Type {expanded.accommodation ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                        {expanded.accommodation && (
                            <div className="space-y-3">
                                {ACCOMMODATIONS.map((acc) => (
                                    <label key={acc} className="flex items-center group cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={filters.accommodations.includes(acc)}
                                            onChange={() => handleCheckboxChange('accommodations', acc)}
                                            className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary/20 transition-all cursor-pointer"
                                        />
                                        <span className="ml-3 text-sm text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">{acc}</span>
                                    </label>
                                ))}
                            </div>
                        )}
                    </section>

                    {/* Inclusions */}
                    <section>
                        <button
                            onClick={() => toggleSection('inclusions')}
                            className="w-full flex justify-between items-center mb-4 text-slate-900 dark:text-white font-bold text-sm"
                        >
                            Inclusions {expanded.inclusions ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                        {expanded.inclusions && (
                            <div className="space-y-3">
                                {INCLUSIONS.map((item) => (
                                    <label key={item} className="flex items-center group cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={filters.inclusions.includes(item)}
                                            onChange={() => handleCheckboxChange('inclusions', item)}
                                            className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary/20 transition-all cursor-pointer"
                                        />
                                        <span className="ml-3 text-sm text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">{item}</span>
                                    </label>
                                ))}
                            </div>
                        )}
                    </section>

                    {/* Ratings */}
                    <section>
                        <button
                            onClick={() => toggleSection('rating')}
                            className="w-full flex justify-between items-center mb-4 text-slate-900 dark:text-white font-bold text-sm"
                        >
                            Rating {expanded.rating ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                        {expanded.rating && (
                            <div className="space-y-3">
                                {[5, 4, 3, 2, 1].map((rating) => (
                                    <label key={rating} className="flex items-center group cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={filters.ratings.includes(rating)}
                                            onChange={() => handleCheckboxChange('ratings', rating)}
                                            className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary/20 transition-all cursor-pointer"
                                        />
                                        <div className="ml-3 flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className={cn("w-3.5 h-3.5", i < rating ? "text-yellow-500 fill-yellow-500" : "text-slate-200 dark:text-slate-700")} />
                                            ))}
                                            {rating < 5 && <span className="text-[10px] text-slate-400 font-bold ml-1">& Up</span>}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        )}
                    </section>
                </div>

                <div className="p-6 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-700">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="w-full py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-[0.98]"
                    >
                        Apply Filters
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PackageFilters;
