
import { useState, useEffect } from 'react';
import { Timer, Tag, ArrowRight, Copy, Check } from 'lucide-react';

export default function SpecialOffers() {
    const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, minutes: 35, seconds: 12 });
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                let { days, hours, minutes, seconds } = prev;
                if (seconds > 0) seconds--;
                else {
                    seconds = 59;
                    if (minutes > 0) minutes--;
                    else {
                        minutes = 59;
                        if (hours > 0) hours--;
                        else {
                            hours = 23;
                            if (days > 0) days--;
                        }
                    }
                }
                return { days, hours, minutes, seconds };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText("SUMMER25");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9452UZsnvbW-sJxYti-g214ENkjTV5xPYHSiOECvVe0vSm8t2YXH-IkDL9MS6gP0TrUKdVlO7haiY4h3V-WNIzNOdpK-gBNMi1WrJUC_zZu3sGhBS5HQwWu1X8PaePer6VqehimC5osH2BfsbSd_erLyJ8VdyHRVNutilEIdtnqAvXcclKhaxW9RSEze7nqMzYvrz5efedjsJUsi5sgo2ULZCCZF4QxKXaMZqkPYH5A6LudKnCpc2Bp4cHNRWidzJVLAiA-S8DA"
                        alt="Special Offer Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 mix-blend-multiply"></div>
                </div>

                <div className="relative z-10 flex flex-col md:flex-row items-center p-8 md:p-16 gap-10">
                    {/* Content */}
                    <div className="flex-1 text-white text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-semibold mb-6">
                            <Tag className="w-4 h-4" /> Limited Time Offer
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                            Save 25% on all <br /> Summer Packages
                        </h2>
                        <p className="text-lg text-white/90 mb-8 max-w-lg">
                            Book your dream vacation now and get exclusive discounts. Offer valid for a limited time only!
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <button className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-slate-50 transition-colors shadow-lg flex items-center">
                                Book Now <ArrowRight className="w-5 h-5 ml-2" />
                            </button>

                            {/* Promo Code */}
                            <div className="flex items-center bg-white/10 backdrop-blur-md rounded-xl p-1 border border-white/20">
                                <span className="px-4 font-mono font-bold text-lg tracking-wider">SUMMER25</span>
                                <button
                                    onClick={handleCopy}
                                    className="p-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                                    title="Copy Code"
                                >
                                    {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Timer */}
                    <div className="w-full md:w-auto">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8">
                            <div className="flex items-center justify-center gap-2 text-white mb-6">
                                <Timer className="w-5 h-5" />
                                <span className="font-semibold uppercase tracking-wider text-sm">Offer Ends In</span>
                            </div>

                            <div className="flex gap-4 text-center">
                                <div className="flex flex-col p-3 bg-white/10 rounded-lg min-w-[70px]">
                                    <span className="text-3xl font-bold text-white">{timeLeft.days}</span>
                                    <span className="text-xs text-white/70 uppercase">Days</span>
                                </div>
                                <div className="text-2xl font-bold text-white/50 pt-2">:</div>
                                <div className="flex flex-col p-3 bg-white/10 rounded-lg min-w-[70px]">
                                    <span className="text-3xl font-bold text-white">{timeLeft.hours}</span>
                                    <span className="text-xs text-white/70 uppercase">Hours</span>
                                </div>
                                <div className="text-2xl font-bold text-white/50 pt-2">:</div>
                                <div className="flex flex-col p-3 bg-white/10 rounded-lg min-w-[70px]">
                                    <span className="text-3xl font-bold text-white">{timeLeft.minutes}</span>
                                    <span className="text-xs text-white/70 uppercase">Mins</span>
                                </div>
                                <div className="text-2xl font-bold text-white/50 pt-2">:</div>
                                <div className="flex flex-col p-3 bg-white/10 rounded-lg min-w-[70px]">
                                    <span className="text-3xl font-bold text-white">{timeLeft.seconds}</span>
                                    <span className="text-xs text-white/70 uppercase">Secs</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
