
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link } from 'react-router-dom';

const forgotPasswordSchema = z.object({
    email: z.string().email('Please enter a valid email address'),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

const ForgotPasswordPage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ForgotPasswordFormValues>({
        resolver: zodResolver(forgotPasswordSchema),
    });

    const onSubmit = async (data: ForgotPasswordFormValues) => {
        setIsLoading(true);
        setError(null);
        try {
            console.log('Requesting password reset for:', data.email);
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setIsSubmitted(true);
        } catch (err) {
            setError('Something went wrong. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display selection:bg-primary/30">
            {/* Background Image */}
            <div className="fixed inset-0 z-0">
                <img
                    alt="Peaceful sunset over a calm lake"
                    className="w-full h-full object-cover brightness-50 dark:brightness-[0.4]"
                    src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=2070"
                />
            </div>

            <header className="absolute top-0 w-full z-20 p-6 flex justify-between items-center bg-transparent">
                <Link to="/" className="flex items-center gap-2">
                    <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-xl">flight_takeoff</span>
                    </div>
                    <span className="text-white font-bold text-xl tracking-tight">Travelly</span>
                </Link>
            </header>

            <main className="relative z-10 flex-grow flex items-center justify-center p-6">
                <div className="bg-[rgba(15,23,42,0.7)] backdrop-blur-md border border-white/10 w-full max-w-md p-8 md:p-10 rounded-3xl shadow-2xl text-center">
                    {!isSubmitted ? (
                        <>
                            <div className="mb-8">
                                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-primary/30">
                                    <span className="material-symbols-outlined text-primary text-3xl">lock_reset</span>
                                </div>
                                <h1 className="text-2xl font-bold text-white mb-2">Forgot Password?</h1>
                                <p className="text-slate-300 text-sm">
                                    No worries! Enter your email and we'll send you a link to reset your password.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                {error && (
                                    <div className="bg-red-500/20 border border-red-500/50 text-red-100 p-3 rounded-lg text-sm">
                                        {error}
                                    </div>
                                )}
                                <div className="text-left">
                                    <label className="block text-sm font-medium text-slate-200 mb-2" htmlFor="email">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                                            mail
                                        </span>
                                        <input
                                            {...register('email')}
                                            className={`w-full bg-white/10 dark:bg-black/20 border ${errors.email ? 'border-red-500' : 'border-white/20'
                                                } text-white placeholder-slate-400 rounded-xl py-3.5 pl-12 pr-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none`}
                                            placeholder="Enter your email"
                                            type="email"
                                        />
                                    </div>
                                    {errors.email && (
                                        <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>
                                    )}
                                </div>

                                <button
                                    disabled={isLoading}
                                    className="w-full bg-primary hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                                    type="submit"
                                >
                                    {isLoading ? (
                                        <>
                                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                            Sending Reset Link...
                                        </>
                                    ) : (
                                        'Send Reset Link'
                                    )}
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="py-4">
                            <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-green-500/30">
                                <span className="material-symbols-outlined text-green-400 text-3xl">mark_email_read</span>
                            </div>
                            <h1 className="text-2xl font-bold text-white mb-2">Check Your Email</h1>
                            <p className="text-slate-300 text-sm mb-8">
                                We've sent a password reset link to your email address. Please follow the instructions to reset your password.
                            </p>
                            <Link
                                to="/login"
                                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                            >
                                <span className="material-symbols-outlined text-sm">arrow_back</span>
                                Return to Login
                            </Link>
                        </div>
                    )}

                    {!isSubmitted && (
                        <p className="mt-8 text-slate-400 text-sm">
                            Remember your password?{' '}
                            <Link to="/login" className="text-primary font-semibold hover:underline">
                                Sign In
                            </Link>
                        </p>
                    )}
                </div>
            </main>

            <footer className="relative z-10 p-6 text-center">
                <p className="text-white/60 text-xs tracking-wide">
                    © 2024 Travelly Inc. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default ForgotPasswordPage;
