

import { STATS } from '../../../data/stats';

export default function StatsSection() {
    return (
        <div className="bg-primary py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {STATS.map((stat) => (
                        <div key={stat.id} className="text-center">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white mb-4">
                                <stat.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-sm font-medium text-blue-100">{stat.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
