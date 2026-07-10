import React, { useMemo, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ALL_PACKAGES } from '../data/packages';
import PackageGallery from '../components/features/package-details/PackageGallery';
import QuickInfoBar from '../components/features/package-details/QuickInfoBar';
import BookingWidget from '../components/features/package-details/BookingWidget';
import TabsSection from '../components/features/package-details/TabsSection';
import ReviewsSection from '../components/features/package-details/ReviewsSection';
import AdvancedPackageCard from '../components/common/AdvancedPackageCard';
import { ArrowLeft, ChevronRight, Home } from 'lucide-react';

const PackageDetailsPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const pkg = useMemo(() => {
        return ALL_PACKAGES.find(p => p.slug === slug);
    }, [slug]);

    const similarPackages = useMemo(() => {
        if (!pkg) return [];
        return ALL_PACKAGES
            .filter(p => p.id !== pkg.id && (p.tourType === pkg.tourType || p.category === pkg.category))
            .slice(0, 3);
    }, [pkg]);

    if (!pkg) {
        return <Navigate to="/packages" replace />;
    }

    return (
        <div className="bg-white dark:bg-slate-950 min-h-screen pt-20">
            {/* Breadcrumbs */}
            <div className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <nav className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                        <Link to="/" className="hover:text-primary flex items-center gap-1 transition-colors">
                            <Home className="w-3.5 h-3.5" /> Home
                        </Link>
                        <ChevronRight className="w-3.5 h-3.5" />
                        <Link to="/packages" className="hover:text-primary transition-colors">Packages</Link>
                        <ChevronRight className="w-3.5 h-3.5" />
                        <span className="text-slate-900 dark:text-white truncate max-w-[200px]">{pkg.title}</span>
                    </nav>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Back Link */}
                <Link
                    to="/packages"
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-primary transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to all packages
                </Link>

                {/* Main Grid */}
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Column - Content */}
                    <div className="w-full lg:w-2/3 space-y-12">
                        {/* Header & Gallery */}
                        <div className="space-y-6">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-black text-primary uppercase tracking-widest">{pkg.tourType}</span>
                                    {pkg.isBestSeller && (
                                        <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-[10px] font-black rounded-full uppercase">Best Seller</span>
                                    )}
                                </div>
                                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                                    {pkg.title}
                                </h1>
                            </div>

                            <PackageGallery
                                images={pkg.gallery}
                                videoUrl={pkg.videoUrl}
                                tour360Url={pkg.tour360Url}
                            />
                        </div>

                        {/* Quick Info */}
                        <QuickInfoBar
                            duration={pkg.duration}
                            destinations={pkg.location}
                            groupSize={pkg.groupSize}
                            difficulty={pkg.difficulty}
                            rating={pkg.rating}
                            reviewCount={pkg.reviewCount}
                        />

                        {/* Tabs Content */}
                        <TabsSection
                            overview={pkg.description}
                            itinerary={pkg.itinerary}
                            inclusions={pkg.inclusions}
                            exclusions={pkg.exclusions}
                            accommodation={pkg.accommodation}
                            terms={pkg.termsAndConditions}
                        />

                        {/* Reviews */}
                        <ReviewsSection />
                    </div>

                    {/* Right Column - Sticky Sidebar */}
                    <div className="w-full lg:w-1/3">
                        <BookingWidget
                            pkgTitle={pkg.title}
                            basePrice={pkg.price}
                            originalPrice={pkg.originalPrice}
                            availableDates={pkg.availableDates}
                        />
                    </div>
                </div>

                {/* Similar Packages Section */}
                {similarPackages.length > 0 && (
                    <div className="mt-24 border-t border-slate-100 dark:border-slate-800 pt-16">
                        <div className="flex items-end justify-between mb-10">
                            <div>
                                <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">You Might Also Like</h2>
                                <p className="text-slate-500 dark:text-slate-400">Discover similar breathtaking journeys.</p>
                            </div>
                            <Link to="/packages" className="text-sm font-bold text-primary hover:underline">
                                View all packages
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {similarPackages.map((p) => (
                                <AdvancedPackageCard key={p.id} pkg={p} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PackageDetailsPage;
