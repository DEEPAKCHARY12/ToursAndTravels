
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PackageFilters, { type FilterState } from '../components/features/packages/PackageFilters';
import PackageResults from '../components/features/packages/PackageResults';

const DEFAULT_FILTERS: FilterState = {
    search: '',
    destinations: [],
    startDate: '',
    endDate: '',
    price: 10000,
    durations: [],
    tourTypes: [],
    accommodations: [],
    inclusions: [],
    ratings: [],
};

const PackagesPage: React.FC = () => {
    const { category } = useParams<{ category?: string }>();
    const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);

    const handleClearFilters = () => setFilters(DEFAULT_FILTERS);

    return (
        <div className="bg-slate-50 dark:bg-slate-900 min-h-screen pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                        {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Packages` : 'Explore Our Packages'}
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400">
                        Discover the perfect journey tailored to your desires.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Sidebar - Filters */}
                    <aside className="w-full lg:w-1/4">
                        <PackageFilters
                            filters={filters}
                            onChange={setFilters}
                            onClear={handleClearFilters}
                        />
                    </aside>

                    {/* Main Content - Results */}
                    <main className="w-full lg:w-3/4">
                        <PackageResults
                            filters={filters}
                            category={category}
                        />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default PackagesPage;
