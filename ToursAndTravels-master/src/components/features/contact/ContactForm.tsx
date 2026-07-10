import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    subject: z.string().min(5, 'Subject must be at least 5 characters'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormValues) => {
        setIsSubmitting(true);
        // Simulate API call
        console.log('Form Data:', data);
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitStatus('success');
        reset();

        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
    };

    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 md:p-8 border border-slate-100 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send us a Message</h3>

            {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-lg flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <p>Thank you! Your message has been sent successfully.</p>
                </div>
            )}

            {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-lg flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p>Something went wrong. Please try again later.</p>
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            Full Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            {...register('name')}
                            className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all ${errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                                }`}
                            placeholder="John Doe"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            {...register('email')}
                            className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all ${errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                                }`}
                            placeholder="john@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Subject
                    </label>
                    <input
                        id="subject"
                        type="text"
                        {...register('subject')}
                        className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all ${errors.subject ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                            }`}
                        placeholder="Booking Inquiry"
                    />
                    {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows={5}
                        {...register('message')}
                        className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all ${errors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                            }`}
                        placeholder="How can we help you?"
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/25 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        'Sending...'
                    ) : (
                        <>
                            Send Message <Send className="w-5 h-5" />
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}
