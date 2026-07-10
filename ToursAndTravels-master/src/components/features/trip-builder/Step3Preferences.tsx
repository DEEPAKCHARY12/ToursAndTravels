import { useState } from 'react';
import { useTripStore } from '../../../store/tripStore';
import {
    Hotel,
    Home,
    Bed,
    Mountain,
    Landmark,
    Utensils,
    Martini,
    Umbrella,
    ShoppingBag,
    Camera,
    Check
} from 'lucide-react';
import TripWizardLayout from './TripWizardLayout';

export default function Step3Preferences() {
    const {
        tripId,
        budget,
        setBudget,
        accommodation,
        toggleAccommodation,
        interests,
        toggleInterest,
        pace,
        setPace,
        nextStep,
        prevStep
    } = useTripStore();
    
    const [isLoading, setIsLoading] = useState(false);

    const handleNextStep = async () => {
        if (!tripId) {
            nextStep();
            return;
        }

        setIsLoading(true);
        try {
            await fetch(`http://localhost:8000/api/trips/${tripId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    budget_per_person: budget,
                    budget_category: budget < 1500 ? 'Economy' : budget < 3500 ? 'Mid-Range' : 'Luxury',
                    accommodation_type: accommodation.length > 0 ? accommodation[0] : null,
                    interests: interests.join(','),
                    travel_pace: pace,
                    current_step: 4
                })
            });
            nextStep();
        } catch (error) {
            console.error("Failed to save preferences", error);
        } finally {
            setIsLoading(false);
        }
    };

    const isNextDisabled = isLoading || accommodation.length === 0 || interests.length === 0;

    return (
        <TripWizardLayout
            title="Customize Your Experience"
            subtitle="Tell us how you like to travel so we can tailor the perfect itinerary."
            nextStep={handleNextStep}
            prevStep={prevStep}
            isNextDisabled={isNextDisabled}
        >
            {/* Budget Section */}
            <section className="flex flex-col gap-5">
                <div className="flex justify-between items-center">
                    <h2 className="text-text-main dark:text-text-main-dark text-xl font-bold">What is your budget per person?</h2>
                    <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {budget < 1500 ? 'Economy' : budget < 3500 ? 'Mid-Range' : 'Luxury'}
                    </span>
                </div>
                <div className="px-2 pt-6 pb-2">
                    <input
                        type="range"
                        min="500"
                        max="5000"
                        step="100"
                        value={budget}
                        onChange={(e) => setBudget(Number(e.target.value))}
                        className="w-full h-2 bg-border-light dark:bg-border-dark rounded-full appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between mt-4 text-sm text-text-sub dark:text-text-sub-dark font-medium">
                        <span>${budget}</span>
                    </div>
                </div>
            </section>

            <hr className="border-border-light dark:border-border-dark" />

            {/* Accommodation Section */}
            <section className="flex flex-col gap-5">
                <h2 className="text-text-main dark:text-text-main-dark text-xl font-bold">Where do you prefer to stay?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {['Hotel', 'Villa', 'Hostel'].map(type => (
                        <label key={type} className="cursor-pointer group relative">
                            <input
                                type="checkbox"
                                className="peer sr-only"
                                checked={accommodation.includes(type)}
                                onChange={() => toggleAccommodation(type)}
                            />
                            <div className={`h-full rounded-xl border-2 p-4 flex flex-col items-center gap-3 text-center transition-all bg-background-light dark:bg-background-dark/30 hover:border-primary/50 ${accommodation.includes(type) ? 'border-primary bg-primary/5' : 'border-border-light dark:border-border-dark'
                                }`}>
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    {type === 'Hotel' && <Hotel className="w-6 h-6" />}
                                    {type === 'Villa' && <Home className="w-6 h-6" />}
                                    {type === 'Hostel' && <Bed className="w-6 h-6" />}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-text-main dark:text-text-main-dark font-bold">{type}s</span>
                                    <span className="text-text-sub dark:text-text-sub-dark text-xs">
                                        {type === 'Hotel' ? 'Comfort & Service' : type === 'Villa' ? 'Private & Spacious' : 'Social & Budget'}
                                    </span>
                                </div>
                                {accommodation.includes(type) && (
                                    <div className="absolute top-3 right-3 w-5 h-5 bg-primary rounded-full text-white items-center justify-center flex">
                                        <Check className="w-3 h-3" strokeWidth={3} />
                                    </div>
                                )}
                            </div>
                        </label>
                    ))}
                </div>
            </section>

            <hr className="border-border-light dark:border-border-dark" />

            {/* Interests Section */}
            <section className="flex flex-col gap-5">
                <div className="flex justify-between items-end">
                    <h2 className="text-text-main dark:text-text-main-dark text-xl font-bold">What are your interests?</h2>
                    <span className="text-xs text-text-sub dark:text-text-sub-dark">Select all that apply</span>
                </div>
                <div className="flex flex-wrap gap-3">
                    {[
                        { name: 'Adventure', icon: Mountain },
                        { name: 'Culture', icon: Landmark },
                        { name: 'Food', icon: Utensils },
                        { name: 'Nightlife', icon: Martini },
                        { name: 'Relaxation', icon: Umbrella },
                        { name: 'Shopping', icon: ShoppingBag },
                        { name: 'Photography', icon: Camera }
                    ].map(({ name, icon: Icon }) => (
                        <label key={name} className="cursor-pointer">
                            <input
                                type="checkbox"
                                className="peer sr-only"
                                checked={interests.includes(name)}
                                onChange={() => toggleInterest(name)}
                            />
                            <span className={`px-4 py-2 rounded-full border text-sm font-medium transition-all flex items-center gap-2 ${interests.includes(name)
                                    ? 'bg-primary border-primary text-white hover:bg-primary-dark'
                                    : 'border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark/30 text-text-main dark:text-text-main-dark hover:border-primary hover:text-primary'
                                }`}>
                                <Icon className="w-4 h-4" />
                                {name}
                            </span>
                        </label>
                    ))}
                </div>
            </section>

            <hr className="border-border-light dark:border-border-dark" />

            {/* Pace Section */}
            <section className="flex flex-col gap-5">
                <h2 className="text-text-main dark:text-text-main-dark text-xl font-bold">Preferred Travel Pace</h2>
                <div className="bg-background-light dark:bg-background-dark p-1.5 rounded-xl flex flex-col sm:flex-row gap-2 relative">
                    {['Relaxed', 'Moderate', 'Packed'].map(p => (
                        <label key={p} className="flex-1 cursor-pointer relative">
                            <input
                                type="radio"
                                name="pace"
                                className="peer sr-only"
                                checked={pace === p}
                                onChange={() => setPace(p as any)}
                            />
                            <div className={`relative z-10 py-3 px-4 rounded-lg text-center transition-colors ${pace === p ? 'text-primary' : 'text-text-sub dark:text-text-sub-dark hover:text-text-main dark:hover:text-text-main-dark'
                                }`}>
                                <span className="block font-bold text-sm">{p}</span>
                                <span className="block text-xs mt-1 opacity-80">
                                    {p === 'Relaxed' ? '1 major activity/day' : p === 'Moderate' ? '2-3 activities/day' : 'Maximise every hour'}
                                </span>
                            </div>
                            {pace === p && (
                                <div className="absolute inset-0 bg-surface-light dark:bg-surface-dark rounded-lg shadow-sm border border-border-light dark:border-border-dark z-0"></div>
                            )}
                        </label>
                    ))}
                </div>
            </section>
        </TripWizardLayout>
    );
}
