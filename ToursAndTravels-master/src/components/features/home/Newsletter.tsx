

export default function Newsletter() {
    return (
        <section className="bg-primary/5 py-16">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Unlock Exclusive Travel Deals</h2>
                <p className="text-slate-600 dark:text-slate-300 mb-8">Sign up for our newsletter and receive 20% off your first booking.</p>
                <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="flex-1 px-5 py-3 rounded-lg border border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-primary focus:border-primary outline-none dark:bg-slate-800 dark:text-white"
                    />
                    <button type="button" className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
}
