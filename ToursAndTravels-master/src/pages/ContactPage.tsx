import ContactForm from '../components/features/contact/ContactForm';
import ContactInfo from '../components/features/contact/ContactInfo';
import OfficeLocations from '../components/features/contact/OfficeLocations';

export default function ContactPage() {
    return (
        <div className="bg-slate-50 dark:bg-background-dark min-h-screen">
            {/* Header Section */}
            <section className="bg-primary text-white py-16 px-4 text-center">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                    We'd love to hear from you. Please send us a message or contact us via our support channels.
                </p>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
                    {/* Left Column: Contact Info */}
                    <ContactInfo />

                    {/* Right Column: Contact Form */}
                    <ContactForm />
                </div>

                {/* Office Locations */}
                <div className="border-t border-slate-200 dark:border-slate-800 pt-16">
                    <OfficeLocations />
                </div>
            </div>
        </div>
    );
}
