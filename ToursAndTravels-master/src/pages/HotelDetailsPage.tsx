import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

import HotelGallery from '../components/hotels/details/HotelGallery';
import HotelHeader from '../components/hotels/details/HotelHeader';
import HotelBookingCard from '../components/hotels/details/HotelBookingCard';
import HotelRooms from '../components/hotels/details/HotelRooms';
import HotelReviews from '../components/hotels/details/HotelReviews';
import HotelPolicies from '../components/hotels/details/HotelPolicies';
import NearbyHotels from '../components/hotels/details/NearbyHotels';

import { hotelDetails } from '../data/hotelDetailsData';

export default function HotelDetailsPage() {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('overview');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const tabs = [
        { id: 'overview', label: 'Overview' },
        { id: 'rooms', label: 'Rooms' },
        { id: 'amenities', label: 'Amenities' },
        { id: 'reviews', label: 'Reviews' },
        { id: 'policies', label: 'Policies' },
    ];

    const scrollToSection = (sectionId: string) => {
        setActiveTab(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen">
             {/* Simple Breadcrumbs */}
             <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-4 mb-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav aria-label="Breadcrumb" className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        <ol className="flex items-center space-x-2">
                            <li><Link to="/" className="hover:text-primary">Home</Link></li>
                            <li><ChevronRight className="w-3 h-3" /></li>
                            <li><Link to="/hotels" className="hover:text-primary">Hotels</Link></li>
                            <li><ChevronRight className="w-3 h-3" /></li>
                            <li className="text-slate-900 dark:text-slate-200 font-semibold">{hotelDetails.name}</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <HotelGallery images={hotelDetails.images} />
                
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                        <HotelHeader 
                            name={hotelDetails.name} 
                            rating={hotelDetails.rating} 
                            location={hotelDetails.location} 
                            reviews={hotelDetails.reviews} 
                        />

                        {/* Sticky Tabs */}
                        <div className="sticky top-0 z-40 bg-background-light dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 mb-8 overflow-x-auto">
                            <nav className="flex space-x-8">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => scrollToSection(tab.id)}
                                        className={`py-4 px-1 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                                            activeTab === tab.id
                                                ? 'border-primary text-primary'
                                                : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
                                        }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </nav>
                        </div>

                        <div className="space-y-12">
                            <section id="overview" className="scroll-mt-28">
                                <h2 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">About the Hotel</h2>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                                    {hotelDetails.description}
                                </p>
                                <div id="amenities" className="scroll-mt-28">
                                    <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">Popular Amenities</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {hotelDetails.amenitiesList.map((amenity, index) => (
                                            <div key={index} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                                {amenity}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            <HotelRooms rooms={hotelDetails.rooms} />
                            
                            <HotelReviews 
                                rating={hotelDetails.rating} 
                                reviews={hotelDetails.reviews}
                                ratingSummary={hotelDetails.ratingSummary}
                                reviewsList={hotelDetails.reviewsList}
                            />
                            
                            <HotelPolicies policies={hotelDetails.policies} />
                        </div>
                    </div>

                    <aside className="w-full lg:w-[380px] flex-shrink-0">
                        <HotelBookingCard 
                            price={hotelDetails.price} 
                            tax={hotelDetails.tax}
                            checkIn={hotelDetails.policies.checkIn}
                            checkOut={hotelDetails.policies.checkOut}
                            guests="2 Adults, 1 Room"
                        />
                    </aside>
                </div>

                <NearbyHotels />
            </main>
        </div>
    );
}
