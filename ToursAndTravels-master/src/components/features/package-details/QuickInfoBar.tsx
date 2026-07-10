import React from 'react';
import { Clock, Users, Shield, MapPin, Star } from 'lucide-react';

interface QuickInfoBarProps {
    duration: string;
    destinations: string;
    groupSize: string;
    difficulty: string;
    rating: number;
    reviewCount: number;
}

const QuickInfoBar: React.FC<QuickInfoBarProps> = ({ duration, destinations, groupSize, difficulty, rating, reviewCount }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm">
            <div className="flex flex-col gap-1 px-4 border-r border-slate-100 dark:border-slate-700 last:border-0">
                <div className="flex items-center gap-2 text-primary">
                    <Clock className="w-4 h-4" />
                    <span className="text-[10px] font-extrabold uppercase tracking-widest">Duration</span>
                </div>
                <span className="text-sm font-bold text-slate-900 dark:text-white">{duration}</span>
            </div>

            <div className="flex flex-col gap-1 px-4 border-r border-slate-100 dark:border-slate-700 last:border-0">
                <div className="flex items-center gap-2 text-primary">
                    <MapPin className="w-4 h-4" />
                    <span className="text-[10px] font-extrabold uppercase tracking-widest">Destinations</span>
                </div>
                <span className="text-sm font-bold text-slate-900 dark:text-white truncate">{destinations}</span>
            </div>

            <div className="flex flex-col gap-1 px-4 border-r border-slate-100 dark:border-slate-700 last:border-0">
                <div className="flex items-center gap-2 text-primary">
                    <Users className="w-4 h-4" />
                    <span className="text-[10px] font-extrabold uppercase tracking-widest">Group Size</span>
                </div>
                <span className="text-sm font-bold text-slate-900 dark:text-white">{groupSize}</span>
            </div>

            <div className="flex flex-col gap-1 px-4 border-r border-slate-100 dark:border-slate-700 last:border-0">
                <div className="flex items-center gap-2 text-primary">
                    <Shield className="w-4 h-4" />
                    <span className="text-[10px] font-extrabold uppercase tracking-widest">Difficulty</span>
                </div>
                <span className="text-sm font-bold text-slate-900 dark:text-white">{difficulty}</span>
            </div>

            <div className="flex flex-col gap-1 px-4 last:border-0">
                <div className="flex items-center gap-2 text-primary">
                    <Star className="w-4 h-4 fill-primary/20" />
                    <span className="text-[10px] font-extrabold uppercase tracking-widest">Reviews</span>
                </div>
                <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{rating}</span>
                    <span className="text-[10px] text-slate-400 font-bold">({reviewCount})</span>
                </div>
            </div>
        </div>
    );
};

export default QuickInfoBar;
