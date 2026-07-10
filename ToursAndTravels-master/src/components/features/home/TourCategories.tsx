import { cn } from '@/lib/utils';
import { CATEGORIES } from '../../../data/categories';

export default function TourCategories() {
    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Browse by Category</h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        Whether you're looking for an adrenaline rush or a peaceful getaway, we have the perfect tour for you.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {CATEGORIES.map((category) => {
                        const Icon = category.icon;
                        return (
                            <div
                                key={category.id}
                                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer group border border-slate-100 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50"
                            >
                                <div className={cn("w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110", category.color)}>
                                    <Icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">{category.name}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">{category.count}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
