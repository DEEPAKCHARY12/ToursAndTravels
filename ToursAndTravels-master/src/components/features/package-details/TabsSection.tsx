import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import ItineraryTimeline from './ItineraryTimeline';
import type { ItineraryDay } from '../../../types';

interface TabsSectionProps {
    overview: string;
    itinerary: ItineraryDay[];
    inclusions: string[];
    exclusions: string[];
    accommodation: string;
    terms: string[];
}

const TabsSection: React.FC<TabsSectionProps> = ({ overview, itinerary, inclusions, exclusions, accommodation, terms }) => {
    const [activeTab, setActiveTab] = useState('overview');

    const tabs = [
        { id: 'overview', label: 'Overview' },
        { id: 'itinerary', label: 'Itinerary' },
        { id: 'inclusions', label: 'Inclusions' },
        { id: 'accommodation', label: 'Accommodation' },
        { id: 'terms', label: 'T&C' },
    ];

    return (
        <div className="space-y-8">
            {/* Tab Buttons */}
            <div className="flex flex-wrap gap-2 border-b border-slate-100 dark:border-slate-700 pb-px">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                            "px-6 py-4 text-sm font-bold transition-all relative",
                            activeTab === tab.id
                                ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
                                : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                        )}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
                {activeTab === 'overview' && (
                    <div className="prose prose-slate dark:prose-invert max-w-none animate-in fade-in duration-500">
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Tour Overview</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                            {overview}
                        </p>
                    </div>
                )}

                {activeTab === 'itinerary' && (
                    <div className="animate-in fade-in duration-500">
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6">Day-by-Day Itinerary</h3>
                        <ItineraryTimeline itinerary={itinerary} />
                    </div>
                )}

                {activeTab === 'inclusions' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in duration-500">
                        <div>
                            <h3 className="text-xl font-black text-emerald-600 mb-6 flex items-center gap-2">
                                Inclusions
                            </h3>
                            <ul className="space-y-4">
                                {inclusions.map((inc, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                                            <span className="text-emerald-600 text-xs text-center font-bold">✓</span>
                                        </div>
                                        <span className="text-sm font-medium">{inc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-black text-red-600 mb-6 flex items-center gap-2">
                                Exclusions
                            </h3>
                            <ul className="space-y-4">
                                {exclusions.map((exc, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
                                            <span className="text-red-600 text-xs text-center font-bold">✕</span>
                                        </div>
                                        <span className="text-sm font-medium">{exc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}

                {activeTab === 'accommodation' && (
                    <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-dashed border-slate-200 dark:border-slate-700 animate-in fade-in duration-500">
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Stay Information</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
                            This package includes stays at prime {accommodation} locations. All rooms are carefully selected for comfort, cleanliness, and proximity to major attractions.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {['Free WiFi', 'Breakfast Included', 'Swimming Pool', 'Spa Access'].map((feat) => (
                                <div key={feat} className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm text-center">
                                    <span className="text-xs font-bold text-slate-900 dark:text-white">{feat}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'terms' && (
                    <div className="bg-amber-50/50 dark:bg-amber-900/10 p-8 rounded-3xl border border-amber-100 dark:border-amber-900/30 animate-in fade-in duration-500">
                        <h3 className="text-2xl font-black text-amber-900 dark:text-amber-100 mb-6">Terms & Conditions</h3>
                        <ul className="space-y-4">
                            {terms.map((term, i) => (
                                <li key={i} className="flex gap-3 text-amber-800 dark:text-amber-200">
                                    <span className="font-bold text-amber-500">{i + 1}.</span>
                                    <span className="text-sm font-medium leading-relaxed">{term}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TabsSection;
