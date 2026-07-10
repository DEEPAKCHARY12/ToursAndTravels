
import { useState } from 'react';
import {
    Bell,
    Globe,
    Trash2,
    Download,
    User,
    Lock
} from 'lucide-react';
import { useThemeStore } from '../store/themeStore';

export default function SettingsPage() {
    const { theme, setTheme, currency, setCurrency, language, setLanguage } = useThemeStore();

    // Mock State for toggles
    const [notifications, setNotifications] = useState({
        email: true,
        sms: true,
        push: false,
        marketing: false
    });

    const [privacy, setPrivacy] = useState({
        profileVisibility: true,
        dataSharing: false
    });

    const handleNotificationChange = (key: keyof typeof notifications) => {
        setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handlePrivacyChange = (key: keyof typeof privacy) => {
        setPrivacy(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handleDeleteAccount = () => {
        if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
            alert("Account deletion scheduled.");
        }
    };

    const handleDownloadData = () => {
        alert("Your data is being prepared for download.");
    };

    return (
        <div className="bg-neutral-50 dark:bg-neutral-900 min-h-screen py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">Settings</h1>
                    <p className="text-neutral-500 dark:text-neutral-400 mt-2">Manage your preferences, notification settings, and account details.</p>
                </div>

                <div className="space-y-6">
                    {/* Notification Preferences */}
                    <section className="bg-white dark:bg-neutral-800 shadow-sm rounded-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
                        <div className="p-6 border-b border-neutral-200 dark:border-neutral-700 flex items-center gap-3">
                            <Bell className="text-primary w-5 h-5" />
                            <h2 className="text-lg font-bold text-neutral-900 dark:text-white">Notification Preferences</h2>
                        </div>
                        <div className="p-6 space-y-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-medium text-neutral-900 dark:text-white">Email Updates</h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Receive booking confirmations and travel itineraries.</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" checked={notifications.email} onChange={() => handleNotificationChange('email')} className="sr-only peer" />
                                    <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                </label>
                            </div>
                            <hr className="border-neutral-100 dark:border-neutral-700" />
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-medium text-neutral-900 dark:text-white">SMS Alerts</h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Get real-time updates about flight delays and gate changes.</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" checked={notifications.sms} onChange={() => handleNotificationChange('sms')} className="sr-only peer" />
                                    <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                </label>
                            </div>
                            <hr className="border-neutral-100 dark:border-neutral-700" />
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-medium text-neutral-900 dark:text-white">Push Notifications</h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Receive notifications on your mobile device.</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" checked={notifications.push} onChange={() => handleNotificationChange('push')} className="sr-only peer" />
                                    <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                </label>
                            </div>
                            <hr className="border-neutral-100 dark:border-neutral-700" />
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-medium text-neutral-900 dark:text-white">Marketing Emails</h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Receive offers, promotions, and travel inspiration.</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" checked={notifications.marketing} onChange={() => handleNotificationChange('marketing')} className="sr-only peer" />
                                    <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                </label>
                            </div>
                        </div>
                    </section>

                    {/* Display Settings */}
                    <section className="bg-white dark:bg-neutral-800 shadow-sm rounded-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
                        <div className="p-6 border-b border-neutral-200 dark:border-neutral-700 flex items-center gap-3">
                            <Globe className="text-primary w-5 h-5" />
                            <h2 className="text-lg font-bold text-neutral-900 dark:text-white">Display Settings</h2>
                        </div>
                        <div className="p-6 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Currency</label>
                                    <select
                                        value={currency}
                                        onChange={(e) => setCurrency(e.target.value)}
                                        className="w-full rounded-lg border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:ring-primary focus:border-primary"
                                    >
                                        <option value="USD">USD ($)</option>
                                        <option value="INR">INR (₹)</option>
                                        <option value="EUR">EUR (€)</option>
                                        <option value="GBP">GBP (£)</option>
                                        <option value="JPY">JPY (¥)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Language</label>
                                    <select
                                        value={language}
                                        onChange={(e) => setLanguage(e.target.value)}
                                        className="w-full rounded-lg border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:ring-primary focus:border-primary"
                                    >
                                        <option value="en">English</option>
                                        <option value="es">Spanish</option>
                                        <option value="fr">French</option>
                                        <option value="de">German</option>
                                    </select>
                                </div>
                            </div>
                            <hr className="border-neutral-100 dark:border-neutral-700" />
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-medium text-neutral-900 dark:text-white">Theme Preference</h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Choose how the app looks to you.</p>
                                </div>
                                <div className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-700 p-1 rounded-lg">
                                    <button
                                        onClick={() => setTheme('light')}
                                        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${theme === 'light' ? 'bg-white text-primary shadow-sm' : 'text-neutral-500 dark:text-neutral-400'}`}
                                    >
                                        Light
                                    </button>
                                    <button
                                        onClick={() => setTheme('dark')}
                                        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${theme === 'dark' ? 'bg-neutral-600 text-white shadow-sm' : 'text-neutral-500 dark:text-neutral-400'}`}
                                    >
                                        Dark
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Privacy Settings */}
                    <section className="bg-white dark:bg-neutral-800 shadow-sm rounded-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
                        <div className="p-6 border-b border-neutral-200 dark:border-neutral-700 flex items-center gap-3">
                            <Lock className="text-primary w-5 h-5" />
                            <h2 className="text-lg font-bold text-neutral-900 dark:text-white">Privacy Settings</h2>
                        </div>
                        <div className="p-6 space-y-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-medium text-neutral-900 dark:text-white">Profile Visibility</h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Allow other travelers to see your profile.</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" checked={privacy.profileVisibility} onChange={() => handlePrivacyChange('profileVisibility')} className="sr-only peer" />
                                    <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                </label>
                            </div>
                            <hr className="border-neutral-100 dark:border-neutral-700" />
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-medium text-neutral-900 dark:text-white">Data Sharing</h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Allow us to share anonymous usage data for analytics.</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" checked={privacy.dataSharing} onChange={() => handlePrivacyChange('dataSharing')} className="sr-only peer" />
                                    <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                </label>
                            </div>
                        </div>
                    </section>

                    {/* Account Management */}
                    <section className="bg-white dark:bg-neutral-800 shadow-sm rounded-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
                        <div className="p-6 border-b border-neutral-200 dark:border-neutral-700 flex items-center gap-3">
                            <User className="text-primary w-5 h-5" />
                            <h2 className="text-lg font-bold text-neutral-900 dark:text-white">Account Management</h2>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg">
                                <div>
                                    <h3 className="font-medium text-neutral-900 dark:text-white">Download My Data</h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Get a copy of all your travel data and history.</p>
                                </div>
                                <button
                                    onClick={handleDownloadData}
                                    className="flex items-center gap-2 px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
                                >
                                    <Download className="w-4 h-4" />
                                    Download
                                </button>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-red-200 dark:border-red-900/30 bg-red-50 dark:bg-red-900/10 rounded-lg">
                                <div>
                                    <h3 className="font-medium text-red-900 dark:text-red-200">Delete Account</h3>
                                    <p className="text-sm text-red-700 dark:text-red-300">Permanently delete your account and all associated data.</p>
                                </div>
                                <button
                                    onClick={handleDeleteAccount}
                                    className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-red-900/50 border border-red-300 dark:border-red-800 rounded-lg text-sm font-medium text-red-700 dark:text-red-200 hover:bg-red-50 dark:hover:bg-red-900/40 transition-colors"
                                >
                                    <Trash2 className="w-4 h-4" />
                                    Delete Account
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
