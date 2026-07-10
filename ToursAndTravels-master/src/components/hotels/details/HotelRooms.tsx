import { Square, Bed, User, CheckCircle } from 'lucide-react';
import type { RoomProps } from '../../../types';

interface HotelRoomsProps {
    rooms: RoomProps[];
}

export default function HotelRooms({ rooms }: HotelRoomsProps) {
    if (!rooms || rooms.length === 0) return null;

    return (
        <section id="rooms" className="scroll-mt-28">
            <h2 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">Rooms & Rates</h2>
            <div className="space-y-4">
                {rooms.map((room) => (
                    <div key={room.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-shadow">
                        <div className="md:w-64 h-48 md:h-auto overflow-hidden">
                            <img 
                                src={room.image} 
                                alt={room.name} 
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="flex-1 p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{room.name}</h3>
                                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-slate-600 dark:text-slate-400">
                                        <div className="flex items-center gap-1">
                                            <Square className="w-4 h-4" /> 
                                            {room.size}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Bed className="w-4 h-4" /> 
                                            {room.bedType}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User className="w-4 h-4" /> 
                                            Sleeps {room.sleeps}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 text-sm text-slate-600 dark:text-slate-400 mb-6">
                                <ul className="space-y-1">
                                    {room.amenities.slice(0, 2).map((amenity, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-emerald-500" /> 
                                            {amenity}
                                        </li>
                                    ))}
                                </ul>
                                <ul className="space-y-1">
                                    {room.amenities.slice(2, 4).map((amenity, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-emerald-500" /> 
                                            {amenity}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                                <div>
                                    {room.originalPrice && (
                                        <p className="text-xs text-slate-500 line-through">₹{room.originalPrice.toLocaleString()}</p>
                                    )}
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-2xl font-bold text-slate-900 dark:text-white">₹{room.price.toLocaleString()}</span>
                                        <span className="text-sm text-slate-500">/ night</span>
                                    </div>
                                    <p className="text-[10px] text-slate-400">+ ₹{room.tax.toLocaleString()} taxes & fees</p>
                                </div>
                                <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
                                    Select Room
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
