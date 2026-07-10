import React, { useState } from 'react';
import { useLocation, Navigate, useNavigate } from 'react-router-dom';
import { ShieldCheck, Lock, CreditCard, User, Mail, ChevronRight, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

const CheckoutPage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const state = location.state as {
        pkgTitle: string;
        date: string;
        travelers: number;
        total: number;
        basePrice: number;
        roomType: string;
        addOns: string[];
    };

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        travelers: Array.from({ length: state?.travelers || 1 }, () => ({ firstName: '', lastName: '' })),
        cardNumber: '',
        expiry: '',
        cvv: ''
    });

    if (!state) {
        return <Navigate to="/packages" replace />;
    }

    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            navigate('/confirmation', { state });
        }, 1500);
    };

    return (
        <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-primary transition-colors mb-4"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to details
                    </button>
                    <h1 className="text-4xl font-black text-slate-900 dark:text-white">Secure Booking</h1>
                    <div className="flex items-center gap-4 mt-4">
                        <div className={cn("flex items-center gap-2 text-xs font-bold uppercase tracking-widest", step >= 1 ? "text-primary" : "text-slate-400")}>
                            <span className="w-6 h-6 rounded-full bg-current text-white flex items-center justify-center">1</span>
                            Details
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-300" />
                        <div className={cn("flex items-center gap-2 text-xs font-bold uppercase tracking-widest", step >= 2 ? "text-primary" : "text-slate-400")}>
                            <span className="w-6 h-6 rounded-full bg-current text-white flex items-center justify-center">2</span>
                            Payment
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column - Forms */}
                    <div className="lg:col-span-2 space-y-8">
                        {step === 1 ? (
                            <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-500">
                                {/* Contact Info */}
                                <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                        <Mail className="w-5 h-5 text-primary" /> Contact Information
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-black text-slate-500 uppercase tracking-wider">Email Address</label>
                                            <input
                                                type="email"
                                                placeholder="traveler@example.com"
                                                className="w-full p-4 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black text-slate-500 uppercase tracking-wider">Phone Number</label>
                                            <input
                                                type="tel"
                                                placeholder="+1 (555) 000-0000"
                                                className="w-full p-4 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Traveler Details */}
                                <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                        <User className="w-5 h-5 text-primary" /> Traveler Details
                                    </h3>
                                    <div className="space-y-8">
                                        {formData.travelers.map((t, i) => (
                                            <div key={i} className="pt-6 first:pt-0 border-t first:border-0 border-slate-100 dark:border-slate-700">
                                                <h4 className="text-sm font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tighter">Traveler {i + 1}</h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div className="space-y-2">
                                                        <label className="text-xs font-black text-slate-500 uppercase tracking-wider">First Name</label>
                                                        <input
                                                            type="text"
                                                            className="w-full p-4 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20"
                                                            value={t.firstName}
                                                            onChange={(e) => {
                                                                const newT = [...formData.travelers];
                                                                newT[i].firstName = e.target.value;
                                                                setFormData({ ...formData, travelers: newT });
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-xs font-black text-slate-500 uppercase tracking-wider">Last Name</label>
                                                        <input
                                                            type="text"
                                                            className="w-full p-4 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20"
                                                            value={t.lastName}
                                                            onChange={(e) => {
                                                                const newT = [...formData.travelers];
                                                                newT[i].lastName = e.target.value;
                                                                setFormData({ ...formData, travelers: newT });
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    onClick={() => setStep(2)}
                                    className="w-full py-5 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/30 text-lg uppercase tracking-tight hover:scale-[1.01] transition-transform"
                                >
                                    Continue to Payment
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                                {/* Payment Method */}
                                <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                        <CreditCard className="w-5 h-5 text-primary" /> Payment Method
                                    </h3>
                                    <form onSubmit={handlePayment} className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-black text-slate-500 uppercase tracking-wider">Card Number</label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    placeholder="0000 0000 0000 0000"
                                                    className="w-full p-4 pl-12 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20"
                                                    value={formData.cardNumber}
                                                    onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                                                />
                                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-black text-slate-500 uppercase tracking-wider">Expiry Date</label>
                                                <input
                                                    type="text"
                                                    placeholder="MM / YY"
                                                    className="w-full p-4 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20"
                                                    value={formData.expiry}
                                                    onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-black text-slate-500 uppercase tracking-wider">CVV</label>
                                                <input
                                                    type="password"
                                                    placeholder="***"
                                                    className="w-full p-4 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20"
                                                    value={formData.cvv}
                                                    onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl text-[10px] font-bold text-slate-500 uppercase">
                                            <ShieldCheck className="w-4 h-4 text-emerald-500" />
                                            Your payment is secured with 256-bit SSL encryption
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full py-5 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/30 text-lg uppercase tracking-tight hover:scale-[1.01] transition-transform"
                                        >
                                            Complete Booking (${state.total})
                                        </button>
                                    </form>
                                </div>
                                <button
                                    onClick={() => setStep(1)}
                                    className="text-sm font-bold text-slate-500 hover:text-primary transition-colors"
                                >
                                    Modify traveler details
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Right Column - Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-2xl space-y-6 sticky top-24">
                            <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">Trip Summary</h3>

                            <div className="space-y-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500 font-bold">Package</span>
                                    <span className="text-slate-900 dark:text-white font-black text-right max-w-[150px]">{state.pkgTitle}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500 font-bold">Departure</span>
                                    <span className="text-slate-900 dark:text-white font-black">{state.date}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500 font-bold">Travelers</span>
                                    <span className="text-slate-900 dark:text-white font-black">{state.travelers} Persons</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500 font-bold">Stay</span>
                                    <span className="text-slate-900 dark:text-white font-black uppercase text-xs">{state.roomType}</span>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-dashed border-slate-200 dark:border-slate-700 space-y-3">
                                <div className="flex justify-between text-xs font-bold text-slate-500 uppercase">
                                    <span>Base x {state.travelers}</span>
                                    <span>${state.basePrice * state.travelers}</span>
                                </div>
                                {state.addOns.length > 0 && (
                                    <div className="flex justify-between text-xs font-bold text-emerald-600 uppercase">
                                        <span>Add-ons ({state.addOns.length})</span>
                                        <span>Included</span>
                                    </div>
                                )}
                                <div className="flex justify-between pt-4">
                                    <span className="text-lg font-black text-slate-900 dark:text-white font-black">Total</span>
                                    <span className="text-2xl font-black text-primary">${state.total}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
