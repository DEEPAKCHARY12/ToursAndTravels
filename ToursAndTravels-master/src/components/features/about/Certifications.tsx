import { CERTIFICATIONS } from '../../../data/certifications';

export default function Certifications() {
    return (
        <div className="py-16 bg-white dark:bg-background-dark border-t border-slate-100 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-12">Our Certifications & Awards</h2>

                <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                    {CERTIFICATIONS.map((cert, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 ${cert.color}`}>
                                <cert.icon className="w-10 h-10" />
                            </div>
                            <p className="font-bold text-slate-800 dark:text-slate-200">{cert.title}</p>
                            <p className="text-xs text-slate-500 uppercase tracking-wide">{cert.issuer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
