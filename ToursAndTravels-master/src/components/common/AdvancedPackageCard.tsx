import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Clock, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import type { PackageProps } from '../../types';
import { cn } from '@/lib/utils';

interface AdvancedPackageCardProps {
    pkg: PackageProps;
    view?: 'grid' | 'list';
}

const AdvancedPackageCard: React.FC<AdvancedPackageCardProps> = ({ pkg, view = 'grid' }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);

    const highlights = pkg.highlights.slice(0, 3); // Show first 3 highlights

    if (view === 'list') {
        return (
            <div className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row h-full">
                <div className="relative w-full md:w-72 h-64 md:h-auto overflow-hidden">
                    <Link to={`/packages/${pkg.slug}`} className="block h-full">
                        <img
                            src={pkg.image}
                            alt={pkg.imageAlt}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                    </Link>
                    <button
                        onClick={() => setIsWishlisted(!isWishlisted)}
                        className="absolute top-4 left-4 p-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur rounded-full shadow-sm hover:scale-110 transition-transform active:scale-95"
                    >
                        <Heart className={cn("w-5 h-5 transition-colors", isWishlisted ? "text-red-500 fill-red-500" : "text-slate-400")} />
                    </button>
                    {pkg.isBestSeller && (
                        <div className="absolute top-4 right-4 animate-bounce">
                            <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold rounded-full uppercase tracking-wider shadow-lg">Best Seller</span>
                        </div>
                    )}
                </div>

                <div className="flex-grow p-6 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{pkg.tourType}</span>
                                <span className="text-slate-300 dark:text-slate-600">•</span>
                                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{pkg.accommodation}</span>
                            </div>
                            <Link to={`/packages/${pkg.slug}`}>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{pkg.title}</h3>
                            </Link>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center gap-1 text-sm font-bold text-slate-900 dark:text-white mb-1">
                                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /> {pkg.rating}
                                <span className="text-slate-400 font-normal">({pkg.reviewCount})</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center text-slate-500 dark:text-slate-400 text-sm gap-y-2 mb-4">
                        <div className="flex items-center mr-4">
                            <MapPin className="w-4 h-4 mr-1 text-primary" /> {pkg.location}
                        </div>
                        <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1 text-primary" /> {pkg.duration}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl">
                        {highlights.map((h, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-300">
                                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                                {h}
                            </div>
                        ))}
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                        <div className="flex flex-col">
                            <span className="text-xs text-slate-400 line-through">${pkg.originalPrice.toLocaleString()}</span>
                            <div className="flex items-baseline gap-1">
                                <span className="text-2xl font-bold text-primary">${pkg.price.toLocaleString()}</span>
                                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">/ person</span>
                            </div>
                        </div>
                        <Link to={`/packages/${pkg.slug}`} className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center gap-2 group/btn">
                            View Details <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-700 hover:-translate-y-2 flex flex-col h-full">
            <div className="relative h-64 overflow-hidden">
                <Link to={`/packages/${pkg.slug}`} className="block h-full">
                    <img
                        src={pkg.image}
                        alt={pkg.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                </Link>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <button
                        onClick={() => setIsWishlisted(!isWishlisted)}
                        className="p-2.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur rounded-full shadow-lg hover:scale-110 transition-transform active:scale-95"
                    >
                        <Heart className={cn("w-5 h-5 transition-colors", isWishlisted ? "text-red-500 fill-red-500" : "text-slate-500")} />
                    </button>
                </div>

                <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
                    <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1.5 rounded-xl flex items-center gap-1.5 text-sm font-bold shadow-lg">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /> {pkg.rating}
                    </div>
                    {pkg.isBestSeller && (
                        <span className="px-3 py-1 bg-primary text-white text-[10px] font-extrabold rounded-lg uppercase tracking-wider shadow-xl shadow-primary/30">Best Seller</span>
                    )}
                </div>

                <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex gap-2">
                        {pkg.inclusions.slice(0, 3).map((incl, i) => (
                            <span key={i} className="px-2 py-1 bg-white/20 backdrop-blur text-white text-[10px] font-bold rounded-md border border-white/20 whitespace-nowrap">
                                {incl}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest">{pkg.tourType}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                        <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400">{pkg.accommodation}</span>
                    </div>
                    <Link to={`/packages/${pkg.slug}`}>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors leading-tight">{pkg.title}</h3>
                    </Link>
                </div>

                <div className="flex items-center text-slate-500 dark:text-slate-400 text-xs mb-6 gap-4">
                    <div className="flex items-center">
                        <MapPin className="w-3.5 h-3.5 mr-1 text-primary/70" /> {pkg.location}
                    </div>
                    <div className="flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1 text-primary/70" /> {pkg.duration}
                    </div>
                </div>

                <div className="mt-auto">
                    <div className="flex items-end justify-between mb-6">
                        <div className="flex flex-col">
                            <span className="text-xs text-slate-400 line-through mb-0.5">${pkg.originalPrice.toLocaleString()}</span>
                            <div className="flex items-baseline gap-1">
                                <span className="text-2xl font-black text-primary">${pkg.price.toLocaleString()}</span>
                                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">/ person</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <span className="text-[10px] text-slate-400 font-semibold block uppercase tracking-tighter">Rating</span>
                            <span className="text-sm font-bold text-slate-900 dark:text-white">{pkg.reviewCount} Reviews</span>
                        </div>
                    </div>

                    <Link to={`/packages/${pkg.slug}`} className="w-full py-4 bg-slate-900 dark:bg-white dark:text-slate-900 text-white hover:bg-primary dark:hover:bg-primary dark:hover:text-white font-bold rounded-2xl transition-all shadow-xl hover:shadow-primary/30 flex items-center justify-center gap-2 group/btn">
                        Explore Details <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdvancedPackageCard;
