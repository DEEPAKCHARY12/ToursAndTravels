
import { create } from 'zustand';

export interface TripState {
    tripId: number | null;
    currentStep: number;
    destinationId: number | null;
    destinationName: string | null;
    startDate: string | null;
    endDate: string | null;
    travelers: {
        adults: number;
        children: number;
        infants: number;
    };
    budget: number;
    accommodation: string[]; // 'Hotel', 'Villa', 'Hostel'
    interests: string[]; // 'Adventure', 'Culture', etc.
    pace: 'Relaxed' | 'Moderate' | 'Packed';
    selectedActivities: string[]; // Activity IDs

    // Actions
    setTripId: (id: number) => void;
    setDestination: (id: number, name: string) => void;
    setDates: (start: string | null, end: string | null) => void;
    setTravelers: (type: 'adults' | 'children' | 'infants', value: number) => void;
    setBudget: (budget: number) => void;
    toggleAccommodation: (type: string) => void;
    toggleInterest: (interest: string) => void;
    setPace: (pace: 'Relaxed' | 'Moderate' | 'Packed') => void;
    toggleActivity: (activityId: string) => void;
    nextStep: () => void;
    prevStep: () => void;
    goToStep: (step: number) => void;
    resetTrip: () => void;
}

export const useTripStore = create<TripState>((set) => ({
    tripId: null,
    currentStep: 1,
    destinationId: null,
    destinationName: null,
    startDate: null,
    endDate: null,
    travelers: {
        adults: 2,
        children: 0,
        infants: 0
    },
    budget: 2500,
    accommodation: ['Hotel'],
    interests: ['Culture', 'Food'],
    pace: 'Moderate',
    selectedActivities: [],

    setTripId: (id) => set({ tripId: id }),
    setDestination: (id, name) => set({ destinationId: id, destinationName: name }),
    setDates: (start, end) => set({ startDate: start, endDate: end }),
    setTravelers: (type, value) => set((state) => ({
        travelers: { ...state.travelers, [type]: value }
    })),
    setBudget: (budget) => set({ budget }),
    toggleAccommodation: (type) => set({
        accommodation: [type]
    }),
    toggleInterest: (interest) => set((state) => {
        const isOpen = state.interests.includes(interest);
        return {
            interests: isOpen
                ? state.interests.filter(i => i !== interest)
                : [...state.interests, interest]
        };
    }),
    setPace: (pace) => set({ pace }),
    toggleActivity: (activityId) => set((state) => {
        const isSelected = state.selectedActivities.includes(activityId);
        return {
            selectedActivities: isSelected
                ? state.selectedActivities.filter(id => id !== activityId)
                : [...state.selectedActivities, activityId]
        };
    }),
    nextStep: () => set((state) => ({ currentStep: Math.min(state.currentStep + 1, 5) })),
    prevStep: () => set((state) => ({ currentStep: Math.max(state.currentStep - 1, 1) })),
    goToStep: (step) => set({ currentStep: step }),
    resetTrip: () => set({
        tripId: null,
        currentStep: 1,
        destinationId: null,
        destinationName: null,
        startDate: null,
        endDate: null,
        travelers: { adults: 2, children: 0, infants: 0 },
        budget: 2500,
        accommodation: ['Hotel'],
        interests: ['Culture', 'Food'],
        pace: 'Moderate',
        selectedActivities: []
    })
}));
