import type { ReactNode } from 'react';
import { Plane, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTripStore } from '../../../store/tripStore';
import { useState } from 'react';

interface TripWizardLayoutProps {
    children: ReactNode;
    title: string;
    subtitle: string;
    prevStep?: () => void;
    nextStep?: () => void;
    isNextDisabled?: boolean;
    nextLabel?: string;
    hideButtons?: boolean;
}

export default function TripWizardLayout({
    children,
    title,
    subtitle,
    prevStep,
    nextStep,
    isNextDisabled = false,
    nextLabel = "Continue",
    hideButtons = false
}: TripWizardLayoutProps) {
    const { tripId, currentStep, destinationId, setTripId, travelers, budget, accommodation, interests, pace } = useTripStore();
    const progress = (currentStep / 5) * 100;
    const [isSaving, setIsSaving] = useState(false);

    const handleSaveDraft = async () => {
        setIsSaving(true);
        try {
            let currentTripId = tripId;
            if (!currentTripId) {
                const res = await fetch('http://localhost:8000/api/trips/start', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' }
                });
                const data = await res.json();
                currentTripId = data.trip_id;
                setTripId(currentTripId as number);
            }

            if (currentTripId) {
                const body: any = { 
                    current_step: currentStep,
                    travelers_adults: travelers.adults,
                    travelers_children: travelers.children,
                    travelers_infants: travelers.infants,
                    budget_per_person: budget,
                    budget_category: budget < 1500 ? 'Economy' : budget < 3500 ? 'Mid-Range' : 'Luxury',
                    accommodation_type: accommodation.length > 0 ? accommodation[0] : null,
                    interests: interests.join(','),
                    travel_pace: pace
                };
                if (destinationId) {
                    body.destination_id = destinationId;
                }
                
                await fetch(`http://localhost:8000/api/trips/${currentTripId}`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                });
                alert("Draft saved successfully!");
            }
        } catch (error) {
            console.error("Failed to save draft", error);
            alert("Failed to save draft.");
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="bg-background-light dark:bg-background-dark font-display antialiased min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark px-6 py-4 flex items-center justify-between sticky top-0 z-10">
                <div className="flex items-center gap-3">
                    <Plane className="text-primary w-8 h-8" />
                    <span className="text-xl font-bold text-text-main dark:text-text-main-dark">TripBuilder</span>
                </div>
                <div className="flex items-center gap-4">
                    <button onClick={handleSaveDraft} disabled={isSaving} className="text-text-sub dark:text-text-sub-dark hover:text-primary transition-colors text-sm font-medium disabled:opacity-50">
                        {isSaving ? "Saving..." : "Save Draft"}
                    </button>
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">JD</div>
                </div>
            </header>

            <main className="flex-1 flex justify-center py-8 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-[800px] flex flex-col gap-6">
                    {/* Progress */}
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-between items-end">
                            <p className="text-text-main dark:text-text-main-dark text-sm font-medium leading-normal">Step {currentStep} of 5</p>
                            <p className="text-text-sub dark:text-text-sub-dark text-xs font-normal">Next: {
                                currentStep === 1 ? 'Travelers' :
                                    currentStep === 2 ? 'Preferences' :
                                        currentStep === 3 ? 'Activities' :
                                            currentStep === 4 ? 'Review' : 'Finish'
                            }</p>
                        </div>
                        <div className="h-2 w-full rounded-full bg-border-light dark:bg-border-dark overflow-hidden">
                            <div
                                className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    </div>

                    {/* Content Card */}
                    <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-6 md:p-10 flex flex-col gap-10">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-text-main dark:text-text-main-dark text-3xl md:text-4xl font-extrabold tracking-tight">{title}</h1>
                            <p className="text-text-sub dark:text-text-sub-dark text-base md:text-lg font-normal">{subtitle}</p>
                        </div>

                        {children}

                        {/* Actions */}
                        {!hideButtons && (
                            <div className="flex items-center justify-between pt-4 mt-2 border-t border-neutral-100 dark:border-neutral-800">
                                {currentStep === 1 ? (
                                    <Link to="/" className="px-6 py-3 rounded-lg text-text-main dark:text-text-main-dark font-medium hover:bg-background-light dark:hover:bg-surface-dark transition-colors flex items-center gap-2">
                                        <ArrowLeft className="w-5 h-5" />
                                        Back to Home
                                    </Link>
                                ) : (
                                    <button onClick={prevStep} className="px-6 py-3 rounded-lg text-text-main dark:text-text-main-dark font-medium hover:bg-background-light dark:hover:bg-surface-dark transition-colors flex items-center gap-2">
                                        <ArrowLeft className="w-5 h-5" />
                                        Back
                                    </button>
                                )}

                                <button
                                    onClick={nextStep}
                                    disabled={isNextDisabled}
                                    className="bg-primary hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-bold shadow-lg shadow-primary/30 transition-all hover:translate-y-[-1px]"
                                >
                                    {nextLabel}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
