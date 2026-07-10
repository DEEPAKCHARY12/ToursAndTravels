export default function AboutHero() {
    return (
        <div className="relative py-20 bg-slate-900 text-white overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2021"
                    alt="Travel background"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                    Our Journey
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10">
                    From a humble backpacker's blog to a global travel companion.
                </p>

                <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-left">
                    <h2 className="text-2xl font-bold mb-4 text-primary-300">Our Story</h2>
                    <div className="space-y-4 text-slate-300 leading-relaxed">
                        <p>
                            Tours and Travels began in 2010 when two friends, Sarah and Mike, got lost in the winding streets of Kyoto. That happy accident led them to a hidden tea house that wasn't in any guidebook. They realized that the best travel experiences often lie off the beaten path.
                        </p>
                        <p>
                            What started as a shared blog to document their discoveries quickly grew into a community of like-minded explorers. We wanted to build a platform that didn't just book tickets, but curated experiences.
                        </p>
                        <p>
                            Today, Tours and Travels connects millions of travelers with authentic adventures, local guides, and unforgettable stays. We believe that travel is the best way to understand the world and ourselves.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
