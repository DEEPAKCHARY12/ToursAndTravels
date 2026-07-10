import { Mail } from 'lucide-react';

export default function Newsletter() {
    return (
        <section className="bg-primary rounded-2xl p-8 lg:p-16 relative overflow-hidden my-20">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-10 -mb-10 blur-2xl"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto space-y-6">
                <Mail className="text-white w-12 h-12 mb-2" />
                <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                    Get travel inspiration delivered to your inbox
                </h2>
                <p className="text-white/80 text-lg">
                    Join 50,000+ travelers and receive our weekly guide to the world's most beautiful destinations and hidden gems.
                </p>
                
                <div className="w-full flex flex-col sm:flex-row gap-3 pt-4">
                    <input 
                        className="flex-1 px-6 py-4 rounded-xl border-none focus:ring-4 focus:ring-white/20 text-slate-900 placeholder:text-slate-400 font-medium" 
                        placeholder="Enter your email address" 
                        type="email"
                    />
                    <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-xl active:scale-95 transform">
                        Subscribe Now
                    </button>
                </div>
                
                <p className="text-white/60 text-xs italic">We respect your privacy. Unsubscribe at any time.</p>
            </div>
        </section>
    );
}
