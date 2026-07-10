import React, { useState } from 'react';
import { ChevronDown, Utensils, Car, Compass } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ItineraryDay } from '../../../types';

interface ItineraryTimelineProps {
    itinerary: ItineraryDay[];
}

const ItineraryTimeline: React.FC<ItineraryTimelineProps> = ({ itinerary }) => {
    const [expandedDay, setExpandedDay] = useState<number | null>(1);

    return (
        <div className="space-y-4">
            {itinerary.map((item) => (
                <div
                    key={item.day}
                    className={cn(
                        "group bg-white dark:bg-slate-800 rounded-3xl border transition-all duration-300",
                        expandedDay === item.day
                            ? "border-primary shadow-xl shadow-primary/5 shadow-inner"
                            : "border-slate-100 dark:border-slate-700 hover:border-slate-200"
                    )}
                >
                    <button
                        onClick={() => setExpandedDay(expandedDay === item.day ? null : item.day)}
                        className="w-full flex items-center justify-between p-6 text-left"
                    >
                        <div className="flex items-center gap-6">
                            <div className={cn(
                                "flex flex-col items-center justify-center w-14 h-14 rounded-2xl font-black text-sm shadow-lg transition-colors",
                                expandedDay === item.day
                                    ? "bg-primary text-white"
                                    : "bg-slate-50 dark:bg-slate-900 text-slate-500"
                            )}>
                                <span className="text-[10px] uppercase font-bold opacity-70">Day</span>
                                <span className="text-xl">{item.day}</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                                    {item.title}
                                </h4>
                                <div className="flex items-center gap-3 mt-1">
                                    {item.activities && (
                                        <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1 uppercase">
                                            <Compass className="w-3 h-3" /> {item.activities.length} Activities
                                        </span>
                                    )}
                                    {item.meals && (
                                        <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1 uppercase">
                                            <Utensils className="w-3 h-3" /> {item.meals.join(', ')}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <ChevronDown className={cn(
                            "w-6 h-6 text-slate-400 transition-transform duration-300",
                            expandedDay === item.day && "rotate-180 text-primary"
                        )} />
                    </button>

                    {expandedDay === item.day && (
                        <div className="px-6 pb-6 pt-0 animate-in fade-in slide-in-from-top-2 duration-300">
                            <div className="pl-20 relative">
                                {/* Vertical connector line in expanded view */}
                                <div className="absolute left-[39px] top-0 bottom-6 w-0.5 bg-dashed bg-slate-100 dark:bg-slate-700"></div>

                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                    {item.description}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {item.activities && (
                                        <div className="space-y-3">
                                            <h5 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">Highlights</h5>
                                            <div className="space-y-2">
                                                {item.activities.map((act, idx) => (
                                                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                        {act}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {item.transport && (
                                        <div className="space-y-3">
                                            <h5 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">Transport</h5>
                                            <div className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl text-sm text-slate-500 font-bold">
                                                <Car className="w-4 h-4 text-primary" />
                                                {item.transport}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ItineraryTimeline;
