import { useEffect, useState } from 'react';
import { useTripStore } from '../../../store/tripStore';
import { Calendar } from 'lucide-react';
import TripWizardLayout from './TripWizardLayout';

interface Destination {
    id: number;
    name: string;
    description: string;
    image_url: string;
}

export default function Step1Destination() {
    const {
        tripId,
        destinationId,
        startDate,
        endDate,
        setTripId,
        setDestination,
        setDates,
        nextStep
    } = useTripStore();

    const [destinations, setDestinations] = useState<Destination[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetch('http://localhost:8000/api/destinations')
            .then(res => res.json())
            .then(data => setDestinations(data))
            .catch(err => console.error("Failed to fetch destinations", err));
    }, []);

    const handleNextStep = async () => {
        setIsLoading(true);
        try {
            let currentTripId = tripId;
            if (!currentTripId) {
                // start trip
                const res = await fetch('http://localhost:8000/api/trips/start', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' }
                });
                if (!res.ok) {
                    const text = await res.text();
                    throw new Error(`Start Trip API Error: ${res.status} ${text}`);
                }
                const data = await res.json();
                currentTripId = data.trip_id;
                setTripId(currentTripId as number);
            }

            // save destination
            const patchRes = await fetch(`http://localhost:8000/api/trips/${currentTripId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    destination_id: destinationId,
                    current_step: 2
                })
            });
            if (!patchRes.ok) {
                const text = await patchRes.text();
                throw new Error(`Patch Trip API Error: ${patchRes.status} ${text}`);
            }

            nextStep();
        } catch (error) {
            console.error("Failed to save draft and transition:", error);
            alert("Error transitioning to the next step. " + (error instanceof Error ? error.message : ""));
        } finally {
            setIsLoading(false);
        }
    };

    const isNextDisabled = !destinationId || !startDate || !endDate || isLoading;

    return (
        <TripWizardLayout
            title="Where to next?"
            subtitle="Start by choosing your dream destination and travel dates."
            nextStep={handleNextStep}
            isNextDisabled={isNextDisabled}
        >
            <section className="flex flex-col gap-6">
                <div>
                    <label className="block text-sm font-bold text-text-main dark:text-text-main-dark mb-2">
                        Select Destination
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {destinations.map(dest => (
                            <div
                                key={dest.id}
                                onClick={() => setDestination(dest.id, dest.name)}
                                className={`cursor-pointer rounded-xl border-2 p-3 flex gap-3 items-center transition-all hover:shadow-md ${destinationId === dest.id
                                        ? 'border-primary bg-primary/5'
                                        : 'border-border-light dark:border-border-dark hover:border-primary/50'
                                    }`}
                            >
                                <img src={dest.image_url} alt={dest.name} className="w-16 h-16 rounded-lg object-cover" />
                                <div>
                                    <h3 className="font-bold text-text-main dark:text-text-main-dark">{dest.name}</h3>
                                    <p className="text-xs text-text-sub dark:text-text-sub-dark line-clamp-1">{dest.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-bold text-text-main dark:text-text-main-dark mb-2">
                            Start Date
                        </label>
                        <div className="relative">
                            <input
                                type="date"
                                className="w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-3 pl-10 focus:ring-primary focus:border-primary dark:text-white"
                                value={startDate || ''}
                                onChange={(e) => setDates(e.target.value, endDate)}
                            />
                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-sub" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-text-main dark:text-text-main-dark mb-2">
                            End Date
                        </label>
                        <div className="relative">
                            <input
                                type="date"
                                className="w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-3 pl-10 focus:ring-primary focus:border-primary dark:text-white"
                                value={endDate || ''}
                                onChange={(e) => setDates(startDate, e.target.value)}
                            />
                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-sub" />
                        </div>
                    </div>
                </div>
            </section>
        </TripWizardLayout>
    );
}
