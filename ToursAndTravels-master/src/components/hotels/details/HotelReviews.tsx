import { Star, ThumbsUp, Flag } from 'lucide-react';
import type { ReviewProps } from '../../../types';

interface HotelReviewsProps {
    rating: number;
    reviews: number;
    ratingSummary?: {
        cleanliness: number;
        location: number;
        service: number;
        value: number;
    };
    reviewsList?: ReviewProps[];
}

export default function HotelReviews({ rating, reviews, ratingSummary, reviewsList }: HotelReviewsProps) {
    return (
        <section id="reviews" className="pt-8 border-t border-slate-200 dark:border-slate-800 scroll-mt-28">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Guest Reviews</h2>
                <button className="text-primary font-semibold text-sm hover:underline">Write a Review</button>
            </div>

            {/* Rating Summary Box */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800 pb-6 md:pb-0">
                        <div className="text-5xl font-bold text-primary mb-2">{rating}</div>
                        <div className="flex text-yellow-400 mb-2">
                             {[...Array(5)].map((_, i) => (
                                <Star 
                                    key={i} 
                                    className={`w-5 h-5 ${i < Math.floor(rating) ? 'fill-current' : 'text-slate-300 dark:text-slate-600'}`} 
                                />
                            ))}
                        </div>
                        <p className="text-sm text-slate-500 uppercase font-bold tracking-wider">Based on {reviews} reviews</p>
                    </div>
                    
                    {ratingSummary && (
                        <div className="md:col-span-2 space-y-3">
                            <div className="space-y-3">
                                {Object.entries(ratingSummary).map(([key, value]) => (
                                    <div key={key} className="flex items-center gap-4">
                                        <span className="text-sm font-medium w-24 capitalize text-slate-700 dark:text-slate-300">{key}</span>
                                        <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                            <div 
                                                className={`h-full ${value >= 4.5 ? 'bg-emerald-500' : value >= 4.0 ? 'bg-primary' : 'bg-amber-500'}`} 
                                                style={{ width: `${(value / 5) * 100}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-sm font-bold w-8 text-right text-slate-900 dark:text-white">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Filter Controls (Static Mock) */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex gap-2">
                    <button className="px-4 py-2 text-sm font-medium border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300">All Ratings</button>
                    <button className="px-4 py-2 text-sm font-medium border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-1 text-slate-700 dark:text-slate-300">5 <Star className="w-3 h-3" /></button>
                    <button className="px-4 py-2 text-sm font-medium border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-1 text-slate-700 dark:text-slate-300">4 <Star className="w-3 h-3" /></button>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-500">Sort by:</span>
                    <select className="text-sm font-medium border-slate-200 dark:border-slate-800 dark:bg-slate-900 rounded-lg focus:ring-primary focus:border-primary text-slate-900 dark:text-white">
                        <option>Newest first</option>
                        <option>Highest rated</option>
                        <option>Lowest rated</option>
                    </select>
                </div>
            </div>

            {/* Reviews List */}
            <div className="space-y-6">
                {reviewsList?.map((review) => (
                    <div key={review.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center font-bold text-slate-500 overflow-hidden">
                                    <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white">{review.name}</p>
                                    <p className="text-xs text-slate-500">Stayed May 2024 • {review.role}</p>
                                </div>
                            </div>
                            <div className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-bold">{review.rating.toFixed(1)}</div>
                        </div>
                        <h4 className="font-bold mb-2 text-slate-900 dark:text-white">Exceptional Experience and Staff!</h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                            {review.review}
                        </p>
                        <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                            <button className="flex items-center gap-1 hover:text-primary transition-colors"><ThumbsUp className="w-3.5 h-3.5" /> Helpful (12)</button>
                            <button className="flex items-center gap-1 hover:text-primary transition-colors"><Flag className="w-3.5 h-3.5" /> Report</button>
                        </div>
                    </div>
                ))}
                
                <button className="w-full py-3 text-sm font-bold text-primary border border-primary/20 rounded-xl hover:bg-primary/5 transition-colors">
                    Show more {reviews - (reviewsList?.length || 0)} reviews
                </button>
            </div>
        </section>
    );
}
