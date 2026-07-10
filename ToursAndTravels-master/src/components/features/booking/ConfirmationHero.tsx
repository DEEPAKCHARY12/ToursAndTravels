import { CheckCircle } from 'lucide-react';

export default function ConfirmationHero() {
    const bookingRef = "TRV-" + Math.random().toString(36).substr(2, 9).toUpperCase();

    return (
        <div className="bg-primary text-white py-16 text-center">
            <div className="max-w-3xl mx-auto px-4">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">Booking Confirmed!</h1>
                <p className="text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
                    Thank you for booking with Tours and Travels. Your reservation has been confirmed and a confirmation email has been sent to your inbox.
                </p>
                <div className="inline-block bg-white/10 px-6 py-3 rounded-lg border border-white/20">
                    <p className="text-sm text-blue-200 uppercase tracking-wider mb-1">Booking Reference</p>
                    <p className="text-2xl font-mono font-bold tracking-widest">{bookingRef}</p>
                </div>
                <p className="mt-6 text-blue-200 text-sm">
                    A confirmation email has been sent to <strong>your_email@example.com</strong>
                </p>
            </div>
        </div>
    );
}
