import { Plane, Calendar, User, FileText, Home } from 'lucide-react';

interface BookingSummaryProps {
    booking?: {
        pkgTitle: string;
        date: string;
        travelers: number;
        total: number;
        roomType: string;
    }
}

export default function BookingSummary({ booking }: BookingSummaryProps) {
    if (!booking) {
        // Fallback for direct access
        return (
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl text-center">
                <p className="text-slate-500 italic">No active booking details found.</p>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 flex justify-between items-center">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    Itinerary Summary
                </h2>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase">
                    Paid
                </span>
            </div>

            <div className="p-6 space-y-6">
                {/* Trip Details */}
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                        <Plane className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-slate-900 dark:text-white">{booking.pkgTitle}</h3>
                        <p className="text-slate-500 text-sm">Tour Package</p>
                        <div className="mt-2 text-sm text-slate-600 dark:text-slate-300 grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-slate-400" />
                                <span>{booking.date}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-px bg-slate-100 dark:bg-slate-700"></div>

                {/* Accommodation */}
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-50 dark:bg-purple-900/20 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 flex-shrink-0">
                        <Home className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-slate-900 dark:text-white">Selected Accommodation</h3>
                        <p className="text-slate-500 text-sm uppercase font-bold text-xs">{booking.roomType}</p>
                    </div>
                </div>

                <div className="h-px bg-slate-100 dark:bg-slate-700"></div>

                {/* Traveler Details */}
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-50 dark:bg-orange-900/20 rounded-lg flex items-center justify-center text-orange-600 dark:text-orange-400 flex-shrink-0">
                        <User className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-slate-900 dark:text-white">Travelers</h3>
                        <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">{booking.travelers} Persons</p>
                    </div>
                </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/50 p-6 border-t border-slate-100 dark:border-slate-700">
                <div className="flex justify-between items-center pt-4 border-t border-slate-200 dark:border-slate-700">
                    <span className="text-lg font-bold text-slate-900 dark:text-white">Total Paid</span>
                    <span className="text-2xl font-bold text-primary">${booking.total}</span>
                </div>
            </div>
        </div>
    );
}
