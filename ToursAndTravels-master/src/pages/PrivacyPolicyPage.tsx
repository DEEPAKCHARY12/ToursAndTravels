
import {
    Shield,
    Lock,
    Bell,
    BarChart3,
    User,
    CreditCard,
    Mail,
    MapPin,
    ArrowRight,
    Headphones,
    FileText
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function PrivacyPolicyPage() {
    const [activeSection, setActiveSection] = useState('introduction');

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
        return `group flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors border-l-4 ${isActive
            ? 'text-primary bg-primary/10 border-primary'
            : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-primary dark:hover:text-primary border-transparent hover:border-l-4 hover:border-primary'
            }`;
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 pt-12">
                <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 md:p-12 shadow-sm border border-neutral-200 dark:border-neutral-700 relative overflow-hidden">
                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4 relative z-10">Privacy Policy</h1>
                    <p className="text-neutral-600 dark:text-neutral-400 text-lg relative z-10">
                        Last Updated: <span className="font-medium text-primary">October 24, 2023</span>
                    </p>
                    <p className="mt-6 text-neutral-600 dark:text-neutral-300 max-w-3xl relative z-10 leading-relaxed">
                        At Tours and Travels, we value your trust and are committed to protecting your personal information. This policy outlines how we collect, use, and safeguard your data when you use our comprehensive travel booking services.
                    </p>
                </div>
            </div>

            {/* Two Column Layout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar Navigation (Sticky) */}
                    <aside className="lg:w-64 flex-shrink-0 hidden lg:block">
                        <div className="sticky top-28">
                            <h5 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-4 pl-4">Table of Contents</h5>
                            <nav className="flex flex-col space-y-1">
                                <a href="#introduction" className={getLinkClasses('introduction')}>
                                    Introduction
                                </a>
                                <a href="#information-we-collect" className={getLinkClasses('information-we-collect')}>
                                    Information We Collect
                                </a>
                                <a href="#how-we-use" className={getLinkClasses('how-we-use')}>
                                    How We Use Your Data
                                </a>
                                <a href="#data-sharing" className={getLinkClasses('data-sharing')}>
                                    Data Sharing & Third Parties
                                </a>
                                <a href="#cookies" className={getLinkClasses('cookies')}>
                                    Cookies & Tracking
                                </a>
                                <a href="#your-rights" className={getLinkClasses('your-rights')}>
                                    Your Rights
                                </a>
                                <a href="#contact" className={getLinkClasses('contact')}>
                                    Contact Us
                                </a>
                            </nav>

                            {/* Mini Support Card */}
                            <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/10">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-white dark:bg-neutral-800 rounded-lg shadow-sm">
                                        <Headphones className="text-primary w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-bold text-neutral-900 dark:text-white">Need Help?</span>
                                </div>
                                <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-3">Our support team is available 24/7 to answer your privacy questions.</p>
                                <a href="#" className="text-xs font-medium text-primary hover:text-primary/80 flex items-center gap-1">
                                    Contact Support <ArrowRight className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <div className="flex-1 min-w-0">
                        <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-700 p-8 md:p-12 space-y-12">

                            {/* Introduction */}
                            <section id="introduction" className="scroll-mt-28">
                                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                                    <span className="w-1.5 h-8 bg-primary rounded-full"></span>
                                    Introduction
                                </h2>
                                <div className="prose prose-neutral dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-300 leading-7">
                                    <p className="mb-4">
                                        Tours and Travels ("we," "our," or "us") is dedicated to facilitating your travel experiences while maintaining the highest standards of data privacy. This Privacy Policy explains what information we collect, how it is used, and the choices you have regarding your personal data.
                                    </p>
                                    <p>
                                        By using our website, mobile application, or services, you agree to the collection and use of information in accordance with this policy.
                                    </p>
                                </div>
                            </section>

                            <hr className="border-neutral-200 dark:border-neutral-700" />

                            {/* Information We Collect */}
                            <section id="information-we-collect" className="scroll-mt-28">
                                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Information We Collect</h2>
                                <div className="space-y-6">
                                    <div className="bg-neutral-100 dark:bg-neutral-900/50 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700">
                                        <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3 flex items-center gap-2">
                                            <User className="text-primary w-6 h-6" />
                                            Personal Information
                                        </h3>
                                        <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-300 ml-1">
                                            <li><strong>Identity Data:</strong> Name, date of birth, passport details, and gender.</li>
                                            <li><strong>Contact Data:</strong> Email address, telephone number, and billing address.</li>
                                            <li><strong>Account Data:</strong> Username, password, and profile preferences.</li>
                                        </ul>
                                    </div>
                                    <div className="bg-neutral-100 dark:bg-neutral-900/50 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700">
                                        <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3 flex items-center gap-2">
                                            <CreditCard className="text-primary w-6 h-6" />
                                            Transaction Information
                                        </h3>
                                        <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-300 ml-1">
                                            <li><strong>Payment Details:</strong> Encrypted credit/debit card information (processed securely).</li>
                                            <li><strong>Travel History:</strong> Past bookings, cancellations, and loyalty program details.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <hr className="border-neutral-200 dark:border-neutral-700" />

                            {/* How We Use */}
                            <section id="how-we-use" className="scroll-mt-28">
                                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">How We Use Your Data</h2>
                                <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-7">
                                    We use the collected data for various purposes to provide and improve our Service to you:
                                </p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <FileText className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-neutral-900 dark:text-white mb-1">Service Provision</h4>
                                            <p className="text-sm text-neutral-600 dark:text-neutral-400">To facilitate bookings with airlines, hotels, and car rental agencies.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <Bell className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-neutral-900 dark:text-white mb-1">Communication</h4>
                                            <p className="text-sm text-neutral-600 dark:text-neutral-400">To send booking confirmations, flight updates, and itinerary changes.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <Shield className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-neutral-900 dark:text-white mb-1">Fraud Prevention</h4>
                                            <p className="text-sm text-neutral-600 dark:text-neutral-400">To detect and prevent fraudulent transactions and unauthorized access.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <BarChart3 className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-neutral-900 dark:text-white mb-1">Improvement</h4>
                                            <p className="text-sm text-neutral-600 dark:text-neutral-400">To analyze usage patterns and improve our website functionality.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <hr className="border-neutral-200 dark:border-neutral-700" />

                            {/* Data Sharing */}
                            <section id="data-sharing" className="scroll-mt-28">
                                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Data Sharing & Third Parties</h2>
                                <p className="text-neutral-600 dark:text-neutral-300 mb-4 leading-7">
                                    To fulfill your travel arrangements, we must share specific personal data with third-party service providers. We only share information necessary for the performance of the service.
                                </p>
                                <div className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700">
                                    <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-700">
                                        <thead className="bg-neutral-50 dark:bg-neutral-900">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-neutral-500 uppercase tracking-wider">Recipient</th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-neutral-500 uppercase tracking-wider">Purpose</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white dark:bg-neutral-800 divide-y divide-neutral-200 dark:divide-neutral-700">
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900 dark:text-white">Airlines & Hotels</td>
                                                <td className="px-6 py-4 text-sm text-neutral-600 dark:text-neutral-300">Ticket issuance and room reservation.</td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900 dark:text-white">Payment Processors</td>
                                                <td className="px-6 py-4 text-sm text-neutral-600 dark:text-neutral-300">Secure transaction handling.</td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900 dark:text-white">Legal Authorities</td>
                                                <td className="px-6 py-4 text-sm text-neutral-600 dark:text-neutral-300">Compliance with local laws and regulations.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            <hr className="border-neutral-200 dark:border-neutral-700" />

                            {/* Cookies */}
                            <section id="cookies" className="scroll-mt-28">
                                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Cookies & Tracking</h2>
                                <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-7">
                                    We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.
                                </p>
                                <div className="space-y-4">
                                    {/* Essential Cookies */}
                                    <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 hover:border-primary/50 transition-colors cursor-pointer group">
                                        <div className="flex justify-between items-center mb-2">
                                            <h4 className="font-bold text-neutral-900 dark:text-white group-hover:text-primary transition-colors">Essential Cookies</h4>
                                            <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">Required</span>
                                        </div>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400">Necessary for the website to function properly. Cannot be disabled.</p>
                                    </div>
                                    {/* Analytics Cookies */}
                                    <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 hover:border-primary/50 transition-colors cursor-pointer group">
                                        <div className="flex justify-between items-center mb-2">
                                            <h4 className="font-bold text-neutral-900 dark:text-white group-hover:text-primary transition-colors">Analytics Cookies</h4>
                                            <span className="px-2 py-1 text-xs font-semibold bg-neutral-100 text-neutral-600 rounded-full">Optional</span>
                                        </div>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400">Help us understand how visitors interact with the website.</p>
                                    </div>
                                    {/* Marketing Cookies */}
                                    <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 hover:border-primary/50 transition-colors cursor-pointer group">
                                        <div className="flex justify-between items-center mb-2">
                                            <h4 className="font-bold text-neutral-900 dark:text-white group-hover:text-primary transition-colors">Marketing Cookies</h4>
                                            <span className="px-2 py-1 text-xs font-semibold bg-neutral-100 text-neutral-600 rounded-full">Optional</span>
                                        </div>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400">Used to provide you with relevant advertisements.</p>
                                    </div>
                                </div>
                            </section>

                            <hr className="border-neutral-200 dark:border-neutral-700" />

                            {/* User Rights */}
                            <section id="your-rights" className="scroll-mt-28">
                                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Your Rights</h2>
                                <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-7">
                                    Depending on your location (e.g., GDPR in Europe, CCPA in California), you may have the following rights regarding your personal data:
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="bg-primary/5 p-4 rounded-lg">
                                        <h4 className="font-bold text-neutral-900 dark:text-white mb-2">Right to Access</h4>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400">Request copies of your personal data.</p>
                                    </div>
                                    <div className="bg-primary/5 p-4 rounded-lg">
                                        <h4 className="font-bold text-neutral-900 dark:text-white mb-2">Right to Rectification</h4>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400">Request correction of inaccurate information.</p>
                                    </div>
                                    <div className="bg-primary/5 p-4 rounded-lg">
                                        <h4 className="font-bold text-neutral-900 dark:text-white mb-2">Right to Deletion</h4>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400">Request erasure of your personal data.</p>
                                    </div>
                                    <div className="bg-primary/5 p-4 rounded-lg">
                                        <h4 className="font-bold text-neutral-900 dark:text-white mb-2">Right to Restrict</h4>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400">Request restriction of processing your data.</p>
                                    </div>
                                </div>
                            </section>

                            <hr className="border-neutral-200 dark:border-neutral-700" />

                            {/* Contact Section */}
                            <section id="contact" className="scroll-mt-28">
                                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Contact Us</h2>
                                <p className="text-neutral-600 dark:text-neutral-300 mb-8 leading-7">
                                    If you have any questions about this Privacy Policy, please contact our Data Protection Officer:
                                </p>
                                <div className="bg-neutral-900 rounded-xl p-8 text-white relative overflow-hidden">
                                    {/* Abstract pattern for Contact bg */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
                                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400 rounded-full blur-[60px] opacity-10 pointer-events-none"></div>
                                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                                        <div className="space-y-6">
                                            <div className="flex items-start gap-4">
                                                <div className="p-3 bg-white/10 rounded-lg">
                                                    <Mail className="text-primary-300 w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h5 className="text-sm font-medium text-neutral-400 mb-1">Email Us</h5>
                                                    <a href="mailto:privacy@toursandtravels.com" className="text-lg font-bold hover:text-primary transition-colors">privacy@toursandtravels.com</a>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <div className="p-3 bg-white/10 rounded-lg">
                                                    <MapPin className="text-primary-300 w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h5 className="text-sm font-medium text-neutral-400 mb-1">Mailing Address</h5>
                                                    <p className="text-lg font-bold leading-snug">
                                                        Tours and Travels HQ<br />
                                                        123 Innovation Drive, Suite 400<br />
                                                        San Francisco, CA 94103
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:w-px md:h-32 bg-white/10 hidden md:block"></div>
                                        <div className="flex-shrink-0">
                                            <button className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2">
                                                <Lock className="w-5 h-5" />
                                                Download Policy PDF
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
