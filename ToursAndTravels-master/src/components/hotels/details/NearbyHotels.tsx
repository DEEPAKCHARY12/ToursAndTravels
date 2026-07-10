import { HOTELS } from '../../../data/hotels';
import HotelCard from '../../common/HotelCard';

export default function NearbyHotels() {
    // Just take the first 4 hotels as "nearby" for now
    const nearbyHotels = HOTELS.slice(0, 4);

    return (
        <section className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 mb-12">
            <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Nearby Hotels You Might Like</h2>
            <div className="grid grid-cols-1 gap-6">
                {nearbyHotels.map((hotel) => (
                    <HotelCard key={hotel.id} hotel={hotel} />
                ))}
            </div>
        </section>
    );
}
