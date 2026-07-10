import { useEffect, useState } from 'react';
import { useTripStore } from '../../../store/tripStore';
import { Clock, Star, CheckCircle } from 'lucide-react';
import TripWizardLayout from './TripWizardLayout';

interface Activity {
    id: string;
    name: string;
    category: string;
    image_url: string;
    price: number;
    duration: string;
    rating: number;
}

export default function Step4Activities() {
    const { tripId, interests, selectedActivities, toggleActivity, nextStep, prevStep } = useTripStore();
    const [activities, setActivities] = useState<Activity[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Fetch activities, optionally filtering by selected interests
        const categoryParams = interests.length > 0 ? `?category=${interests.join(',')}` : '';
        fetch(`http://localhost:8000/api/activities${categoryParams}`)
            .then(res => res.json())
            .then(data => setActivities(data))
            .catch(err => console.error("Failed to fetch activities:", err));
    }, [interests]);

    const handleNextStep = async () => {
        if (!tripId) {
            nextStep();
            return;
        }

        setIsLoading(true);
        try {
            const patchRes = await fetch(`http://localhost:8000/api/trips/${tripId}/activities`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    activity_ids: selectedActivities,
                    current_step: 5
                })
            });

            if (!patchRes.ok) {
                const text = await patchRes.text();
                throw new Error(`Patch Trip Activities API Error: ${patchRes.status} ${text}`);
            }

            nextStep();
        } catch (error) {
            console.error("Failed to save activities:", error);
            alert("Error transitioning to the next step. " + (error instanceof Error ? error.message : ""));
        } finally {
            setIsLoading(false);
        }
    };

    const isNextDisabled = isLoading;
    
    // Calculate total price of selected activities
    const totalPrice = activities
        .filter(act => selectedActivities.includes(act.id))
        .reduce((sum, act) => sum + act.price, 0);

    return (
        <TripWizardLayout
            title="Choose Your Adventures"
            subtitle="We've curated these activities based on your interests."
            nextStep={handleNextStep}
            prevStep={prevStep}
            isNextDisabled={isNextDisabled}
        >
            <div className="flex justify-between items-center bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-border-light dark:border-border-dark mb-4">
                <span className="font-medium text-text-main dark:text-text-main-dark">
                    {selectedActivities.length} Activities Selected
                </span>
                <span className="font-bold text-lg text-primary">
                    Total: ${totalPrice}
                </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activities.length === 0 ? (
                    <div className="col-span-full text-center py-10 text-text-sub">
                        No specific activities found for your selected interests. Try selecting more interests in the previous step.
                    </div>
                ) : (
                    activities.map(activity => (
                        <div
                            key={activity.id}
                            onClick={() => toggleActivity(activity.id)}
                            className={`group cursor-pointer rounded-xl border-2 overflow-hidden transition-all hover:shadow-md ${selectedActivities.includes(activity.id)
                                    ? 'border-primary'
                                    : 'border-border-light dark:border-border-dark hover:border-primary/50'
                                }`}
                        >
                            <div className="relative h-40">
                                <img src={activity.image_url} alt={activity.name} className="w-full h-full object-cover" />
                                <div className="absolute top-2 right-2 bg-surface-light/90 dark:bg-surface-dark/90 text-text-main dark:text-text-main-dark text-xs font-bold px-2 py-1 rounded backdrop-blur-sm">
                                    {activity.category}
                                </div>
                                {selectedActivities.includes(activity.id) && (
                                    <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                                        <CheckCircle className="w-12 h-12 text-white drop-shadow-lg" fill="var(--color-primary)" />
                                    </div>
                                )}
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-text-main dark:text-text-main-dark mb-1">{activity.name}</h3>
                                <div className="flex items-center gap-3 text-xs text-text-sub dark:text-text-sub-dark mb-3">
                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {activity.duration}</span>
                                    <span className="flex items-center gap-1"><Star className="w-3 h-3 text-yellow-500 fill-yellow-500" /> {activity.rating}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-lg text-primary">${activity.price}</span>
                                    <span className={`text-xs font-medium px-2 py-1 rounded ${selectedActivities.includes(activity.id) ? 'bg-primary text-white' : 'bg-background-light dark:bg-background-dark text-text-sub'}`}>
                                        {selectedActivities.includes(activity.id) ? 'Selected' : 'Add'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </TripWizardLayout>
    );
}
