import { Download, Share2, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ConfirmationActions() {
    const handleDownload = () => {
        // Mock booking reference
        alert("Downloading E-Ticket (PDF)...");
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: 'My Trip to Tokyo',
                text: 'I just booked a trip to Tokyo with Tours and Travels!',
                url: window.location.href,
            }).catch(console.error);
        } else {
            alert("Share Link copied to clipboard!");
        }
    };

    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">What's Next?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                    onClick={handleDownload}
                    className="flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-3 px-6 rounded-lg font-bold hover:opacity-90 transition-opacity"
                >
                    <Download className="w-5 h-5" />
                    Download E-Ticket
                </button>
                <button
                    onClick={handleShare}
                    className="flex items-center justify-center gap-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 py-3 px-6 rounded-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                >
                    <Share2 className="w-5 h-5" />
                    Share Trip
                </button>
            </div>

            <Link
                to="/"
                className="flex items-center justify-center gap-2 mt-4 text-primary font-bold hover:underline"
            >
                <Home className="w-5 h-5" />
                Back to Home
            </Link>
        </div>
    );
}
