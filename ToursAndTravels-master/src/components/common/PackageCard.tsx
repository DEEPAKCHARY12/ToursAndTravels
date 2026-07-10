import { Link } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';
import type { PackageProps } from '../../types';

export default function PackageCard({ pkg }: { pkg: PackageProps }) {
    return (
        <div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 hover:-translate-y-1">
            <Link to={`/packages/${pkg.slug}`} className="relative h-64 overflow-hidden block">
                <img
                    src={pkg.image}
                    alt={pkg.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1 text-sm font-bold shadow-sm">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /> {pkg.rating}
                </div>
                {pkg.isBestSeller && (
                    <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wide">Best Seller</span>
                    </div>
                )}
            </Link>
            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <Link to={`/packages/${pkg.slug}`}>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white hover:text-primary transition-colors">{pkg.title}</h3>
                    </Link>
                    <div className="flex flex-col items-end">
                        <span className="text-xs text-slate-400 line-through">${pkg.originalPrice.toLocaleString()}</span>
                        <span className="text-lg font-bold text-primary">${pkg.price.toLocaleString()}</span>
                    </div>
                </div>
                <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm mb-4">
                    <MapPin className="w-4 h-4 mr-1" /> {pkg.location}
                    <span className="mx-2 text-slate-300">•</span>
                    <span>{pkg.duration}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 line-clamp-2">
                    {pkg.description}
                </p>
                <Link to={`/packages/${pkg.slug}`} className="w-full py-3 inline-block text-center border border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-lg transition-colors">
                    View Deal
                </Link>
            </div>
        </div>
    );
}
