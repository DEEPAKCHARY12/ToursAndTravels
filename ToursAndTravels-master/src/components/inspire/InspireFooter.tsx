import { Globe, Twitter, Instagram } from 'lucide-react';

export default function InspireFooter() {
    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-primary/10 py-12 px-6 lg:px-20 mt-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="space-y-4">
                    <div className="flex items-center gap-3 text-primary">
                        <Globe className="w-6 h-6" />
                        <span className="text-lg font-bold text-slate-900 dark:text-white">TravelInspire</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                        Your premier destination for travel stories, professional hotel guides, and practical tips for the modern wanderer.
                    </p>
                </div>
                
                <div>
                    <h4 className="font-bold mb-6 text-slate-900 dark:text-white">Company</h4>
                    <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
                        <li><a className="hover:text-primary transition-colors" href="#">About Us</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Press</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="font-bold mb-6 text-slate-900 dark:text-white">Destinations</h4>
                    <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
                        <li><a className="hover:text-primary transition-colors" href="#">Europe</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Asia</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Americas</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Africa</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="font-bold mb-6 text-slate-900 dark:text-white">Follow Us</h4>
                    <div className="flex items-center gap-4">
                        <a className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1" href="#">
                            <Globe className="w-5 h-5" />
                        </a>
                        <a className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1" href="#">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1" href="#">
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-primary/5 text-center text-slate-400 text-xs">
                © 2024 TravelInspire Blog. All rights reserved. Designed for explorers.
            </div>
        </footer>
    );
}
