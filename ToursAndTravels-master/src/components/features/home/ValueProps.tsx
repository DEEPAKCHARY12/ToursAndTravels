
import { ShieldCheck, Headset, BadgeCheck, Trophy, Globe, HeartHandshake } from 'lucide-react';

const FEATURES = [
    {
        icon: ShieldCheck,
        title: "Best Price Guarantee",
        description: "Find a lower price? We'll match it. Travel with confidence."
    },
    {
        icon: Headset,
        title: "24/7 Support",
        description: "Our dedicated team is here for you around the clock."
    },
    {
        icon: BadgeCheck,
        title: "Handpicked Packages",
        description: "Personally vetted by our travel experts for quality."
    },
    {
        icon: Trophy,
        title: "Award Winning",
        description: "Recognized as the best travel agency in 2024."
    },
    {
        icon: Globe,
        title: "World Class Service",
        description: "Experience the best service in the industry."
    },
    {
        icon: HeartHandshake,
        title: "Trusted by Thousands",
        description: "Join our community of happy travelers."
    }
];

export default function ValueProps() {
    return (
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Why Choose Us</h2>
                <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                    We are committed to providing you with the best travel experience possible. Here is why you should book with us.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {FEATURES.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <div key={index} className="flex flex-col items-center text-center p-8 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                                <Icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400">{feature.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
