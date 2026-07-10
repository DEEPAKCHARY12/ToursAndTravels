import { LOCATIONS } from '../../../data/locations';

export default function OfficeLocations() {

    return (
        <div id="office-locations" className="py-12">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">Our Global Offices</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {LOCATIONS.map((loc, index) => (
                    <div key={index} className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700">
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={loc.image}
                                alt={`${loc.city} Office`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                                <h4 className="text-xl font-bold">{loc.city}</h4>
                            </div>
                        </div>
                        <div className="p-6">
                            <p className="text-slate-600 dark:text-slate-300 text-sm mb-2 flex items-start gap-2">
                                <span className="font-semibold min-w-[60px]">Address:</span> {loc.address}
                            </p>
                            <p className="text-slate-600 dark:text-slate-300 text-sm flex items-start gap-2">
                                <span className="font-semibold min-w-[60px]">Phone:</span> {loc.phone}
                            </p>
                            <button className="mt-4 text-primary font-semibold text-sm hover:underline">
                                View on Map →
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
