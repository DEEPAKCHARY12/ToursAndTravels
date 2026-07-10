

export default function Hero() {
    return (
        <section className="relative">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuALlGOqhP34nNPGPl3EdZWe1Lz7RguGo6TPtBk0U5NX8mFI3MCEVDShYXOe2tHFqfeI0MbCw_3sOY5DA8wrEZuUZTyq3p9BKHsccF-dyZ771Zl4vxdGPZ6PQBN9IgWUl0zQfdHJdQTTAbYq03BYT4XMUEYYPPFon9XyFWADX1vpc2Npl8HZiaFl46lDDuqikxEYP81ZhgGD2L4xzYtNJcXS0Uf8VInxcmJYnfru9-jly1IgGwEeKxXOLtfA-QPXzqA51jgHaHx0Xw"
                    alt="Scenic road trip landscape"
                    className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent h-[600px]"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-48 text-center sm:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6 drop-shadow-sm max-w-3xl">
                    Explore the world <br /> with <span className="text-blue-200">confidence.</span>
                </h1>
                <p className="text-lg sm:text-xl text-blue-50 mb-10 max-w-2xl font-medium drop-shadow-sm">
                    Discover the best prices on flights, hotels, and holiday packages curated just for you.
                </p>
            </div>
        </section>
    );
}
