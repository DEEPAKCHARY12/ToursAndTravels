import { Search, Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function InspireHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10 px-6 lg:px-20 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-10">
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="text-primary transition-transform group-hover:rotate-12">
                            <Globe className="w-8 h-8" />
                        </div>
                        <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">TravelInspire</h1>
                    </Link>
                    
                    <nav className="hidden md:flex items-center gap-8">
                        <Link to="/" className="text-sm font-semibold text-primary">Home</Link>
                        <a href="#" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Destinations</a>
                        <a href="#" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Bookings</a>
                        <a href="#" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Guides</a>
                    </nav>
                </div>

                <div className="flex items-center gap-6">
                    <div className="hidden lg:flex items-center bg-primary/5 dark:bg-primary/10 rounded-lg px-3 py-2 border border-primary/10 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                        <Search className="w-5 h-5 text-slate-500 mr-2" />
                        <input 
                            className="bg-transparent border-none focus:ring-0 text-sm w-48 placeholder:text-slate-400 text-slate-900 dark:text-white" 
                            placeholder="Search stories..." 
                            type="text"
                        />
                    </div>
                    
                    <button className="hidden sm:block bg-primary text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-95">
                        Sign Up
                    </button>
                    
                    <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/20 flex items-center justify-center overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary/50 transition-all">
                        <img 
                            className="w-full h-full object-cover" 
                            alt="User avatar" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMQ6Ag8uIk1QXOiB-3Dr2uK81Tw5k1C-4V2oiez1Yw3HBKMK5AqofAeRRzKhUeRL0mRWCAk-mtI6HSz3o9LvO5z2JnkjUzinhU3yef-aJm27vSeHOFgu8-bMD1M9Ux355kL8yHB22cKCrpEzH1dnrosDkfY50-8FncNeld-2vvnus1RDTuZn2JGCAwgxCjoeaDrl7MZqfxTtaA1_Qt97i60J4Eb5J1UsZ1vBBLa0VuquLIEnkg73UXgcQZT3LPVEX8c7CIdvfDLaY"
                        />
                    </div>

                    <button 
                        className="md:hidden text-slate-600 dark:text-slate-300"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-4 shadow-lg animate-in slide-in-from-top-2">
                    <nav className="flex flex-col gap-4">
                        <Link to="/" className="text-sm font-semibold text-primary">Home</Link>
                        <a href="#" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary">Destinations</a>
                        <a href="#" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary">Bookings</a>
                        <a href="#" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary">Guides</a>
                        <button className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-bold w-full">Sign Up</button>
                    </nav>
                </div>
            )}
        </header>
    );
}
