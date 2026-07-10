
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Adventure Traveler",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDT-w4Bw4P8bFkFfC2y_zM8tP1xQ9oR5nS2uT6vU7wX4yZ9aB3cD5eE7fG8hH9iJ0kL1mN2oP3qR4sT5uV6wW7xX8yZ9aB3cD5eE7fG8hH9iJ0kL1mN2oP3qR4sT5uV6wW7xX8yZ9aB3cD5e", // Placeholder
        rating: 5,
        review: "The Bali retreat was absolutely magical. The itinerary was perfectly balanced between activities and relaxation. Highly recommend!"
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Business Traveler",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3oP4qR5sT6uV7wW8xX9yZ0aB1cD2eE3fG4hH5iJ6kL7mN8oP9qR0sT1uV2wW3xX4yZ5aB6cD7eE8fG9hH0iJ1kL2mN3oP4qR5sT6uV7wW8xX9yZ0aB1cD2eE3f", // Placeholder
        rating: 5,
        review: "Excellent service from start to finish. The team handled all my last-minute changes with ease. Truly world-class support."
    },
    {
        id: 3,
        name: "Emma Wilson",
        role: "Family Vacation",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7k8j9l0m1n2o3p4q5r6s7t8u9v0w1x2y3z4a5b6c7d8e9f0g1h2i3j4k5l6m7n8o9p0q1r2s3t4u5v6", // Placeholder
        rating: 4,
        review: "Great family trip to Singapore. The kids loved the Universal Studios tickets included in the package. Will book again."
    }
];

export default function CustomerReviews() {
    return (
        <section className="py-20 bg-primary/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What Our Customers Say</h2>
                    <p className="text-slate-500 dark:text-slate-400">Read trusted reviews from our happy travelers.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {REVIEWS.map((review) => (
                        <div key={review.id} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm relative">
                            <Quote className="absolute top-8 right-8 text-primary/10 w-12 h-12" />

                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-5 h-5 ${i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-300'}`}
                                    />
                                ))}
                            </div>

                            <p className="text-slate-600 dark:text-slate-300 mb-8 italic relative z-10">"{review.review}"</p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200">
                                    {/* Placeholder avatar if image fails to load or using generic */}
                                    <img src={`https://ui-avatars.com/api/?name=${review.name}&background=random`} alt={review.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">{review.name}</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
