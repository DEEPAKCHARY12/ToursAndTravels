
import { Link } from 'react-router-dom';
import { Plane, Globe } from 'lucide-react';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                            <Plane className="w-6 h-6" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Tours and Travels</span>
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link to="/flights" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary font-medium transition-colors">Flights</Link>
                        <Link to="/hotels" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary font-medium transition-colors">Hotels</Link>
                        <Link to="/packages" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary font-medium transition-colors">Packages</Link>
                        <Link to="/trip-builder" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary font-medium transition-colors">Trip Builder</Link>
                        <a href="#" onClick={(e) => e.preventDefault()} className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary font-medium transition-colors">Offers</a>
                    </nav>

                    {/* User Actions */}
                    <div className="flex items-center space-x-4">
                        <button className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white p-1">
                            <Globe className="w-5 h-5" />
                        </button>
                        <div className="h-6 w-px bg-slate-200 dark:bg-slate-700"></div>
                        <Link to="/login" className="hidden sm:block text-slate-900 dark:text-white font-medium hover:text-primary transition-colors">Log In</Link>
                        <Link to="/register" className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-primary/25">Sign Up</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
