import { Phone, Mail, Clock, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function ContactInfo() {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Get in Touch</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                    Have questions about your next trip? Our team of travel experts is here to assist you 24/7. Reach out to us via phone, email, or visit one of our offices.
                </p>

                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                            <Phone className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white">Phone</h4>
                            <p className="text-slate-600 dark:text-slate-300 mt-1">1234567890</p>
                            <p className="text-sm text-slate-500 mt-1">Mon-Fri from 8am to 6pm</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white">Email</h4>
                            <p className="text-slate-600 dark:text-slate-300 mt-1">abcd@gmail.com</p>
                            <p className="text-sm text-slate-500 mt-1">Online support 24/7</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                            <Clock className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white">Working Hours</h4>
                            <p className="text-slate-600 dark:text-slate-300 mt-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                            <p className="text-slate-600 dark:text-slate-300">Saturday: 10:00 AM - 4:00 PM</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white">Main Office</h4>
                            <p className="text-slate-600 dark:text-slate-300 mt-1">123 Travel Street, Adventure City, AC 56789</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-4">Follow Us</h4>
                <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-colors">
                        <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-colors">
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-colors">
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </div>
    );
}
