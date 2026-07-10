import { Star, MapPin } from 'lucide-react';

interface HotelHeaderProps {
    name: string;
    rating: number;
    location: string;
    reviews: number;
}

export default function HotelHeader({ name, rating, location, reviews }: HotelHeaderProps) {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
            <div>
                <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{name}</h1>
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <Star 
                                key={i} 
                                className={`w-5 h-5 ${i < Math.floor(rating) ? 'fill-current' : 'text-slate-300 dark:text-slate-600'}`} 
                            />
                        ))}
                    </div>
                </div>
                <div className="flex items-center text-slate-600 dark:text-slate-400 gap-4 text-sm">
                    <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{location}</span>
                    </div>
                    <div className="flex items-center gap-1 text-primary font-semibold cursor-pointer hover:underline">
                        <span>Show on map</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-end">
                <div className="flex items-center gap-2">
                    <div className="text-right">
                        <p className="font-bold text-lg text-slate-900 dark:text-white">Excellent</p>
                        <p className="text-xs text-slate-500">{reviews} Reviews</p>
                    </div>
                    <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl">
                        {rating}
                    </div>
                </div>
            </div>
        </div>
    );
}
