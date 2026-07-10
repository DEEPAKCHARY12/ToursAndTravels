import { Clock, AlertCircle, Info, CreditCard, FileText } from 'lucide-react';
import type { HotelPolicyProps } from '../../../types';

interface HotelPoliciesProps {
    policies: HotelPolicyProps;
}

export default function HotelPolicies({ policies }: HotelPoliciesProps) {
    if (!policies) return null;

    return (
        <section id="policies" className="pt-8 border-t border-slate-200 dark:border-slate-800 scroll-mt-28">
            <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Hotel Policies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Check-in/out */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-primary/50 transition-colors">
                    <div className="flex items-center gap-3 mb-4 text-primary">
                        <Clock className="w-5 h-5" />
                        <h3 className="font-bold">Check-in/out Times</h3>
                    </div>
                    <div className="space-y-4 text-sm">
                        <div className="flex justify-between pb-3 border-b border-slate-50 dark:border-slate-800">
                            <span className="text-slate-500">Check-in</span>
                            <span className="font-bold text-slate-900 dark:text-white">From {policies.checkIn}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-slate-500">Check-out</span>
                            <span className="font-bold text-slate-900 dark:text-white">Until {policies.checkOut}</span>
                        </div>
                    </div>
                </div>

                {/* Cancellation */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-primary/50 transition-colors">
                    <div className="flex items-center gap-3 mb-4 text-primary">
                        <AlertCircle className="w-5 h-5" />
                        <h3 className="font-bold">Cancellation Policy</h3>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {policies.cancellation}
                    </p>
                </div>

                {/* House Rules */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-primary/50 transition-colors">
                    <div className="flex items-center gap-3 mb-4 text-primary">
                        <FileText className="w-5 h-5" />
                        <h3 className="font-bold">House Rules</h3>
                    </div>
                    <ul className="space-y-3 text-sm">
                        {policies.rules.map((rule, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined text-[18px] text-slate-400">
                                    {/* Map icon names if needed, or use a generic icon */}
                                    <Info className="w-4 h-4" />
                                </span>
                                <span>{rule.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Payment Methods */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-primary/50 transition-colors">
                    <div className="flex items-center gap-3 mb-4 text-primary">
                        <CreditCard className="w-5 h-5" />
                        <h3 className="font-bold">Payment Methods</h3>
                    </div>
                    <p className="text-sm text-slate-500 mb-4">The hotel accepts the following cards:</p>
                    <div className="flex gap-3 flex-wrap">
                        {policies.paymentMethods.map((method) => (
                            <div key={method} className="h-8 px-3 bg-slate-100 dark:bg-slate-800 rounded flex items-center justify-center font-bold text-[10px] text-slate-500 border border-slate-200 dark:border-slate-700">
                                {method}
                            </div>
                        ))}
                    </div>
                    <p className="mt-4 text-[11px] text-slate-400 italic">Cash is also accepted on-site.</p>
                </div>
            </div>
        </section>
    );
}
