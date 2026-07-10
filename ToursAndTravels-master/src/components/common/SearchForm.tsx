
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Plane, Building2, Briefcase, MapPin, CalendarDays, User } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming you have this utility

const searchSchema = z.object({
    destination: z.string().min(1, "Destination is required"),
    dates: z.string().optional(), // In a real app, this would be a date range
    guests: z.string().optional(),
});

type SearchFormValues = z.infer<typeof searchSchema>;

const TABS = [
    { id: 'hotels', label: 'Hotels', icon: Building2 },
    { id: 'flights', label: 'Flights', icon: Plane },
    { id: 'packages', label: 'Packages', icon: Briefcase },
] as const;

export default function SearchForm() {
    const [activeTab, setActiveTab] = useState<typeof TABS[number]['id']>('hotels');

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm<SearchFormValues>({
        resolver: zodResolver(searchSchema),
    });

    const onSubmit = (data: SearchFormValues) => {
        console.log('Search data:', { ...data, type: activeTab });
        if (activeTab === 'flights') {
            const params = new URLSearchParams();
            if (data.destination) params.append('to', data.destination);
            if (data.dates) params.append('date', data.dates);
            if (data.guests) params.append('travelers', data.guests);
            navigate(`/flights?${params.toString()}`);
        }
    };

    return (
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl p-4 sm:p-2">
                {/* Tabs */}
                <div className="flex space-x-6 px-4 pb-4 border-b border-slate-100 dark:border-slate-700 sm:border-none sm:pb-0 mb-4 sm:mb-0 sm:absolute sm:-top-12 left-0 sm:pl-4">
                    {TABS.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={cn(
                                    "flex items-center gap-2 px-4 py-2 rounded-t-lg font-medium transition-all",
                                    isActive
                                        ? "bg-white dark:bg-slate-800 text-primary font-semibold shadow-sm"
                                        : "bg-white/80 dark:bg-slate-800/80 text-white hover:bg-white hover:text-primary backdrop-blur-sm"
                                )}
                            >
                                <Icon className="w-5 h-5" />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                {/* Search Inputs */}
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:divide-x sm:divide-slate-200 dark:sm:divide-slate-700">

                    {/* Location */}
                    <div className="flex-1 px-4 py-2 relative group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-lg transition-colors">
                        <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Destination</label>
                        <div className="flex items-center">
                            <MapPin className="text-primary mr-2 w-5 h-5" />
                            <input
                                {...register('destination')}
                                type="text"
                                placeholder="Where are you going?"
                                className="w-full bg-transparent border-none p-0 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-0 font-semibold text-lg outline-none"
                            />
                        </div>
                    </div>

                    {/* Date */}
                    <div className="flex-1 px-4 py-2 relative group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-lg transition-colors">
                        <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Check-in - Check-out</label>
                        <div className="flex items-center">
                            <CalendarDays className="text-primary mr-2 w-5 h-5" />
                            <input
                                {...register('dates')}
                                type="text"
                                placeholder="Add dates"
                                className="w-full bg-transparent border-none p-0 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-0 font-semibold text-lg outline-none"
                            />
                        </div>
                    </div>

                    {/* Travelers */}
                    <div className="flex-1 px-4 py-2 relative group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-lg transition-colors">
                        <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Guests</label>
                        <div className="flex items-center">
                            <User className="text-primary mr-2 w-5 h-5" />
                            <input
                                {...register('guests')}
                                type="text"
                                placeholder="2 adults, 1 room"
                                className="w-full bg-transparent border-none p-0 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-0 font-semibold text-lg outline-none"
                            />
                        </div>
                    </div>

                    {/* Button */}
                    <div className="p-2 sm:pl-4">
                        <button type="submit" className="w-full sm:w-auto h-full bg-primary hover:bg-primary/90 text-white px-8 py-3 sm:py-0 rounded-lg font-bold text-lg shadow-lg shadow-primary/30 flex items-center justify-center gap-2 transition-all">
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
