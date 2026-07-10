
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link, useNavigate } from 'react-router-dom';

const registerSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().regex(/^\+?[\d\s-]{10,}$/, 'Invalid phone number format'),
    password: z.string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[A-Z]/, 'Must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Must contain at least one lowercase letter')
        .regex(/[0-9]/, 'Must contain at least one number')
        .regex(/[^A-Za-z0-0]/, 'Must contain at least one special character'),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

type RegisterFormValues = z.infer<typeof registerSchema>;

const RegisterPage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
        mode: 'onChange'
    });

    const password = watch('password', '');

    const calculatePasswordStrength = (pwd: string) => {
        let score = 0;
        if (!pwd) return 0;
        if (pwd.length >= 8) score++;
        if (/[A-Z]/.test(pwd)) score++;
        if (/[a-z]/.test(pwd)) score++;
        if (/[0-9]/.test(pwd)) score++;
        if (/[^A-Za-z0-9]/.test(pwd)) score++;
        return (score / 5) * 100;
    };

    const strength = calculatePasswordStrength(password);

    const getStrengthColor = () => {
        if (strength < 40) return 'bg-red-500';
        if (strength < 80) return 'bg-yellow-500';
        return 'bg-green-500';
    };

    const onSubmit = async (data: RegisterFormValues) => {
        setIsLoading(true);
        setError(null);
        try {
            console.log('Registering user:', data);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));
            setSuccess(true);
            setTimeout(() => navigate('/login'), 3000);
        } catch (err) {
            setError('Registration failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display selection:bg-primary/30">
            {/* Background Image */}
            <div className="fixed inset-0 z-0">
                <img
                    alt="Stunning mountain landscape at dawn"
                    className="w-full h-full object-cover brightness-50 dark:brightness-[0.4]"
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070"
                />
            </div>

            <header className="absolute top-0 w-full z-20 p-6 flex justify-between items-center bg-transparent">
                <Link to="/" className="flex items-center gap-2">
                    <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-xl">flight_takeoff</span>
                    </div>
                    <span className="text-white font-bold text-xl tracking-tight">Travelly</span>
                </Link>
                <Link
                    to="/login"
                    className="text-white hover:text-primary transition-colors font-medium"
                >
                    Sign In
                </Link>
            </header>

            <main className="relative z-10 flex-grow flex items-center justify-center p-6 mt-20 mb-10">
                <div className="bg-[rgba(15,23,42,0.7)] backdrop-blur-md border border-white/10 w-full max-w-xl p-8 md:p-10 rounded-3xl shadow-2xl">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
                        <p className="text-slate-300">Join Travelly and start your journey</p>
                    </div>

                    {success ? (
                        <div className="bg-green-500/20 border border-green-500/50 text-green-100 p-6 rounded-xl text-center">
                            <span className="material-symbols-outlined text-4xl mb-2">check_circle</span>
                            <h3 className="text-xl font-bold mb-1">Registration Successful!</h3>
                            <p>Welcome to Travelly. Redirecting to login...</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            {error && (
                                <div className="bg-red-500/20 border border-red-500/50 text-red-100 p-3 rounded-lg text-sm">
                                    {error}
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium text-slate-200 mb-1.5" htmlFor="name">Full Name</label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">person</span>
                                        <input
                                            {...register('name')}
                                            className={`w-full bg-white/10 dark:bg-black/20 border ${errors.name ? 'border-red-500' : 'border-white/20'} text-white placeholder-slate-400 rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none`}
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-200 mb-1.5" htmlFor="email">Email Address</label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">mail</span>
                                        <input
                                            {...register('email')}
                                            className={`w-full bg-white/10 dark:bg-black/20 border ${errors.email ? 'border-red-500' : 'border-white/20'} text-white placeholder-slate-400 rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none`}
                                            placeholder="john@example.com"
                                            type="email"
                                        />
                                    </div>
                                    {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-200 mb-1.5" htmlFor="phone">Phone Number</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">call</span>
                                    <input
                                        {...register('phone')}
                                        className={`w-full bg-white/10 dark:bg-black/20 border ${errors.phone ? 'border-red-500' : 'border-white/20'} text-white placeholder-slate-400 rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none`}
                                        placeholder="+1 234 567 890"
                                    />
                                </div>
                                {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium text-slate-200 mb-1.5" htmlFor="password">Password</label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">lock</span>
                                        <input
                                            {...register('password')}
                                            className={`w-full bg-white/10 dark:bg-black/20 border ${errors.password ? 'border-red-500' : 'border-white/20'} text-white placeholder-slate-400 rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none`}
                                            placeholder="••••••••"
                                            type="password"
                                        />
                                    </div>
                                    {/* Strength Bar */}
                                    <div className="mt-2 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full transition-all duration-300 ${getStrengthColor()}`}
                                            style={{ width: `${strength}%` }}
                                        ></div>
                                    </div>
                                    {errors.password && <p className="mt-1 text-xs text-red-400">{errors.password.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-200 mb-1.5" htmlFor="confirmPassword">Confirm Password</label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">lock_reset</span>
                                        <input
                                            {...register('confirmPassword')}
                                            className={`w-full bg-white/10 dark:bg-black/20 border ${errors.confirmPassword ? 'border-red-500' : 'border-white/20'} text-white placeholder-slate-400 rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none`}
                                            placeholder="••••••••"
                                            type="password"
                                        />
                                    </div>
                                    {errors.confirmPassword && <p className="mt-1 text-xs text-red-400">{errors.confirmPassword.message}</p>}
                                </div>
                            </div>

                            <div className="flex items-start">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    className="mt-1 w-4 h-4 rounded border-white/20 bg-white/10 text-primary focus:ring-primary transition-colors"
                                    required
                                />
                                <label className="ml-3 text-sm text-slate-300" htmlFor="terms">
                                    I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                                </label>
                            </div>

                            <button
                                disabled={isLoading}
                                className="w-full bg-primary hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                                type="submit"
                            >
                                {isLoading ? (
                                    <>
                                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                        Creating Account...
                                    </>
                                ) : 'Create Account'}
                            </button>
                        </form>
                    )}

                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/10"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-[rgba(15,23,42,0.7)] backdrop-blur-md rounded-full text-slate-400">Or sign up with</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white py-3 rounded-xl transition-all">
                            <img alt="Google icon" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDECqlSHBuwc49rUGBIDGZF7x1Kqz9pDMTEDV_71kUjv7MYATRZDTbp94wTQAeYYbOTek6qI8AoOia8dpUIGHJqUsfvutB5xlIjk3KA0P1tF7kYgrJU_dJo4KHJwz9HN37kY64JiMdyP8B_rFhbTqEiSCxvKqFVfsHSBHRa23W_RSQpkefV67h8B8oNiVuz7KnPcyDLNuTBzEQex9Iho8ALmQON1vRhN-1ufmHexDCGdu75n537GdqpCqx2qgcFHCvPcIFfLnzD8zA" />
                            <span className="font-medium">Google</span>
                        </button>
                        <button className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white py-3 rounded-xl transition-all">
                            <img alt="Facebook icon" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-A_piazgoQU0gWEvt1EalsHtzlrTU6MMT0hkE7zkopYCQz4SUATVSkg7htWstvpYF8mC8lkK0N46-8hSeaRtoN1Gp0vPbBbY48gCW9QFRfKff-zboRDoSFSvE-2WSeAOtM5dL3IniO8uRfi7ZhN79GNsx2ba_sHCNBUvtG4kv4hHOWFQC3exGTncW6XXLwx0jxxs1k8nCuj_uuzaC4kCmO1FYbEQ9KxjazeOtI0Gb1OQl9mccHB9yckR2od2Wxf-E_2_vhMMykE4" />
                            <span className="font-medium">Facebook</span>
                        </button>
                    </div>

                    <p className="mt-8 text-center text-slate-300">
                        Already have an account?
                        <Link to="/login" className="text-primary font-semibold hover:underline ml-1">Sign In</Link>
                    </p>
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

export default RegisterPage;
