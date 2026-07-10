import { TEAM } from '../../../data/team';

export default function TeamSection() {

    return (
        <div className="py-20 bg-slate-50 dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Meet the Team</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        The passionate travelers and experts behind your unforgettable journeys.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {TEAM.map((member, index) => (
                        <div key={index} className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700 group">
                            <div className="aspect-square overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{member.name}</h3>
                                <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
