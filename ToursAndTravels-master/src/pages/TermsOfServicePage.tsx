import { useState, useEffect } from 'react';
import {
    ArrowRight,
    Printer,
    Calendar,
    ArrowUp
} from 'lucide-react';

export default function TermsOfServicePage() {
    const [activeSection, setActiveSection] = useState('general-terms');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-20% 0px -60% 0px',
                threshold: 0
            }
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const getLinkClasses = (sectionId: string) => {
        const isActive = activeSection === sectionId;
        return `group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${isActive
            ? 'text-primary bg-primary/10'
            : 'text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800'
            }`;
    };

    const getIndicatorClasses = (sectionId: string) => {
        const isActive = activeSection === sectionId;
        return `w-1.5 h-1.5 rounded-full mr-3 transition-colors ${isActive ? 'bg-primary' : 'bg-neutral-300 group-hover:bg-primary'
            }`;
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
            {/* Hero Section */}
            <div className="no-print bg-primary/5 dark:bg-primary/10 py-12 border-b border-primary/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">Terms of Service</h1>
                    <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
                        Please read these terms carefully before using our booking services. They outline your rights, obligations, and the conditions of using Tours and Travels.
                    </p>
                </div>
            </div>

            {/* Main Layout */}
            <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sticky Sidebar (Table of Contents) */}
                    <aside className="no-print lg:w-64 flex-shrink-0 hidden lg:block">
                        <div className="sticky top-28">
                            <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4 px-3">Table of Contents</h3>
                            <nav aria-label="Table of Contents" className="space-y-1">
                                <a href="#general-terms" className={getLinkClasses('general-terms')}>
                                    <span className={getIndicatorClasses('general-terms')}></span>
                                    General Terms
                                </a>
                                <a href="#booking-terms" className={getLinkClasses('booking-terms')}>
                                    <span className={getIndicatorClasses('booking-terms')}></span>
                                    Booking Terms
                                </a>
                                <a href="#payment-terms" className={getLinkClasses('payment-terms')}>
                                    <span className={getIndicatorClasses('payment-terms')}></span>
                                    Payment Terms
                                </a>
                                <a href="#cancellation-policy" className={getLinkClasses('cancellation-policy')}>
                                    <span className={getIndicatorClasses('cancellation-policy')}></span>
                                    Cancellation Policy
                                </a>
                                <a href="#liability" className={getLinkClasses('liability')}>
                                    <span className={getIndicatorClasses('liability')}></span>
                                    Liability
                                </a>
                                <a href="#privacy-reference" className={getLinkClasses('privacy-reference')}>
                                    <span className={getIndicatorClasses('privacy-reference')}></span>
                                    Privacy Reference
                                </a>
                            </nav>
                            <div className="mt-8 p-4 bg-primary/5 dark:bg-primary/10 rounded-xl border border-primary/10">
                                <p className="text-sm font-medium text-neutral-900 dark:text-white mb-2">Need help?</p>
                                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3">Our support team is available 24/7 to answer your questions.</p>
                                <button className="w-full text-xs font-semibold text-primary hover:text-primary-dark transition-colors text-left flex items-center">
                                    Contact Support <ArrowRight className="w-3 h-3 ml-1" />
                                </button>
                            </div>
                        </div>
                    </aside>

                    {/* Content Area */}
                    <div className="flex-1 printable-content">
                        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-700 p-8 md:p-12 relative">
                            {/* Content Header */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-8 border-b border-neutral-100 dark:border-neutral-700 gap-4">
                                <div>
                                    <span className="text-sm font-semibold text-primary uppercase tracking-wide">Legal Document</span>
                                    <div className="flex items-center mt-1 text-neutral-500 dark:text-neutral-400 text-sm">
                                        <Calendar className="w-4 h-4 mr-1" />
                                        Last Updated: October 24, 2023
                                    </div>
                                </div>
                                <button
                                    className="no-print inline-flex items-center px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg text-sm font-medium text-neutral-700 dark:text-neutral-200 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                                    onClick={() => window.print()}
                                >
                                    <Printer className="w-4 h-4 mr-2" />
                                    Print Terms
                                </button>
                            </div>

                            {/* Introduction */}
                            <div className="prose prose-neutral dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-300 leading-relaxed mb-12">
                                <p className="text-lg">
                                    Welcome to Tours and Travels. By accessing our website, mobile application, or other services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.
                                </p>
                            </div>

                            {/* Sections */}
                            <div className="space-y-12">
                                {/* General Terms */}
                                <section id="general-terms" className="scroll-mt-28">
                                    <div className="flex items-center mb-4">
                                        <div className="w-1 h-6 bg-primary rounded-full mr-3"></div>
                                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">1. General Terms</h2>
                                    </div>
                                    <div className="text-neutral-600 dark:text-neutral-300 space-y-4 leading-relaxed">
                                        <p>
                                            These Terms of Service ("Terms") constitute a legally binding agreement between you ("User") and Tours and Travels Inc. ("Company," "we," "us," or "our").
                                        </p>
                                        <p>
                                            We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.
                                        </p>
                                    </div>
                                </section>

                                {/* Booking Terms */}
                                <section id="booking-terms" className="scroll-mt-28">
                                    <div className="flex items-center mb-4">
                                        <div className="w-1 h-6 bg-primary rounded-full mr-3"></div>
                                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">2. Booking Terms</h2>
                                    </div>
                                    <div className="text-neutral-600 dark:text-neutral-300 space-y-4 leading-relaxed">
                                        <p>
                                            When you book a reservation through our Service, you authorize us to act as your agent with the respective Service Provider (airline, hotel, car rental agency, etc.).
                                        </p>
                                        <ul className="list-disc pl-5 space-y-2 mt-2">
                                            <li><strong>Confirmation:</strong> Your booking is not confirmed until you receive a confirmation email with a ticket or reservation number.</li>
                                            <li><strong>Accuracy:</strong> You are responsible for ensuring that all details provided (names, dates, passport info) are accurate. Correction fees may apply for errors.</li>
                                            <li><strong>Availability:</strong> All bookings are subject to availability at the time of processing.</li>
                                        </ul>
                                    </div>
                                </section>

                                {/* Payment Terms */}
                                <section id="payment-terms" className="scroll-mt-28">
                                    <div className="flex items-center mb-4">
                                        <div className="w-1 h-6 bg-primary rounded-full mr-3"></div>
                                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">3. Payment Terms</h2>
                                    </div>
                                    <div className="text-neutral-600 dark:text-neutral-300 space-y-4 leading-relaxed">
                                        <p>
                                            Prices are displayed in the currency selected by the user, but charges may be processed in the local currency of the Service Provider. We accept major credit cards, debit cards, and select digital wallets.
                                        </p>
                                        <div className="bg-neutral-50 dark:bg-neutral-800/50 p-4 rounded-lg border border-neutral-100 dark:border-neutral-700 mt-4">
                                            <p className="text-sm italic">
                                                <span className="font-semibold text-primary">Note:</span> Your bank may charge a foreign transaction fee if the processing entity is located outside your country.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* Cancellation Policy */}
                                <section id="cancellation-policy" className="scroll-mt-28">
                                    <div className="flex items-center mb-4">
                                        <div className="w-1 h-6 bg-primary rounded-full mr-3"></div>
                                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">4. Cancellation Policy</h2>
                                    </div>
                                    <div className="text-neutral-600 dark:text-neutral-300 space-y-4 leading-relaxed">
                                        <p>
                                            Cancellation policies vary by Service Provider. Most low-cost airline tickets and promotional hotel rates are non-refundable.
                                        </p>
                                        <p>
                                            If your booking allows for cancellation, Tours and Travels may charge a processing fee in addition to any fees charged by the Service Provider. Refunds typically take 7-14 business days to appear on your statement, depending on your financial institution.
                                        </p>
                                    </div>
                                </section>

                                {/* Liability */}
                                <section id="liability" className="scroll-mt-28">
                                    <div className="flex items-center mb-4">
                                        <div className="w-1 h-6 bg-primary rounded-full mr-3"></div>
                                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">5. Liability</h2>
                                    </div>
                                    <div className="text-neutral-600 dark:text-neutral-300 space-y-4 leading-relaxed">
                                        <p>
                                            To the maximum extent permitted by law, Tours and Travels shall not be liable for any direct, indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
                                        </p>
                                        <p>
                                            We are not responsible for delays, cancellations, overbooking, strikes, force majeure, or other causes beyond our direct control.
                                        </p>
                                    </div>
                                </section>

                                {/* Privacy Reference */}
                                <section id="privacy-reference" className="scroll-mt-28">
                                    <div className="flex items-center mb-4">
                                        <div className="w-1 h-6 bg-primary rounded-full mr-3"></div>
                                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">6. Privacy Reference</h2>
                                    </div>
                                    <div className="text-neutral-600 dark:text-neutral-300 space-y-4 leading-relaxed">
                                        <p>
                                            Your privacy is important to us. Our use of your personal information is governed by our Privacy Policy. By using our services, you consent to the collection and use of your data as outlined therein.
                                        </p>
                                        <a href="/privacy-policy" className="inline-flex items-center font-semibold text-primary hover:text-primary-dark transition-colors">
                                            Read Full Privacy Policy <ArrowRight className="w-4 h-4 ml-1" />
                                        </a>
                                    </div>
                                </section>

                                {/* Contact Footer in Content */}
                                <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-700">
                                    <p className="text-neutral-500 dark:text-neutral-400">
                                        If you have questions about these terms, please contact <a href="mailto:legal@toursandtravels.com" className="text-primary hover:underline">legal@toursandtravels.com</a>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Scroll to Top FAB */}
            <button
                aria-label="Scroll to top"
                onClick={scrollToTop}
                className="no-print fixed bottom-8 right-8 z-40 p-4 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary flex items-center justify-center"
            >
                <ArrowUp className="w-6 h-6" />
            </button>
        </div>
    );
}
