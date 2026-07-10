import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link } from 'react-router-dom';
import { Lock, Eye, EyeOff, CheckCircle2, ArrowLeft } from 'lucide-react';
import PasswordStrengthIndicator from '../components/common/PasswordStrengthIndicator';

const resetPasswordSchema = z.object({
    password: z.string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/[0-9]/, 'Password must contain at least one number')
        .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

export default function ResetPasswordPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<ResetPasswordFormData>({
        resolver: zodResolver(resetPasswordSchema),
        mode: 'onChange'
    });

    const passwordValue = watch('password', '');

    const onSubmit = async (data: ResetPasswordFormData) => {
        // Simulate API call - logic would go here
        await new Promise(resolve => setTimeout(resolve, 1500));
        if (data.password) {
            setIsSubmitted(true);
        }
    };

    if (isSubmitted) {
        return (
            <div className="min-h-[70vh] flex items-center justify-center px-4">
                <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-8 text-center animate-in fade-in zoom-in duration-300">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
                        <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Password Reset!</h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-8">
                        Your password has been changed successfully. You can now log in with your new credentials.
                    </p>
                    <Link 
                        to="/login" 
                        className="block w-full py-3.5 px-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-md active:scale-95 text-center"
                    >
                        Go to Login
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
            <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-8">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Reset Password</h1>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                        Please choose a strong password to protect your account.
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* New Password Field */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 block">
                            New Password*
                        </label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                                <Lock className="w-4 h-4" />
                            </div>
                            <input
                                {...register('password')}
                                type={showPassword ? 'text' : 'password'}
                                className={`w-full pl-10 pr-12 py-3 bg-slate-50 dark:bg-slate-800/50 border ${errors.password ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 dark:border-slate-700 focus:ring-primary/20'} rounded-xl focus:outline-none focus:ring-4 focus:border-primary dark:text-white transition-all`}
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="text-xs text-red-500 font-medium ml-1">
                                {errors.password.message}
                            </p>
                        )}
                        
                        <div className="pt-2">
                            <PasswordStrengthIndicator password={passwordValue} />
                        </div>
                    </div>

                    {/* Confirm Password Field */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 block">
                            Confirm Password*
                        </label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                                <Lock className="w-4 h-4" />
                            </div>
                            <input
                                {...register('confirmPassword')}
                                type={showConfirmPassword ? 'text' : 'password'}
                                className={`w-full pl-10 pr-12 py-3 bg-slate-50 dark:bg-slate-800/50 border ${errors.confirmPassword ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 dark:border-slate-700 focus:ring-primary/20'} rounded-xl focus:outline-none focus:ring-4 focus:border-primary dark:text-white transition-all`}
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                            >
                                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                        {errors.confirmPassword && (
                            <p className="text-xs text-red-500 font-medium ml-1">
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 px-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-md active:scale-95 disabled:opacity-50 disabled:active:scale-100 flex items-center justify-center gap-2"
                    >
                        {isSubmitting ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Resetting Password...
                            </>
                        ) : 'Reset Password'}
                    </button>

                    <div className="text-center pt-4">
                        <Link 
                            to="/login" 
                            className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors font-medium"
                        >
                            <ArrowLeft className="w-4 h-4" /> Back to Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
