import React, { useState } from 'react';
import { Maximize2, Play, Compass, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PackageGalleryProps {
    images: string[];
    videoUrl?: string;
    tour360Url?: string;
}

const PackageGallery: React.FC<PackageGalleryProps> = ({ images, videoUrl, tour360Url }) => {
    const [activeTab, setActiveTab] = useState<'photos' | 'video' | '360'>('photos');
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const handlePrev = () => {
        if (lightboxIndex === null) return;
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
    };

    const handleNext = () => {
        if (lightboxIndex === null) return;
        setLightboxIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
    };

    return (
        <div className="space-y-4">
            {/* Tabs for media types */}
            <div className="flex gap-2">
                <button
                    onClick={() => setActiveTab('photos')}
                    className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all",
                        activeTab === 'photos'
                            ? "bg-primary text-white shadow-lg shadow-primary/20"
                            : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-700"
                    )}
                >
                    <Maximize2 className="w-4 h-4" /> Photos
                </button>
                {videoUrl && (
                    <button
                        onClick={() => setActiveTab('video')}
                        className={cn(
                            "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all",
                            activeTab === 'video'
                                ? "bg-primary text-white shadow-lg shadow-primary/20"
                                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-700"
                        )}
                    >
                        <Play className="w-4 h-4" /> Video
                    </button>
                )}
                {tour360Url && (
                    <button
                        onClick={() => setActiveTab('360')}
                        className={cn(
                            "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all",
                            activeTab === '360'
                                ? "bg-primary text-white shadow-lg shadow-primary/20"
                                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-700"
                        )}
                    >
                        <Compass className="w-4 h-4" /> 360° Tour
                    </button>
                )}
            </div>

            {/* Media Content */}
            <div className="relative rounded-3xl overflow-hidden aspect-video bg-slate-100 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 shadow-xl group">
                {activeTab === 'photos' && (
                    <div className="grid grid-cols-4 grid-rows-2 gap-2 h-full">
                        <div className="col-span-3 row-span-2 relative cursor-pointer group/main overflow-hidden" onClick={() => setLightboxIndex(0)}>
                            <img src={images[0]} className="w-full h-full object-cover transition-transform duration-700 group-hover/main:scale-110" alt="Main" />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/main:opacity-100 transition-opacity flex items-center justify-center">
                                <Maximize2 className="text-white w-10 h-10" />
                            </div>
                        </div>
                        <div className="col-span-1 row-span-1 relative cursor-pointer group/thumb overflow-hidden" onClick={() => setLightboxIndex(1)}>
                            <img src={images[1]} className="w-full h-full object-cover transition-transform duration-700 group-hover/thumb:scale-110" alt="Thumb 1" />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center">
                                <Maximize2 className="text-white w-6 h-6" />
                            </div>
                        </div>
                        <div className="col-span-1 row-span-1 relative cursor-pointer group/thumb overflow-hidden" onClick={() => setLightboxIndex(2)}>
                            <img src={images[2]} className="w-full h-full object-cover transition-transform duration-700 group-hover/thumb:scale-110" alt="Thumb 2" />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white font-bold text-lg">+{images.length - 3}</span>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'video' && videoUrl && (
                    <iframe
                        className="w-full h-full"
                        src={videoUrl}
                        title="Package Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                )}

                {activeTab === '360' && tour360Url && (
                    <iframe
                        className="w-full h-full"
                        src={tour360Url}
                        title="360 Tour"
                        allowFullScreen
                    ></iframe>
                )}
            </div>

            {/* Lightbox Modal */}
            {lightboxIndex !== null && (
                <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
                    <button
                        onClick={() => setLightboxIndex(null)}
                        className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <button
                        onClick={handlePrev}
                        className="absolute left-6 translate-y-[-50%] top-1/2 p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>

                    <img
                        src={images[lightboxIndex]}
                        className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
                        alt={`Lightbox ${lightboxIndex}`}
                    />

                    <button
                        onClick={handleNext}
                        className="absolute right-6 translate-y-[-50%] top-1/2 p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>

                    <div className="absolute bottom-10 left-1/2 translate-x-[-50%] text-white font-bold">
                        {lightboxIndex + 1} / {images.length}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PackageGallery;
