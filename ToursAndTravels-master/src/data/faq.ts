import type { FAQItemProps } from '../types';

export const FAQ_DATA: FAQItemProps[] = [
    {
        id: 1,
        category: 'Booking',
        question: 'How do I modify my reservation?',
        answer: 'You can modify your reservation by logging into your account and visiting the "My Trips" section. Changes are subject to availability and may incur fees depending on the fare rules.',
    },
    {
        id: 2,
        category: 'Booking',
        question: 'Can I book for a large group?',
        answer: 'Yes! For groups of 10 or more, please contact our Group Travel specialists for exclusive rates and personalized assistance.',
    },
    {
        id: 3,
        category: 'Payment',
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, MasterCard, Amex), PayPal, and Apple Pay. We also offer "Buy Now, Pay Later" options through our partners.',
    },
    {
        id: 4,
        category: 'Payment',
        question: 'Are there any hidden fees?',
        answer: 'Transparency is our policy. All mandatory taxes and fees are included in the price you see at checkout. Optional add-ons like insurance or baggage are clearly itemized.',
    },
    {
        id: 5,
        category: 'Cancellation',
        question: 'What is your cancellation policy?',
        answer: 'Cancellation policies vary by booking. Free cancellation is available on many hotels up to 24 hours before check-in. Flight cancellation rules depend on the airline.',
    },
    {
        id: 6,
        category: 'Account',
        question: 'How do I reset my password?',
        answer: 'Click "Log In" and select "Forgot Password". Enter your email address, and we will send you a link to reset your password securely.',
    },
];

export const FAQ_CATEGORIES = ['All', 'Booking', 'Payment', 'Cancellation', 'Account'];
