import { cn } from '@/lib/utils';

interface FAQCategoryTabsProps {
    categories: string[];
    activeCategory: string;
    onSelectCategory: (category: string) => void;
}

export default function FAQCategoryTabs({ categories, activeCategory, onSelectCategory }: FAQCategoryTabsProps) {
    return (
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={cn(
                        "px-4 py-2 rounded-full text-sm font-medium transition-all",
                        activeCategory === category
                            ? "bg-primary text-white shadow-md shadow-primary/25"
                            : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
                    )}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}
