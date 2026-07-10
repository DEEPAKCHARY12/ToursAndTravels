import AboutHero from '../components/features/about/AboutHero';
import MissionVision from '../components/features/about/MissionVision';
import StatsSection from '../components/features/about/StatsSection';
import TeamSection from '../components/features/about/TeamSection';
import Certifications from '../components/features/about/Certifications';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="bg-slate-50 dark:bg-background-dark min-h-screen">
            <AboutHero />
            <MissionVision />
            <StatsSection />
            <TeamSection />
            <Certifications />

            {/* Office Locations */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-16">Visit Us</h2>
                    {/* Reusing ContactInfo's office list logic or component if it was separate, 
                 but for now user asked for "Office locations" in About too. 
                 Let's reuse the OfficeLocations component which I previously created for Contact page. */}
                    <div className="flex flex-col items-center">
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 text-center max-w-2xl">
                            We have offices in key global cities to support you wherever you go.
                            Check out our full list of locations on our Contact page.
                        </p>
                        <Link
                            to="/contact#office-locations"
                            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                        >
                            View Office Locations <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                        Our team is ready to craft the perfect itinerary for you. Let's make your dream trip a reality.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl"
                    >
                        Contact Us Today <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
