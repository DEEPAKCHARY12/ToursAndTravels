import { useState } from 'react';
import { Zap, Verified, Calendar, Users, Minus, Plus, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HotelBookingCardProps {
    price: number;
    tax: number;
    checkIn: string;
    checkOut: string;
    guests: string;
}

export default function HotelBookingCard({ price, tax, checkIn, checkOut }: HotelBookingCardProps) {
    const navigate = useNavigate();
    
    // Parse initial dates or default to today/tomorrow
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const [checkInDate, setCheckInDate] = useState(checkIn || today.toISOString().split('T')[0]);
    const [checkOutDate, setCheckOutDate] = useState(checkOut || tomorrow.toISOString().split('T')[0]);
    
    const [guestCounts, setGuestCounts] = useState({
        adults: 2,
        children: 0,
        rooms: 1
    });
    
    const [isGuestDropdownOpen, setIsGuestDropdownOpen] = useState(false);

    // Calculate nights
    const start = new Date(checkInDate);
    const end = new Date(checkOutDate);
    const timeDiff = end.getTime() - start.getTime();
    const nights = Math.max(1, Math.ceil(timeDiff / (1000 * 3600 * 24)));

    // Calculate totals
    const totalPrice = (price * nights) + tax;

    const handleGuestChange = (type: 'adults' | 'children' | 'rooms', operation: 'increment' | 'decrement') => {
        setGuestCounts(prev => {
            const newValue = operation === 'increment' ? prev[type] + 1 : prev[type] - 1;
            if (newValue < 0) return prev;
            if (type === 'rooms' && newValue < 1) return prev;
            if (type === 'adults' && newValue < 1) return prev;
            return { ...prev, [type]: newValue };
        });
    };

    return (
        <div className="sticky top-24 space-y-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl overflow-hidden">
                <div className="p-6 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                    <div className="flex justify-between items-baseline mb-2">
                        <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold text-slate-900 dark:text-white">₹{price.toLocaleString()}</span>
                            <span className="text-sm text-slate-500">/ night</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold">
                        <Zap className="w-3.5 h-3.5 fill-current" />
                        <span>Best Price Guaranteed</span>
                    </div>
                </div>
                
                <div className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl flex flex-col relative focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
                            <label className="text-[10px] font-bold uppercase text-slate-500 mb-1 flex items-center gap-1">
                                <Calendar className="w-3 h-3" /> Check-in
                            </label>
                            <input 
                                type="date" 
                                value={checkInDate}
                                min={new Date().toISOString().split('T')[0]}
                                onChange={(e) => setCheckInDate(e.target.value)}
                                className="w-full bg-transparent border-none p-0 text-sm font-bold text-slate-900 dark:text-white focus:ring-0 cursor-pointer"
                            />
                        </div>
                        <div className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl flex flex-col relative focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
                            <label className="text-[10px] font-bold uppercase text-slate-500 mb-1 flex items-center gap-1">
                                <Calendar className="w-3 h-3" /> Check-out
                            </label>
                            <input 
                                type="date" 
                                value={checkOutDate}
                                min={checkInDate}
                                onChange={(e) => setCheckOutDate(e.target.value)}
                                className="w-full bg-transparent border-none p-0 text-sm font-bold text-slate-900 dark:text-white focus:ring-0 cursor-pointer"
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <button 
                            onClick={() => setIsGuestDropdownOpen(!isGuestDropdownOpen)}
                            className="w-full p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl flex flex-col items-start hover:border-primary transition-colors text-left"
                        >
                            <label className="text-[10px] font-bold uppercase text-slate-500 mb-1 flex items-center gap-1">
                                <Users className="w-3 h-3" /> Guests & Rooms
                            </label>
                            <div className="flex justify-between items-center w-full">
                                <span className="text-sm font-bold text-slate-900 dark:text-white">
                                    {guestCounts.adults} Adults, {guestCounts.children} Child, {guestCounts.rooms} Room
                                </span>
                                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isGuestDropdownOpen ? 'rotate-180' : ''}`} />
                            </div>
                        </button>

                        {isGuestDropdownOpen && (
                            <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl z-50 p-4 space-y-4">
                                {Object.entries(guestCounts).map(([key, value]) => (
                                    <div key={key} className="flex items-center justify-between">
                                        <span className="text-sm font-medium capitalize text-slate-700 dark:text-slate-300">{key}</span>
                                        <div className="flex items-center gap-3">
                                            <button 
                                                onClick={() => handleGuestChange(key as any, 'decrement')}
                                                disabled={value <= (key === 'children' ? 0 : 1)}
                                                className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed text-slate-600 dark:text-slate-400"
                                            >
                                                <Minus className="w-3 h-3" />
                                            </button>
                                            <span className="w-4 text-center text-sm font-bold text-slate-900 dark:text-white">{value}</span>
                                            <button 
                                                onClick={() => handleGuestChange(key as any, 'increment')}
                                                className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
                                            >
                                                <Plus className="w-3 h-3" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                <button 
                                    onClick={() => setIsGuestDropdownOpen(false)}
                                    className="w-full py-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                                >
                                    Done
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="pt-4 space-y-2 text-sm bg-slate-50 dark:bg-slate-800/50 -mx-6 px-6 py-4 border-t border-slate-100 dark:border-slate-800">
                        <div className="flex justify-between text-slate-600 dark:text-slate-400">
                            <span>₹{price.toLocaleString()} x {nights} nights</span>
                            <span className="font-medium">₹{(price * nights).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-slate-600 dark:text-slate-400">
                            <span>Taxes & Fees</span>
                            <span className="font-medium">₹{tax.toLocaleString()}</span>
                        </div>
                        <div className="pt-3 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center text-slate-900 dark:text-white mt-2">
                            <span className="text-base font-bold">Total Price</span>
                            <span className="text-xl font-bold text-primary">₹{totalPrice.toLocaleString()}</span>
                        </div>
                    </div>

                    <button 
                        onClick={() => navigate('/booking')}
                        className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 active:scale-95 transform"
                    >
                        Book Now
                    </button>
                    <p className="text-[11px] text-center text-slate-400">You won't be charged yet</p>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
                    <Verified className="w-6 h-6" />
                </div>
                <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Secure Booking</p>
                    <p className="text-xs text-slate-500">Your data is always protected</p>
                </div>
            </div>
        </div>
    );
}
