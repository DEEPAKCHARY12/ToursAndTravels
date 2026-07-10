import type { PackageProps } from '../types';

export const ALL_PACKAGES: PackageProps[] = [
    {
        id: 1,
        slug: "bali-retreat-spa",
        title: "Bali Retreat & Spa",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBu9Aguo9q5m3BhjObAr-6IfyR-7fEGgtvBzYL9cpqPMBUJ_nHw76DRlwzc_nlkTF30SFExVG2m32GrTcvO0odp7YM7lsfsBV5C45oQ46I92k6pcpZ0fn-nZkKp6ahirB2-kK2IQ01xItt1f3uneSeA7Wh49S1SAIlbIbIi4K5cM9TOReawqyVNZuUzB7jfPuJ3jGZ-nDhkG-sDiTJ1Fm150xVDMKWYCk8ASudr4Zbur6q_eeXNyKkGs9Nl6bmrcKQqInvop00HOQ",
        imageAlt: "Tropical Bali Resort",
        gallery: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBu9Aguo9q5m3BhjObAr-6IfyR-7fEGgtvBzYL9cpqPMBUJ_nHw76DRlwzc_nlkTF30SFExVG2m32GrTcvO0odp7YM7lsfsBV5C45oQ46I92k6pcpZ0fn-nZkKp6ahirB2-kK2IQ01xItt1f3uneSeA7Wh49S1SAIlbIbIi4K5cM9TOReawqyVNZuUzB7jfPuJ3jGZ-nDhkG-sDiTJ1Fm150xVDMKWYCk8ASudr4Zbur6q_eeXNyKkGs9Nl6bmrcKQqInvop00HOQ",
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800"
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
        tour360Url: "https://www.google.com/maps/embed?pb=!4v1620000000000!6m8!1m7!1sCAoSLEFGMVFpcE5xRzZfMG1XOXVfWl94Wl94Wl94Wl94Wl94Wl94Wl94Wl94!2m2!1d-8.4907!2d115.2638!3f0!4f0!5f0.7820865974638072",
        rating: 4.8,
        reviewCount: 450,
        price: 899,
        originalPrice: 1299,
        location: "Ubud, Indonesia",
        duration: "5 Days / 4 Nights",
        description: "Immerse yourself in the spiritual heart of Bali. Includes daily yoga, spa treatments, and jungle tours.",
        isBestSeller: true,
        category: 'trending',
        tourType: 'Adventure',
        groupSize: "12-15 Persons",
        difficulty: "Easy",
        accommodation: 'Luxury Resort',
        inclusions: ['Meals', 'Transport', 'Guide', 'WiFi', 'Spa session'],
        exclusions: ['Flight tickets', 'Personal expenses', 'Travel insurance'],
        highlights: ['Daily Yoga', 'Spa Treatments', 'Jungle Tour'],
        itinerary: [
            { day: 1, title: "Arrival & Welcome", description: "Arrive at Ngurah Rai International Airport. Transfer to Ubud and check into our luxury jungle resort.", meals: ["Dinner"], transport: "Private AC Van" },
            { day: 2, title: "Spiritual Ubud Tour", description: "Visit Tirta Empul Temple and Goa Gajah. Experience a traditional Balinese blessing ceremony.", meals: ["Breakfast", "Lunch"], activities: ["Temple Visit", "Blessing Ceremony"] },
            { day: 3, title: "Jungle Trekking & Waterfalls", description: "Morning hike through Tegalalang Rice Terrace followed by a refreshing dip in Tegenungan Waterfall.", meals: ["Breakfast", "Lunch"], activities: ["Trekking", "Swimming"] },
            { day: 4, title: "Spa & Relaxation", description: "Enjoy a full day of wellness. Includes a 2-hour traditional Balinese massage and herbal bath.", meals: ["Breakfast", "Dinner"], activities: ["Spa Treatment", "Yoga"] },
            { day: 5, title: "Departure", description: "Leisure morning for shopping at Ubud Market before heading back to the airport.", meals: ["Breakfast"], transport: "Private AC Van" }
        ],
        termsAndConditions: ["Refundable up to 30 days before departure", "Booking requires 50% deposit", "Child below 5 years is free"],
        availableDates: [
            { id: "d1", start: "2026-06-15", end: "2026-06-20" },
            { id: "d2", start: "2026-07-10", end: "2026-07-15", priceAdjustment: 50 },
            { id: "d3", start: "2026-08-05", end: "2026-08-10", priceAdjustment: 100 }
        ]
    },
    {
        id: 2,
        slug: "paris-romantic-getaway",
        title: "Paris Romantic Getaway",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9452UZsnvbW-sJxYti-g214ENkjTV5xPYHSiOECvVe0vSm8t2YXH-IkDL9MS6gP0TrUKdVlO7haiY4h3V-WNIzNOdpK-gBNMi1WrJUC_zZu3sGhBS5HQwWu1X8PaePer6VqehimC5osH2BfsbSd_erLyJ8VdyHRVNutilEIdtnqAvXcclKhaxW9RSEze7nqMzYvrz5efedjsJUsi5sgo2ULZCCZF4QxKXaMZqkPYH5A6LudKnCpc2Bp4cHNRWidzJVLAiA-S8DA",
        imageAlt: "Eiffel Tower Paris",
        gallery: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuD9452UZsnvbW-sJxYti-g214ENkjTV5xPYHSiOECvVe0vSm8t2YXH-IkDL9MS6gP0TrUKdVlO7haiY4h3V-WNIzNOdpK-gBNMi1WrJUC_zZu3sGhBS5HQwWu1X8PaePer6VqehimC5osH2BfsbSd_erLyJ8VdyHRVNutilEIdtnqAvXcclKhaxW9RSEze7nqMzYvrz5efedjsJUsi5sgo2ULZCCZF4QxKXaMZqkPYH5A6LudKnCpc2Bp4cHNRWidzJVLAiA-S8DA",
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800"
        ],
        rating: 4.9,
        reviewCount: 320,
        price: 1200,
        originalPrice: 1600,
        location: "Paris, France",
        duration: "4 Days / 3 Nights",
        description: "Experience the city of love. Includes a Seine river cruise, Louvre tickets, and a romantic dinner.",
        category: 'trending',
        tourType: 'Honeymoon',
        groupSize: "2 Persons",
        difficulty: "Easy",
        accommodation: 'Boutique Hotel',
        inclusions: ['Meals', 'Entry Tickets', 'Guide', 'Private Car'],
        exclusions: ['Airfare', 'Personal Shopping'],
        highlights: ['Seine Cruise', 'Louvre Museum', 'Eiffel Tower View'],
        itinerary: [
            { day: 1, title: "L'arrivée à Paris", description: "Welcome to the City of Light. Check-in to your boutique hotel near the Seine.", meals: ["Dinner"] },
            { day: 2, title: "Art & Romance", description: "Visit the Louvre in the morning and take a sunset cruise on the Seine.", meals: ["Breakfast", "Dinner"] },
            { day: 3, title: "Eiffel & Montmartre", description: "Climb the Eiffel Tower and explore the artistic streets of Montmartre.", meals: ["Breakfast", "Lunch"] },
            { day: 4, title: "Au Revoir", description: "Last-minute souvenir shopping on Champs-Élysées before departure.", meals: ["Breakfast"] }
        ],
        termsAndConditions: ["Non-refundable within 7 days", "Couples only priority"],
        availableDates: [{ id: "p1", start: "2026-05-20", end: "2026-05-24" }]
    },
    {
        id: 3,
        slug: "tokyo-city-adventure",
        title: "Tokyo City Adventure",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOobW2T7eQ4vO3JqZUBU24Gg8abUYmgFUIaXRhpIUwBOLtH2RJmTI0HT568tWda374Yt4LF_YwD0pCPhRAdki8-jCJc4TXN9jlnWh3l6Qy5olr2qL6Kh7Xv2PeWF-NXfbfghAgtp4A0jVLG3mmP5x6HnuR2WzGnYlVKqHi4EDBI-BHM-W15DE_EGRPH1wkH8QlaDlVYYjOBizQlL4y_3Z45IV0yTNcPKS93f0gOG9OmuHLePWJy0Wmec8cEfBWz9C5yl30wl_HlA",
        imageAlt: "Tokyo Neon Street",
        gallery: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAOobW2T7eQ4vO3JqZUBU24Gg8abUYmgFUIaXRhpIUwBOLtH2RJmTI0HT568tWda374Yt4LF_YwD0pCPhRAdki8-jCJc4TXN9jlnWh3l6Qy5olr2qL6Kh7Xv2PeWF-NXfbfghAgtp4A0jVLG3mmP5x6HnuR2WzGnYlVKqHi4EDBI-BHM-W15DE_EGRPH1wkH8QlaDlVYYjOBizQlL4y_3Z45IV0yTNcPKS93f0gOG9OmuHLePWJy0Wmec8cEfBWz9C5yl30wl_HlA",
            "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800"
        ],
        rating: 4.7,
        reviewCount: 560,
        price: 1500,
        originalPrice: 1850,
        location: "Tokyo, Japan",
        duration: "6 Days / 5 Nights",
        description: "Discover the blend of ultramodern and traditional. Includes a food tour and Mt. Fuji day trip.",
        category: 'new',
        tourType: 'City Breaks',
        groupSize: "10-20 Persons",
        difficulty: "Moderate",
        accommodation: 'Capsule Hotel Experience',
        inclusions: ['Meals', 'Transport', 'WiFi', 'JR Pass'],
        exclusions: ['Flight', 'Personal Shopping'],
        highlights: ['Food Tour', 'Mt. Fuji Day Trip', 'Shibuya Crossing'],
        itinerary: [
            { day: 1, title: "Neon Nights", description: "Arrival in Tokyo. Evening exploration of Shinjuku's neon lights.", meals: ["Dinner"] }
        ],
        termsAndConditions: ["Passport required", "Health insurance mandatory"],
        availableDates: [{ id: "t1", start: "2026-09-01", end: "2026-09-07" }]
    },
    {
        id: 4,
        slug: "maldives-luxury-escape",
        title: "Maldives Luxury Escape",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=1000",
        imageAlt: "Maldives Overwater Bungalow",
        gallery: [
            "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=800"
        ],
        rating: 5.0,
        reviewCount: 150,
        price: 2999,
        originalPrice: 4500,
        location: "Male, Maldives",
        duration: "7 Days / 6 Nights",
        description: "Ultimate luxury in an overwater villa. All-inclusive dining, snorkeling, and sunset cruises.",
        category: 'trending',
        tourType: 'Honeymoon',
        groupSize: "2 Persons",
        difficulty: "Easy",
        accommodation: 'Overwater Villa',
        inclusions: ['All meals', 'Transport', 'WiFi', 'Snorkeling'],
        exclusions: ['Airfare'],
        highlights: ['Overwater Villa', 'Sunset Cruise', 'Private Beach'],
        itinerary: [
            { day: 1, title: "Island Paradise", description: "Speedboat transfer to your private island resort.", meals: ["Dinner"] }
        ],
        termsAndConditions: ["Adults only policy applies"],
        availableDates: [{ id: "m1", start: "2026-11-10", end: "2026-11-17" }]
    },
    {
        id: 5,
        slug: "swiss-alps-ski-trip",
        title: "Swiss Alps Ski Trip",
        image: "https://images.unsplash.com/photo-1502901664700-f5670fe4405b?auto=format&fit=crop&q=80&w=1000",
        imageAlt: "Snowy Swiss Alps",
        gallery: [
            "https://images.unsplash.com/photo-1502901664700-f5670fe4405b?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&q=80&w=800"
        ],
        rating: 4.6,
        reviewCount: 210,
        price: 1800,
        originalPrice: 2200,
        location: "Zermatt, Switzerland",
        duration: "5 Days / 4 Nights",
        description: "Ski the best slopes in the world. Includes equipment rental, lift passes, and cozy chalet stay.",
        category: 'new',
        tourType: 'Adventure',
        groupSize: "8-12 Persons",
        difficulty: "Hard",
        accommodation: 'Mountain Chalet',
        inclusions: ['Lift Pass', 'Equipment', 'Guide'],
        exclusions: ['Flight', 'Meals not mentioned'],
        highlights: ['Ski Pass', 'Mountain View', 'Luxury Chalet'],
        itinerary: [
            { day: 1, title: "Summit Check-in", description: "Arrive in Zermatt. Check-in and gear fitting.", meals: ["Dinner"] }
        ],
        termsAndConditions: ["Experience required for certain slopes"],
        availableDates: [{ id: "s1", start: "2026-01-15", end: "2026-01-20" }]
    },
    {
        id: 6,
        slug: "santorini-sunset-tour",
        title: "Santorini Sunset Tour",
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=1000",
        imageAlt: "Santorini Blue Domes",
        gallery: [
            "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800"
        ],
        rating: 4.9,
        reviewCount: 380,
        price: 1100,
        originalPrice: 1450,
        location: "Santorini, Greece",
        duration: "4 Days / 3 Nights",
        description: "Watch the world's most beautiful sunset. Includes wine tasting and boat tour around the caldera.",
        category: 'deals',
        tourType: 'Relaxation',
        groupSize: "15-20 Persons",
        difficulty: "Easy",
        accommodation: 'Cliffside Hotel',
        inclusions: ['Meals', 'Wine Tasting', 'Boat Tour'],
        exclusions: ['Airfare'],
        highlights: ['Caldera Sunset', 'Wine Tasting', 'Boat Tour'],
        itinerary: [
            { day: 1, title: "Aegean Welcome", description: "Transfer to Oia and check-in to your cliffside suite.", meals: ["Dinner"] }
        ],
        termsAndConditions: ["Limited availability for peak season"],
        availableDates: [{ id: "sn1", start: "2026-07-05", end: "2026-07-09" }]
    }
];
