import React, { useState, useMemo } from 'react';
import { Star, ThumbsUp, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

const ReviewsSection: React.FC = () => {
    const [ratingFilter, setRatingFilter] = useState<number | 'all'>('all');
    const [dateSort, setDateSort] = useState<'newest' | 'oldest'>('newest');

    // Mock data for reviews
    const stats = {
        average: 4.8,
        total: 124,
        distribution: [
            { star: 5, count: 98 },
            { star: 4, count: 18 },
            { star: 3, count: 5 },
            { star: 2, count: 2 },
            { star: 1, count: 1 },
        ]
    };

    const allReviews = [
        {
            id: 1,
            author: "Sarah Johnson",
            date: "2024-02-15",
            rating: 5,
            comment: "An absolutely incredible experience! The Balinese hospitality was beyond words. Every detail of the itinerary was perfectly executed. The jungle trekking was a highlight.",
            likes: 12,
            verified: true
        },
        {
            id: 2,
            author: "Michael Chen",
            date: "2024-01-20",
            rating: 4,
            comment: "Great tour with excellent guides. The spa session was very relaxing. Only wish we had a bit more free time in Ubud market.",
            likes: 8,
            verified: true
        }
    ];

    const filteredReviews = useMemo(() => {
        let result = allReviews.filter(r => ratingFilter === 'all' || r.rating === ratingFilter);
        return result.sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return dateSort === 'newest' ? dateB - dateA : dateA - dateB;
        });
    }, [ratingFilter, dateSort]);

    return (
        <div className="space-y-12">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white">Traveler Reviews</h3>

            {/* Statistics Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-700">
                <div className="flex flex-col items-center justify-center text-center p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
                    <span className="text-6xl font-black text-slate-900 dark:text-white mb-2">{stats.average}</span>
                    <div className="flex gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} className={cn("w-5 h-5", s <= Math.floor(stats.average) ? "text-yellow-500 fill-yellow-500" : "text-slate-200")} />
                        ))}
                    </div>
                    <span className="text-sm font-bold text-slate-500">Based on {stats.total} reviews</span>
                </div>

                <div className="col-span-1 md:col-span-2 space-y-3 flex flex-col justify-center">
                    {stats.distribution.map((d) => (
                        <div key={d.star} className="flex items-center gap-4">
                            <span className="text-sm font-bold text-slate-600 dark:text-slate-400 whitespace-nowrap w-12">{d.star} Stars</span>
                            <div className="flex-grow h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden cursor-pointer" onClick={() => setRatingFilter(d.star)}>
                                <div
                                    className={cn("h-full transition-all", ratingFilter === d.star ? "bg-primary" : "bg-primary/40")}
                                    style={{ width: `${(d.count / stats.total) * 100}%` }}
                                />
                            </div>
                            <span className="text-sm font-bold text-slate-900 dark:text-white w-8">{d.count}</span>
                        </div>
                    ))}
                    {ratingFilter !== 'all' && (
                        <button onClick={() => setRatingFilter('all')} className="text-[10px] font-black text-primary uppercase text-left hover:underline">Clear Filter</button>
                    )}
                </div>
            </div>

            {/* Review List & Filters */}
            <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-center bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 gap-4">
                    <div className="flex items-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                        <span>Sort By:</span>
                        <select
                            value={dateSort}
                            onChange={(e) => setDateSort(e.target.value as any)}
                            className="bg-slate-50 dark:bg-slate-900 p-2 rounded-lg outline-none border border-slate-100 dark:border-slate-700 cursor-pointer"
                        >
                            <option value="newest">Newest First</option>
                            <option value="oldest">Oldest First</option>
                        </select>
                    </div>
                    <button className="w-full sm:w-auto px-6 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 text-sm">
                        Write Review (Verified Only)
                    </button>
                </div>

                <div className="space-y-4">
                    {filteredReviews.map((rev) => (
                        <div key={rev.id} className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm transition-all hover:shadow-xl hover:border-primary/20 group">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center font-black text-primary text-lg border-2 border-primary/10">
                                        {rev.author[0]}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                            {rev.author}
                                            {rev.verified && <span className="text-[9px] px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-full uppercase">Verified Bird</span>}
                                        </h4>
                                        <span className="text-xs font-medium text-slate-400">{rev.date}</span>
                                    </div>
                                </div>
                                <div className="flex gap-0.5">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <Star key={s} className={cn("w-4 h-4", s <= rev.rating ? "text-yellow-500 fill-yellow-500" : "text-slate-200")} />
                                    ))}
                                </div>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 italic">
                                "{rev.comment}"
                            </p>
                            <div className="flex items-center gap-6 pt-4 border-t border-slate-50 dark:border-slate-700/50">
                                <button className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-primary transition-colors">
                                    <ThumbsUp className="w-4 h-4" /> Helpful ({rev.likes})
                                </button>
                                <button className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-primary transition-colors">
                                    <MessageSquare className="w-4 h-4" /> Reply
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="pt-8 text-center">
                    <button className="px-10 py-4 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold rounded-2xl border border-slate-100 dark:border-slate-700 transition-all">
                        Load More Reviews
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewsSection;
