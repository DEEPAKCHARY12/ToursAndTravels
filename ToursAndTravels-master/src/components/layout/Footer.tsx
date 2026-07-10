
import { Link } from 'react-router-dom';
import { Plane, Facebook, Camera, AtSign } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
                    <div className="col-span-2 lg:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                                <Plane className="w-4 h-4" />
                            </div>
                            <span className="text-xl font-bold text-slate-900 dark:text-white">Tours and Travels</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs mb-6">
                            Your trusted companion for exploring the world. Making travel accessible, affordable, and unforgettable.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" onClick={(e) => e.preventDefault()} className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" onClick={(e) => e.preventDefault()} className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-colors">
                                <Camera className="w-5 h-5" />
                            </a>
                            <a href="#" onClick={(e) => e.preventDefault()} className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-colors">
                                <AtSign className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Company</h4>
                        <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-primary transition-colors">Careers</a></li>
                            <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-primary transition-colors">Blog</a></li>
                            <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-primary transition-colors">Press</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Support</h4>
                        <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                            <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                            <li><Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Services</h4>
                        <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                            <li><Link to="/flights" className="hover:text-primary transition-colors">Flight Booking</Link></li>
                            <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-primary transition-colors">Hotel Reservation</a></li>
                            <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-primary transition-colors">Holiday Packages</a></li>
                            <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-primary transition-colors">Corporate Travel</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-400 text-center sm:text-left">© 2023 Tours and Travels Inc. All rights reserved.</p>
                    <div className="flex gap-6 text-sm text-slate-400">
                        <Link to="/privacy-policy" className="hover:text-primary">Privacy</Link>
                        <Link to="/terms-of-service" className="hover:text-primary">Terms</Link>
                        <Link to="/dashboard/settings" className="hover:text-primary">Settings</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
