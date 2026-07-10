import { Filter } from 'lucide-react';
import { categories } from '../../data/inspireData';

export default function CategoryFilters() {
    return (
        <section className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                    {categories.map((category, index) => (
                        <button 
                            key={category}
                            className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                                index === 0 
                                    ? 'bg-primary text-white shadow-md shadow-primary/20' 
                                    : 'bg-white dark:bg-slate-800 border border-primary/10 hover:border-primary text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Filter className="w-5 h-5" />
                    <span className="font-medium">Sort by: <span className="text-slate-900 dark:text-white font-bold cursor-pointer underline decoration-primary/30 hover:text-primary transition-colors">Latest</span></span>
                </div>
            </div>
        </section>
    );
}
