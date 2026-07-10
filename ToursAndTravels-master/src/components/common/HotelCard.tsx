
import { Link } from 'react-router-dom';
import { Star, MapPin, Check } from 'lucide-react';
import type { HotelProps } from '../../types';

export default function HotelCard({ hotel }: { hotel: HotelProps }) {
    return (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-shadow group">
            <div className="w-full md:w-72 h-64 md:h-auto overflow-hidden">
                <Link to={`/hotels/${hotel.id}`}>
                    <img
                        alt={hotel.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        src={hotel.image}
                    />
                </Link>
            </div>
            <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <Link to={`/hotels/${hotel.id}`}>
                                <h2 className="text-xl font-bold group-hover:text-primary transition-colors text-slate-900 dark:text-white">{hotel.name}</h2>
                            </Link>
                            <div className="flex items-center mt-1 text-slate-500">
                                <MapPin className="w-4 h-4 mr-1" />
                                <span className="text-sm font-medium">{hotel.location}</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <div className="flex items-center bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-300 px-2 py-1 rounded text-sm font-bold">
                                {hotel.rating} <Star className="w-3.5 h-3.5 ml-1 fill-current" />
                            </div>
                            <span className="text-[10px] text-slate-400 mt-1 uppercase font-bold">{hotel.reviews.toLocaleString()} Reviews</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {hotel.tags.map((tag, index) => (
                            <span key={index} className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2.5 py-1 rounded text-[11px] font-bold uppercase tracking-wider flex items-center gap-1">
                                <Check className="w-3.5 h-3.5" /> {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="mt-8 flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                    <div>
                        {hotel.originalPrice && (
                            <p className="text-xs text-slate-500 line-through">₹{hotel.originalPrice.toLocaleString()}</p>
                        )}
                        <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-extrabold text-slate-900 dark:text-white">₹{hotel.price.toLocaleString()}</span>
                            {hotel.perNight && <span className="text-sm text-slate-500 font-medium">/ night</span>}
                        </div>
                        <p className="text-[10px] text-emerald-600 font-bold">+ ₹{hotel.tax.toLocaleString()} taxes & fees</p>
                    </div>
                    <Link to={`/hotels/${hotel.id}`}>
                        <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 active:scale-95 transform">
                            View Deal
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
