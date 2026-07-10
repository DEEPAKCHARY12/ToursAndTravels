import { useState, useMemo } from 'react';
import { Search, MessageSquare, Phone, Mail } from 'lucide-react';
import FAQItem from '../components/features/faq/FAQItem';
import FAQCategoryTabs from '../components/features/faq/FAQCategoryTabs';
import { FAQ_DATA, FAQ_CATEGORIES } from '../data/faq';

export default function FAQPage() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredFAQs = useMemo(() => {
        return FAQ_DATA.filter((item) => {
            const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
            const matchesSearch =
                item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.answer.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    return (
        <div className="bg-slate-50 dark:bg-background-dark min-h-screen pb-20">
            {/* Header Section */}
            <section className="bg-primary text-white py-16 px-4 text-center">
                <h1 className="text-4xl font-bold mb-4">How can we help?</h1>
                <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                    Search our knowledge base or browse by category to find the answers you need.
                </p>

                {/* Search Bar */}
                <div className="relative max-w-xl mx-auto">
                    <input
                        type="text"
                        placeholder="Search for answers..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 rounded-full text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-lg text-lg"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6" />
                </div>
            </section>

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-6 md:p-8">

                    <FAQCategoryTabs
                        categories={FAQ_CATEGORIES}
                        activeCategory={activeCategory}
                        onSelectCategory={setActiveCategory}
                    />

                    <div className="space-y-4 min-h-[300px]">
                        {filteredFAQs.length > 0 ? (
                            filteredFAQs.map((faq) => (
                                <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
                            ))
                        ) : (
                            <div className="text-center py-12 text-slate-500">
                                <p>No results found for "{searchQuery}".</p>
                                <p className="text-sm mt-2">Try adjusting your search or category.</p>
                            </div>
                        )}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700 text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                            <MessageSquare className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Still have questions?</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                            Can't find the answer you're looking for? Our team is here to help.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 px-4 py-2 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
                                <Phone className="w-4 h-4 text-primary" />
                                <span className="font-medium">1234567890</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 px-4 py-2 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
                                <Mail className="w-4 h-4 text-primary" />
                                <span className="font-medium">abcd@gmail.com</span>
                            </div>
                        </div>
                        <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg font-medium transition-colors">
                            Contact Support
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
