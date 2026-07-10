import { Target, Compass } from 'lucide-react';

export default function MissionVision() {
    return (
        <div className="py-20 bg-white dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Mission */}
                    <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow">
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                            <Target className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our Mission</h3>
                        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                            To democratize travel by making authentic, high-quality experiences accessible to everyone. We strive to remove the barriers of cost and complexity, allowing you to focus on the joy of discovery.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow">
                        <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 mb-6">
                            <Compass className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our Vision</h3>
                        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                            A world where borders are bridged by understanding and every journey leaves a positive impact on local communities and the environment. We envision travel as a force for global good.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
