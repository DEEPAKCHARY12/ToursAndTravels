
import React, { useState, useMemo } from 'react';
import { LayoutGrid, List, ChevronDown, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ALL_PACKAGES } from '../../../data/packages';
import AdvancedPackageCard from '../../common/AdvancedPackageCard';

import type { FilterState } from './PackageFilters';

interface PackageResultsProps {
    filters: FilterState;
    category?: string;
}

const PackageResults: React.FC<PackageResultsProps> = ({ filters, category }) => {
    const [view, setView] = useState<'grid' | 'list'>('grid');
    const [sortBy, setSortBy] = useState('popularity');
    const [isSortOpen, setIsSortOpen] = useState(false);

    const filteredPackages = useMemo(() => {
        return ALL_PACKAGES.filter(pkg => {
            // Category check
            if (category && pkg.category !== category.toLowerCase()) return false;

            // Search check
            if (filters.search && !pkg.title.toLowerCase().includes(filters.search.toLowerCase()) && !pkg.location.toLowerCase().includes(filters.search.toLowerCase())) {
                return false;
            }

            // Destination Multi-select check
            if (filters.destinations.length > 0) {
                if (!filters.destinations.some(dest => pkg.location.toLowerCase().includes(dest.toLowerCase()))) return false;
            }

            // Price check
            if (pkg.price > filters.price) return false;

            // Tour Type check
            if (filters.tourTypes.length > 0 && !filters.tourTypes.includes(pkg.tourType)) return false;

            // Accommodation check
            if (filters.accommodations.length > 0 && !filters.accommodations.includes(pkg.accommodation)) return false;

            // Duration check
            if (filters.durations.length > 0) {
                const pkgDays = parseInt(pkg.duration.split(' ')[0]);
                const matchesDuration = filters.durations.some(range => {
                    if (range === '1-3') return pkgDays >= 1 && pkgDays <= 3;
                    if (range === '4-7') return pkgDays >= 4 && pkgDays <= 7;
                    if (range === '8-14') return pkgDays >= 8 && pkgDays <= 14;
                    if (range === '15+') return pkgDays >= 15;
                    return false;
                });
                if (!matchesDuration) return false;
            }

            // Inclusions check
            if (filters.inclusions.length > 0) {
                if (!filters.inclusions.every(incl => pkg.inclusions.includes(incl))) return false;
            }

            // Rating check
            if (filters.ratings.length > 0) {
                if (!filters.ratings.some(r => pkg.rating >= r)) return false;
            }

            // Date Range check (Simplified simulation as we don't have exact dates in package data)
            // Real implementation would compare with available booking dates
            if (filters.startDate || filters.endDate) {
                // For now, we assume all packages are available if date is within "future"
                // This is a placeholder for real logic
            }

            return true;
        });
    }, [filters, category]);

    const sortedPackages = useMemo(() => {
        let sorted = [...filteredPackages];
        switch (sortBy) {
            case 'price-low':
                return sorted.sort((a, b) => a.price - b.price);
            case 'price-high':
                return sorted.sort((a, b) => b.price - a.price);
            case 'rating':
                return sorted.sort((a, b) => b.rating - a.rating);
            default:
                return sorted; // Popularity / Featured
        }
    }, [filteredPackages, sortBy]);

    const sortLabel = {
        popularity: 'Popularity',
        'price-low': 'Price: Low to High',
        'price-high': 'Price: High to Low',
        rating: 'Highest Rating',
    }[sortBy];

    return (
        <div className="flex flex-col gap-6">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-center bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm gap-4">
                <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                    Showing <span className="text-slate-900 dark:text-white">{sortedPackages.length}</span> results
                </div>

                <div className="flex items-center gap-4 w-full sm:w-auto">
                    {/* View Toggle */}
                    <div className="flex p-1 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-700">
                        <button
                            onClick={() => setView('grid')}
                            className={cn(
                                "p-2 rounded-lg transition-all",
                                view === 'grid' ? "bg-white dark:bg-slate-700 text-primary shadow-sm" : "text-slate-400 hover:text-slate-600"
                            )}
                        >
                            <LayoutGrid className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setView('list')}
                            className={cn(
                                "p-2 rounded-lg transition-all",
                                view === 'list' ? "bg-white dark:bg-slate-700 text-primary shadow-sm" : "text-slate-400 hover:text-slate-600"
                            )}
                        >
                            <List className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Sort Dropdown */}
                    <div className="relative flex-grow sm:flex-grow-0">
                        <button
                            onClick={() => setIsSortOpen(!isSortOpen)}
                            className="flex items-center justify-between gap-2 px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-900 dark:text-white w-full sm:w-48 whitespace-nowrap"
                        >
                            <span className="truncate">Sort: {sortLabel}</span>
                            <ChevronDown className={cn("w-4 h-4 transition-transform", isSortOpen && "rotate-180")} />
                        </button>

                        {isSortOpen && (
                            <div className="absolute top-full right-0 mt-2 w-full sm:w-48 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl shadow-2xl z-50 overflow-hidden">
                                {['popularity', 'price-low', 'price-high', 'rating'].map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => {
                                            setSortBy(option);
                                            setIsSortOpen(false);
                                        }}
                                        className={cn(
                                            "w-full px-4 py-3 text-left text-sm font-medium transition-colors border-b last:border-0 border-slate-50 dark:border-slate-700/50",
                                            sortBy === option
                                                ? "bg-primary/5 text-primary"
                                                : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900"
                                        )}
                                    >
                                        {{
                                            popularity: 'Popularity',
                                            'price-low': 'Price: Low to High',
                                            'price-high': 'Price: High to Low',
                                            rating: 'Highest Rating',
                                        }[option]}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Results Grid/List */}
            <div className={cn(
                "grid gap-8 transition-all duration-500",
                view === 'grid' ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
            )}>
                {sortedPackages.length > 0 ? (
                    sortedPackages.map((pkg) => (
                        <AdvancedPackageCard key={pkg.id} pkg={pkg} view={view} />
                    ))
                ) : (
                    <div className="col-span-full py-20 text-center bg-white dark:bg-slate-800 rounded-3xl border border-dashed border-slate-200 dark:border-slate-700">
                        <div className="mb-4 flex justify-center">
                            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-full">
                                <Search className="w-10 h-10 text-slate-300" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No packages found</h3>
                        <p className="text-slate-500 dark:text-slate-400">Try adjusting your filters to find what you're looking for.</p>
                    </div>
                )}
            </div>

            {/* Pagination Placeholder */}
            {sortedPackages.length > 0 && (
                <div className="mt-12 flex justify-center">
                    <nav className="flex items-center gap-2">
                        <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-400 cursor-not-allowed">Previous</button>
                        <button className="px-4 py-2 bg-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/20">1</button>
                        <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-400 hover:border-primary hover:text-primary transition-all">2</button>
                        <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-400 hover:border-primary hover:text-primary transition-all">3</button>
                        <span className="px-2 text-slate-400">...</span>
                        <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-400 hover:border-primary hover:text-primary transition-all">Next</button>
                    </nav>
                </div>
            )}
        </div>
    );
};

export default PackageResults;
