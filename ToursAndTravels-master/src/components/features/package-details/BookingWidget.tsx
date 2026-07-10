import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, Heart, Share2, Plus, Minus, Info, CheckCircle2, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { AvailableDate } from '../../../types';

interface BookingWidgetProps {
    pkgTitle: string;
    basePrice: number;
    originalPrice: number;
    availableDates: AvailableDate[];
}

const ROOM_TYPES = [
    { id: 'standard', name: 'Standard Room', price: 0 },
    { id: 'deluxe', name: 'Deluxe Suite', price: 150 },
    { id: 'luxury', name: 'Luxury Villa', price: 350 },
];

const ADD_ONS = [
    { id: 'airport', name: 'Airport Transfer', price: 50 },
    { id: 'insurance', name: 'Travel Insurance', price: 80 },
    { id: 'dinner', name: 'Private Beach Dinner', price: 120 },
];

const BookingWidget: React.FC<BookingWidgetProps> = ({ pkgTitle, basePrice, originalPrice, availableDates }) => {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState<string>(availableDates[0]?.id || '');
    const [selectedRoom, setSelectedRoom] = useState('standard');
    const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
    const [travelers, setTravelers] = useState(1);
    const [isWishlisted, setIsWishlisted] = useState(false);

    const handleBookNow = () => {
        const dateObj = availableDates.find(d => d.id === selectedDate);
        navigate('/checkout', {
            state: {
                pkgTitle,
                date: dateObj ? `${dateObj.start} - ${dateObj.end}` : '',
                travelers,
                total: priceInfo.total,
                basePrice,
                roomType: selectedRoom,
                addOns: selectedAddOns
            }
        });
    };

    const priceInfo = useMemo(() => {
        const dateObj = availableDates.find(d => d.id === selectedDate);
        const roomObj = ROOM_TYPES.find(r => r.id === selectedRoom);
        const addOnsTotal = selectedAddOns.reduce((acc, id) => {
            const addOn = ADD_ONS.find(a => a.id === id);
            return acc + (addOn?.price || 0);
        }, 0);

        const currentUnitPrice = basePrice + (dateObj?.priceAdjustment || 0) + (roomObj?.price || 0);
        return {
            unitPrice: currentUnitPrice,
            total: (currentUnitPrice * travelers) + addOnsTotal
        };
    }, [selectedDate, selectedRoom, selectedAddOns, travelers, basePrice, availableDates]);

    const toggleAddOn = (id: string) => {
        setSelectedAddOns(prev =>
            prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
        );
    };

    return (
        <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-2xl p-6 sticky top-24 space-y-6">
            {/* Header */}
            <div>
                <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-xs text-slate-400 line-through font-bold">${originalPrice}</span>
                    <span className="text-4xl font-black text-primary">${priceInfo.unitPrice}</span>
                    <span className="text-xs font-bold text-slate-500 uppercase">/ person</span>
                </div>
                <p className="text-[10px] text-slate-400 font-bold flex items-center gap-1 uppercase tracking-tighter">
                    <Info className="w-3 h-3 text-primary" /> Low price guarantee & No booking fees
                </p>
            </div>

            {/* Date Selection */}
            <div className="space-y-3">
                <label className="text-xs font-extrabold text-slate-800 dark:text-slate-200 uppercase tracking-widest flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-primary" /> Choose Departure
                </label>
                <div className="grid grid-cols-1 gap-2">
                    {availableDates.map((date) => (
                        <button
                            key={date.id}
                            onClick={() => setSelectedDate(date.id)}
                            className={cn(
                                "flex items-center justify-between p-3 rounded-2xl border transition-all text-left",
                                selectedDate === date.id
                                    ? "border-primary bg-primary/5 shadow-sm ring-1 ring-primary"
                                    : "border-slate-100 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-500"
                            )}
                        >
                            <div>
                                <span className="block text-[11px] font-bold text-slate-900 dark:text-white">{date.start} - {date.end}</span>
                                {date.priceAdjustment && date.priceAdjustment > 0 ? (
                                    <span className="text-[9px] font-extrabold text-amber-500 uppercase">Peak Season (+${date.priceAdjustment})</span>
                                ) : (
                                    <span className="text-[9px] font-extrabold text-emerald-500 uppercase">Best Price</span>
                                )}
                            </div>
                            {selectedDate === date.id && <CheckCircle2 className="w-4 h-4 text-primary" />}
                        </button>
                    ))}
                </div>
            </div>

            {/* Room Type Selection */}
            <div className="space-y-3">
                <label className="text-xs font-extrabold text-slate-800 dark:text-slate-200 uppercase tracking-widest flex items-center gap-2">
                    <Home className="w-3.5 h-3.5 text-primary" /> Room Type
                </label>
                <select
                    value={selectedRoom}
                    onChange={(e) => setSelectedRoom(e.target.value)}
                    className="w-full p-3 rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-sm font-bold text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-primary/20"
                >
                    {ROOM_TYPES.map(room => (
                        <option key={room.id} value={room.id}>
                            {room.name} {room.price > 0 ? `(+$${room.price})` : ''}
                        </option>
                    ))}
                </select>
            </div>

            {/* Travel Selector */}
            <div className="space-y-3">
                <label className="text-xs font-extrabold text-slate-800 dark:text-slate-200 uppercase tracking-widest flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-primary" /> Travelers
                </label>
                <div className="flex items-center justify-between p-3 rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
                    <span className="text-sm font-bold text-slate-900 dark:text-white">Total People</span>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setTravelers(Math.max(1, travelers - 1))}
                            className="p-1.5 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 hover:bg-slate-50 transition-colors"
                        >
                            <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-6 text-center font-black text-slate-900 dark:text-white">{travelers}</span>
                        <button
                            onClick={() => setTravelers(travelers + 1)}
                            className="p-1.5 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 hover:bg-slate-50 transition-colors"
                        >
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Add-ons */}
            <div className="space-y-3">
                <label className="text-xs font-extrabold text-slate-800 dark:text-slate-200 uppercase tracking-widest flex items-center gap-2">
                    <Plus className="w-3.5 h-3.5 text-primary" /> Optional Add-ons
                </label>
                <div className="space-y-2">
                    {ADD_ONS.map(addon => (
                        <label
                            key={addon.id}
                            className="flex items-center justify-between p-3 rounded-xl border border-slate-100 dark:border-slate-700 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    checked={selectedAddOns.includes(addon.id)}
                                    onChange={() => toggleAddOn(addon.id)}
                                    className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary"
                                />
                                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{addon.name}</span>
                            </div>
                            <span className="text-xs font-extrabold text-primary">+${addon.price}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Total */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
                <div className="flex justify-between items-center mb-6">
                    <span className="text-sm font-bold text-slate-500 dark:text-slate-400">Total Price</span>
                    <span className="text-3xl font-black text-slate-900 dark:text-white">${priceInfo.total}</span>
                </div>

                <div className="grid grid-cols-1 gap-3">
                    <button
                        onClick={handleBookNow}
                        className="w-full py-4 bg-primary hover:bg-primary/90 text-white font-black rounded-2xl transition-all shadow-xl shadow-primary/30 text-lg uppercase tracking-tight"
                    >
                        Book Now
                    </button>
                    <button className="w-full py-4 bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 text-white font-black rounded-2xl transition-all shadow-lg uppercase tracking-tight text-sm">
                        Enquire Now
                    </button>
                </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 pt-2">
                <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-bold text-slate-500 hover:text-red-500 transition-colors"
                >
                    <Heart className={cn("w-4 h-4", isWishlisted && "fill-red-500 text-red-500")} /> {isWishlisted ? "Wishlisted" : "Add to Wishlist"}
                </button>
                <div className="w-px h-4 bg-slate-100 dark:bg-slate-700"></div>
                <button className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-bold text-slate-500 hover:text-primary transition-colors">
                    <Share2 className="w-4 h-4" /> Share Trip
                </button>
            </div>
        </div>
    );
};

export default BookingWidget;
