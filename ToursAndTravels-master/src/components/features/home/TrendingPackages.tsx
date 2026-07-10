import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import PackageCard from '../../common/PackageCard';
import { cn } from '@/lib/utils';
import { ALL_PACKAGES } from '../../../data/packages';

const TABS = [
    { id: 'all', label: 'All Packages' },
    { id: 'trending', label: 'Trending' },
    { id: 'new', label: 'New Arrivals' },
    { id: 'deals', label: 'Best Deals' },
] as const;

export default function TrendingPackages() {
    const [activeTab, setActiveTab] = useState<typeof TABS[number]['id']>('all');

    const filteredPackages = activeTab === 'all'
        ? ALL_PACKAGES
        : ALL_PACKAGES.filter(pkg => pkg.category === activeTab);

    return (
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Featured Packages</h2>
                    <p className="text-slate-500 dark:text-slate-400">Curated experiences loved by travelers worldwide.</p>
                </div>

                {/* Filter Tabs */}
                <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
                    {TABS.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "px-4 py-2 rounded-lg text-sm font-semibold transition-all",
                                activeTab === tab.id
                                    ? "bg-white dark:bg-slate-700 text-primary shadow-sm"
                                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                            )}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPackages.map((pkg) => (
                    <PackageCard key={pkg.id} pkg={pkg} />
                ))}
            </div>

            <div className="mt-12 text-center">
                <Link to="/packages" className="inline-flex items-center justify-center px-8 py-3 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    View All {ALL_PACKAGES.length} Packages <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
            </div>
        </section>
    );
}
