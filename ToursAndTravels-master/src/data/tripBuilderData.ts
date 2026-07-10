
export interface Destination {
    id: string;
    name: string;
    image: string;
    description: string;
    rating: number;
    priceLevel: 'Low' | 'Medium' | 'High';
}

export interface Activity {
    id: string;
    name: string;
    category: 'Adventure' | 'Culture' | 'Food' | 'Relaxation' | 'Nightlife' | 'Shopping';
    image: string;
    price: number;
    duration: string;
    rating: number;
}

export const MOCK_DESTINATIONS: Destination[] = [
    {
        id: 'paris',
        name: 'Paris, France',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1000',
        description: 'The City of Light, known for its cafe culture, Eiffel Tower, and masterpieces of art.',
        rating: 4.8,
        priceLevel: 'High'
    },
    {
        id: 'tokyo',
        name: 'Tokyo, Japan',
        image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=1000',
        description: 'A mix of ultramodern style and traditional culture, from neon-lit skyscrapers to historic temples.',
        rating: 4.9,
        priceLevel: 'High'
    },
    {
        id: 'bali',
        name: 'Bali, Indonesia',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1000',
        description: 'An Indonesian paradise known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs.',
        rating: 4.7,
        priceLevel: 'Medium'
    },
    {
        id: 'newyork',
        name: 'New York, USA',
        image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=1000',
        description: 'The Big Apple, a global hub of culture, fashion, and sprawling skyline.',
        rating: 4.6,
        priceLevel: 'High'
    },
    {
        id: 'santorini',
        name: 'Santorini, Greece',
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=1000',
        description: 'Famous for its whitewashed, cubiform houses clinging to cliffs above an underwater caldera.',
        rating: 4.9,
        priceLevel: 'High'
    },
    {
        id: 'dubai',
        name: 'Dubai, UAE',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea936a7fe65?auto=format&fit=crop&q=80&w=1000',
        description: 'Known for luxury shopping, ultramodern architecture and a lively nightlife scene.',
        rating: 4.7,
        priceLevel: 'High'
    }
];

export const MOCK_ACTIVITIES: Activity[] = [
    {
        id: 'act-1',
        name: 'Eiffel Tower Summit Access',
        category: 'Culture',
        image: 'https://images.unsplash.com/photo-1543349689-9a4d426bee8e?auto=format&fit=crop&q=80&w=600',
        price: 45,
        duration: '3 hours',
        rating: 4.8
    },
    {
        id: 'act-2',
        name: 'Louvre Museum Private Tour',
        category: 'Culture',
        image: 'https://images.unsplash.com/photo-1499856871940-a09627c6d7db?auto=format&fit=crop&q=80&w=600',
        price: 120,
        duration: '4 hours',
        rating: 4.9
    },
    {
        id: 'act-3',
        name: 'Seine River Dinner Cruise',
        category: 'Food',
        image: 'https://images.unsplash.com/photo-1624546255753-fb340da256fb?auto=format&fit=crop&q=80&w=600',
        price: 150,
        duration: '2.5 hours',
        rating: 4.6
    },
    {
        id: 'act-4',
        name: 'Montmartre Food & Wine Tour',
        category: 'Food',
        image: 'https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?auto=format&fit=crop&q=80&w=600',
        price: 90,
        duration: '3 hours',
        rating: 4.7
    },
    {
        id: 'act-5',
        name: 'Versailles Bike Tour',
        category: 'Adventure',
        image: 'https://images.unsplash.com/photo-1597928250767-17b204680876?auto=format&fit=crop&q=80&w=600',
        price: 85,
        duration: '7 hours',
        rating: 4.8
    },
    {
        id: 'act-6',
        name: 'Moulin Rouge Show',
        category: 'Nightlife',
        image: 'https://images.unsplash.com/photo-1569335492211-5764b840e66c?auto=format&fit=crop&q=80&w=600',
        price: 180,
        duration: '4 hours',
        rating: 4.5
    },
    {
        id: 'act-7',
        name: 'Luxury Spa Day',
        category: 'Relaxation',
        image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=600',
        price: 250,
        duration: '5 hours',
        rating: 4.9
    },
    {
        id: 'act-8',
        name: 'Galeries Lafayette Shopping Experience',
        category: 'Shopping',
        image: 'https://images.unsplash.com/photo-1596245974026-628d002be34e?auto=format&fit=crop&q=80&w=600',
        price: 0,
        duration: 'Flexible',
        rating: 4.4
    }
];
