import type { ElementType } from "react";

export interface ItineraryDay {
    day: number;
    title: string;
    description: string;
    meals?: string[];
    activities?: string[];
    transport?: string;
}

export interface AvailableDate {
    id: string;
    start: string;
    end: string;
    priceAdjustment?: number;
}

export interface PackageProps {
    id: number;
    slug: string;
    image: string;
    imageAlt: string;
    gallery: string[];
    videoUrl?: string;
    tour360Url?: string;
    title: string;
    rating: number;
    reviewCount: number;
    price: number;
    originalPrice: number;
    location: string;
    duration: string;
    description: string;
    isBestSeller?: boolean;
    category?: 'trending' | 'new' | 'deals';
    tourType: string;
    groupSize: string;
    difficulty: 'Easy' | 'Moderate' | 'Hard' | 'Extreme';
    accommodation: string;
    inclusions: string[];
    exclusions: string[];
    highlights: string[];
    itinerary: ItineraryDay[];
    termsAndConditions: string[];
    availableDates: AvailableDate[];
}

export interface ReviewProps {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  review: string;
}

export interface FAQItemProps {
  id: number;
  category: string;
  question: string;
  answer: string;
}

export interface StatProps {
  id: number;
  name: string;
  value: string;
  icon: ElementType;
}

export interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface LocationProps {
  city: string;
  address: string;
  phone: string;
  image: string;
}

export interface CertificationProps {
  title: string;
  issuer: string;
  icon: ElementType;
  color: string;
}

export interface CategoryProps {
  id: number;
  name: string;
  icon: ElementType;
  count: string;
  color: string;
}

export interface HotelProps {
  id: number;
  image: string;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  tags: string[];
  price: number;
  originalPrice?: number;
  tax: number;
  perNight?: boolean;
}

export interface RoomAmenity {
  name: string;
  icon?: string;
}

export interface RoomProps {
  id: number;
  name: string;
  image: string;
  size: string;
  bedType: string;
  sleeps: number;
  amenities: string[];
  price: number;
  tax: number;
  originalPrice?: number;
}

export interface HotelPolicyProps {
    checkIn: string;
    checkOut: string;
    cancellation: string;
    rules: {
        icon: string;
        text: string;
    }[];
    paymentMethods: string[];
}

export interface HotelDetailsProps extends HotelProps {
    images: string[];
    description: string;
    amenitiesList: string[];
    rooms: RoomProps[];
    policies: HotelPolicyProps;
    coordinates?: {
        lat: number;
        lng: number;
    };
    reviewsList?: ReviewProps[];
    ratingSummary?: {
        cleanliness: number;
        location: number;
        service: number;
        value: number;
    };
}
