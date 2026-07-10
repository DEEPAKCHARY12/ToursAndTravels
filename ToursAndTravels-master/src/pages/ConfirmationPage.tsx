import { useLocation } from 'react-router-dom';
import ConfirmationHero from '../components/features/booking/ConfirmationHero';
import BookingSummary from '../components/features/booking/BookingSummary';
import ConfirmationActions from '../components/features/booking/ConfirmationActions';
export default function ConfirmationPage() {
    const location = useLocation();
    const state = location.state;

    return (
        <div className="bg-slate-50 dark:bg-background-dark min-h-screen pb-20">
            <ConfirmationHero />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content - Booking Summary */}
                    <div className="lg:col-span-2">
                        <BookingSummary booking={state} />
                    </div>

                    {/* Sidebar - Actions */}
                    <div className="lg:col-span-1">
                        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 p-6 sticky top-24">
                            <ConfirmationActions />

                            <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-700">
                                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Need Help?</h4>
                                <p className="text-slate-500 text-sm mb-4">
                                    If you have any questions about your booking, please contact our support team.
                                </p>
                                <p className="font-medium text-slate-900 dark:text-white">support@toursandtravels.com</p>
                                <p className="font-medium text-slate-900 dark:text-white">+1 234 567 890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
