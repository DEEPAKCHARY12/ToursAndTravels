
import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display selection:bg-primary/30">
            {/* Header */}
            <header className="absolute top-0 w-full z-20 p-6 flex justify-between items-center bg-transparent">
                <div className="flex items-center gap-2">
                    <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-xl">flight_takeoff</span>
                    </div>
                    <span className="text-white font-bold text-xl tracking-tight">Travelly</span>
                </div>
                <div className="hidden md:flex gap-8 text-white/90 font-medium">
                    <a className="hover:text-white transition-colors" href="#">Flights</a>
                    <a className="hover:text-white transition-colors" href="#">Hotels</a>
                    <a className="text-primary transition-colors" href="#">Packages</a>
                    <a className="hover:text-white transition-colors" href="#">Offers</a>
                </div>
                <div className="flex items-center gap-6">
                    <button className="text-white hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">language</span>
                    </button>
                    <Link
                        to="/signup"
                        className="bg-primary hover:bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-primary/25"
                    >
                        Sign Up
                    </Link>
                </div>
            </header>

            {/* Background Image */}
            <div className="fixed inset-0 z-0">
                <img
                    alt="Stunning desert canyon landscape at dusk"
                    className="w-full h-full object-cover brightness-50 dark:brightness-[0.4]"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH8KqrcPEBT5IrMn9mRt3yS5LaSfHv33PQhV8u1LSrwvvHOHpuvbSk-WM1QSqptlkX8SpcmnwmgI6N1YQFXf2PF3AQABH5pcvscC7cuqp-ZHuSPjSiSyjpXpF6xxPUDfbi8u44NHpovIE7H8EipHqaOr4PKl6UGt4XnwiihTQg2GzCE055uORX3FsLp-5FGM_wPjZZMe8hV-CblvmA510B5CcLSyPN7NLw1plQeQ7-bnMM-oVCzB9wa5JjyLd7HVNsP3GpIOTgPcM"
                />
            </div>

            {/* Login Form */}
            <main className="relative z-10 flex-grow flex items-center justify-center p-6 mt-16 md:mt-0">
                <div className="bg-[rgba(15,23,42,0.7)] backdrop-blur-md border border-white/10 w-full max-w-md p-8 md:p-10 rounded-3xl shadow-2xl">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-bold text-white dark:text-white mb-2">Welcome Back</h1>
                        <p className="text-slate-200 dark:text-slate-400">Discover your next adventure with Travelly</p>
                    </div>
                    <form action="#" className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="block text-sm font-medium text-slate-200 dark:text-slate-300 mb-2" htmlFor="identifier">Email or Phone</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">mail</span>
                                <input
                                    className="w-full bg-white/10 dark:bg-black/20 border-white/20 dark:border-white/10 text-white placeholder-slate-400 rounded-xl py-3.5 pl-12 pr-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                    id="identifier"
                                    placeholder="Enter your email"
                                    type="text"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-sm font-medium text-slate-200 dark:text-slate-300" htmlFor="password">Password</label>
                                <Link to="/forgot-password" title="Go to Forgot Password Page" className="text-xs text-primary hover:underline font-medium">Forgot password?</Link>
                            </div>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">lock</span>
                                <input
                                    className="w-full bg-white/10 dark:bg-black/20 border-white/20 dark:border-white/10 text-white placeholder-slate-400 rounded-xl py-3.5 pl-12 pr-12 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                    id="password"
                                    placeholder="••••••••"
                                    type="password"
                                />
                                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors" type="button">
                                    <span className="material-symbols-outlined text-xl">visibility</span>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <input
                                className="w-4 h-4 rounded border-white/20 dark:border-white/10 bg-white/10 text-primary focus:ring-primary focus:ring-offset-0 transition-colors"
                                id="remember"
                                type="checkbox"
                            />
                            <label className="ml-3 text-sm text-slate-300 dark:text-slate-400 cursor-pointer select-none" htmlFor="remember">Remember me for 30 days</label>
                        </div>
                        <button
                            className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
                            type="submit"
                        >
                            Log In
                        </button>
                    </form>
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/10"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-[rgba(15,23,42,0.7)] backdrop-blur-md border border-white/10 rounded-full text-slate-400">Or continue with</span>
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
                    <p className="mt-10 text-center text-slate-300 dark:text-slate-400">
                        Don't have an account?
                        <Link to="/register" className="text-primary font-semibold hover:underline decoration-2 underline-offset-4 ml-1">Sign Up</Link>
                    </p>
                </div>
            </main>

            {/* Footer */}
            <footer className="relative z-10 p-6 text-center">
                <p className="text-white/60 text-xs tracking-wide">
                    © 2024 Travelly Inc. All rights reserved.
                    <span className="mx-2">|</span>
                    <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
                    <span className="mx-2">|</span>
                    <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
                </p>
            </footer>
        </div>
    );
};

export default LoginPage;
