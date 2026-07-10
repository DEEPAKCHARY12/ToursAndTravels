import { Grid } from 'lucide-react';

interface HotelGalleryProps {
    images: string[];
}

export default function HotelGallery({ images }: HotelGalleryProps) {
    if (!images || images.length === 0) return null;

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 h-[450px] mb-8 overflow-hidden rounded-2xl group">
            {/* Main Image */}
            <div className="md:col-span-2 h-full overflow-hidden">
                <img 
                    src={images[0]} 
                    alt="Hotel Main" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 cursor-pointer"
                />
            </div>
            
            {/* Secondary Images Column 1 */}
            <div className="hidden md:grid grid-cols-1 gap-3 h-full">
                {images[1] && (
                    <div className="h-full overflow-hidden">
                        <img 
                            src={images[1]} 
                            alt="Hotel View" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 cursor-pointer"
                        />
                    </div>
                )}
                {images[2] && (
                    <div className="h-full overflow-hidden">
                        <img 
                            src={images[2]} 
                            alt="Hotel Pool" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 cursor-pointer"
                        />
                    </div>
                )}
            </div>

            {/* Secondary Images Column 2 */}
            <div className="hidden md:grid grid-cols-1 gap-3 h-full">
                 {images[3] && (
                    <div className="h-full overflow-hidden">
                        <img 
                            src={images[3]} 
                            alt="Hotel Room" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 cursor-pointer"
                        />
                    </div>
                )}
                <div className="relative h-full overflow-hidden">
                    {images[4] ? (
                        <img 
                            src={images[4]} 
                            alt="Hotel Lobby" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    ) : (
                        <div className="w-full h-full bg-slate-200 dark:bg-slate-800"></div>
                    )}
                    
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white cursor-pointer hover:bg-black/40 transition-colors backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all">
                        <Grid className="w-8 h-8 mb-2" />
                        <span className="font-bold text-xl">+12 Photos</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
