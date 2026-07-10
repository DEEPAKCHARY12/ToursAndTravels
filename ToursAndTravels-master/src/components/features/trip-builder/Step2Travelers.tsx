import { useState } from 'react';
import { useTripStore } from '../../../store/tripStore';
import { Users, Baby } from 'lucide-react';
import TripWizardLayout from './TripWizardLayout';

export default function Step2Travelers() {
    const { tripId, travelers, setTravelers, nextStep, prevStep } = useTripStore();
    const [isLoading, setIsLoading] = useState(false);

    const increment = (type: 'adults' | 'children' | 'infants') => {
        setTravelers(type, travelers[type] + 1);
    };

    const decrement = (type: 'adults' | 'children' | 'infants') => {
        if (travelers[type] > 0) {
            setTravelers(type, travelers[type] - 1);
        }
    };

    const handleNextStep = async () => {
        if (!tripId) {
            nextStep(); // Fallback if no tripId somehow
            return;
        }
        
        setIsLoading(true);
        try {
            await fetch(`http://localhost:8000/api/trips/${tripId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    travelers_adults: travelers.adults,
                    travelers_children: travelers.children,
                    travelers_infants: travelers.infants,
                    current_step: 3
                })
            });
            nextStep();
        } catch (error) {
            console.error("Failed to save travelers", error);
        } finally {
            setIsLoading(false);
        }
    };

    // Ensure at least 1 adult
    const isNextDisabled = travelers.adults < 1 || isLoading;

    return (
        <TripWizardLayout
            title="Who is traveling?"
            subtitle="Add the number of travelers for this trip."
            nextStep={handleNextStep}
            prevStep={prevStep}
            isNextDisabled={isNextDisabled}
        >
            <section className="flex flex-col gap-6">
                <div className="flex items-center justify-between p-4 rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark/30">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <Users className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-text-main dark:text-text-main-dark text-lg">Adults</h3>
                            <p className="text-sm text-text-sub dark:text-text-sub-dark">Age 13+</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => decrement('adults')}
                            disabled={travelers.adults <= 1}
                            className="w-10 h-10 rounded-full border border-border-light dark:border-border-dark flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-700 disabled:opacity-50 transition-colors"
                        >-</button>
                        <span className="font-bold text-xl w-6 text-center text-text-main dark:text-text-main-dark">{travelers.adults}</span>
                        <button
                            onClick={() => increment('adults')}
                            className="w-10 h-10 rounded-full border border-border-light dark:border-border-dark flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                        >+</button>
                    </div>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark/30">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <Baby className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-text-main dark:text-text-main-dark text-lg">Children</h3>
                            <p className="text-sm text-text-sub dark:text-text-sub-dark">Ages 2-12</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => decrement('children')}
                            className="w-10 h-10 rounded-full border border-border-light dark:border-border-dark flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                        >-</button>
                        <span className="font-bold text-xl w-6 text-center text-text-main dark:text-text-main-dark">{travelers.children}</span>
                        <button
                            onClick={() => increment('children')}
                            className="w-10 h-10 rounded-full border border-border-light dark:border-border-dark flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                        >+</button>
                    </div>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark/30">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <Baby className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-text-main dark:text-text-main-dark text-lg">Infants</h3>
                            <p className="text-sm text-text-sub dark:text-text-sub-dark">Under 2</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => decrement('infants')}
                            className="w-10 h-10 rounded-full border border-border-light dark:border-border-dark flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                        >-</button>
                        <span className="font-bold text-xl w-6 text-center text-text-main dark:text-text-main-dark">{travelers.infants}</span>
                        <button
                            onClick={() => increment('infants')}
                            className="w-10 h-10 rounded-full border border-border-light dark:border-border-dark flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                        >+</button>
                    </div>
                </div>
            </section>
        </TripWizardLayout>
    );
}
