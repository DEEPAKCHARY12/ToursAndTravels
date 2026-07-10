import { useEffect, useState } from 'react';
import { useTripStore } from '../../../store/tripStore';
import { CheckCircle, Calendar, Users, MapPin, Download, Trash2 } from 'lucide-react';
import TripWizardLayout from './TripWizardLayout';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';

interface Activity {
    id: string;
    name: string;
    price: number;
    image_url: string;
}

interface TripDetails {
    travelers_adults: number;
    travelers_children: number;
    activities: Activity[];
}

export default function Step5Review() {
    const {
        tripId,
        destinationName,
        startDate,
        endDate,
        prevStep,
        resetTrip
    } = useTripStore();

    const navigate = useNavigate();
    const [tripDetails, setTripDetails] = useState<TripDetails | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!tripId) {
            setIsLoading(false);
            return;
        }
        fetch(`http://localhost:8000/api/trips/${tripId}`)
            .then(res => res.json())
            .then(data => {
                setTripDetails(data);
                setIsLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch full trip details", err);
                setIsLoading(false);
            });
    }, [tripId]);

    const handleBooking = async () => {
        if (!tripId) return;
        try {
            await fetch(`http://localhost:8000/api/trips/${tripId}/confirm`, {
                method: 'POST'
            });
            alert('Trip Confirmed & Booked Successfully!');
            resetTrip();
            navigate('/');
        } catch (error) {
            console.error("Failed to confirm trip:", error);
            alert("Error confirming trip.");
        }
    };

    const handleDeleteTrip = async () => {
        if (!tripId) return;
        if (!window.confirm("Are you sure you want to delete this trip? This action cannot be undone.")) return;
        
        try {
            await fetch(`http://localhost:8000/api/trips/${tripId}`, {
                method: 'DELETE'
            });
            alert("Trip deleted.");
            resetTrip();
            navigate('/');
        } catch (err) {
            console.error("Failed to delete trip:", err);
            alert("Error deleting trip.");
        }
    };

    const activitiesList = tripDetails?.activities || [];
    const totalActivityCost = activitiesList.reduce((sum, act) => sum + act.price, 0);
    // Mock base cost calculation
    const adultCount = tripDetails?.travelers_adults || 0;
    const childCount = tripDetails?.travelers_children || 0;
    const baseTripCost = 1200 * adultCount + 600 * childCount;
    const totalCost = baseTripCost + totalActivityCost;

    const generatePDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(22);
        doc.text("Your Trip Itinerary", 20, 20);
        
        doc.setFontSize(14);
        doc.text(`Destination: ${destinationName || 'Not Set'}`, 20, 40);
        doc.text(`Dates: ${startDate || 'TBD'} to ${endDate || 'TBD'}`, 20, 50);
        doc.text(`Travelers: ${adultCount} Adults, ${childCount} Children`, 20, 60);
        
        doc.setFontSize(18);
        doc.text("Cost Breakdown", 20, 80);
        doc.setFontSize(12);
        doc.text(`Flights & Accommodation: $${baseTripCost}`, 20, 95);
        doc.text(`Activities: $${totalActivityCost}`, 20, 105);
        doc.text(`Service Fee: $50`, 20, 115);
        doc.text(`Total Cost: $${totalCost + 50}`, 20, 130);
        
        doc.setFontSize(18);
        doc.text("Selected Activities", 20, 150);
        doc.setFontSize(12);
        let yPos = 165;
        if (activitiesList.length === 0) {
            doc.text("No activities selected.", 20, yPos);
        } else {
            activitiesList.forEach((act, idx) => {
                doc.text(`${idx + 1}. ${act.name} - $${act.price}`, 20, yPos);
                yPos += 10;
            });
        }

        doc.setFontSize(10);
        doc.setTextColor(150);
        doc.text("Your deposit of $200 is fully refundable until 48 hours before the trip.", 20, yPos + 20);
        
        doc.save("Trip_Itinerary.pdf");
    };

    if (isLoading) {
        return (
            <TripWizardLayout title="Review Your Trip" subtitle="Loading..." hideButtons={true}>
                <div className="py-20 text-center">Loading trip details...</div>
            </TripWizardLayout>
        );
    }

    return (
        <TripWizardLayout
            title="Review Your Trip"
            subtitle="Almost there! Review your itinerary details before confirming."
            prevStep={prevStep}
            nextStep={handleBooking}
            nextLabel="Confirm & Book"
        >
            <div className="space-y-6">
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shrink-0">
                        <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-text-main dark:text-text-main-dark mb-1">Trip to {destinationName || 'Destination'}</h2>
                        <div className="flex flex-wrap gap-4 text-sm text-text-sub dark:text-text-sub-dark justify-center md:justify-start">
                            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {startDate} to {endDate}</span>
                            <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {adultCount} Adults, {childCount} Kids</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-border-light dark:border-border-dark rounded-xl p-5">
                        <h3 className="font-bold text-lg mb-4 text-text-main dark:text-text-main-dark">Itinerary Summary</h3>
                        <ul className="space-y-3">
                            <li className="flex justify-between text-sm">
                                <span className="text-text-sub dark:text-text-sub-dark">Flights & Accommodation</span>
                                <span className="font-medium text-text-main dark:text-text-main-dark">${baseTripCost}</span>
                            </li>
                            <li className="flex justify-between text-sm">
                                <span className="text-text-sub dark:text-text-sub-dark">Selected Activities ({activitiesList.length})</span>
                                <span className="font-medium text-text-main dark:text-text-main-dark">${totalActivityCost}</span>
                            </li>
                            <li className="flex justify-between text-sm">
                                <span className="text-text-sub dark:text-text-sub-dark">Service Fee</span>
                                <span className="font-medium text-text-main dark:text-text-main-dark">$50</span>
                            </li>
                            <hr className="border-border-light dark:border-border-dark my-2" />
                            <li className="flex justify-between text-lg font-bold">
                                <span className="text-text-main dark:text-text-main-dark">Total</span>
                                <span className="text-primary">${totalCost + 50}</span>
                            </li>
                        </ul>
                    </div>

                    <div className="border border-border-light dark:border-border-dark rounded-xl p-5">
                        <h3 className="font-bold text-lg mb-4 text-text-main dark:text-text-main-dark">Selected Activities</h3>
                        {activitiesList.length > 0 ? (
                            <div className="space-y-3 max-h-[200px] overflow-y-auto pr-2">
                                {activitiesList.map(act => (
                                    <div key={act.id} className="flex gap-3 items-start">
                                        <img src={act.image_url} alt={act.name} className="w-12 h-12 rounded object-cover shrink-0" />
                                        <div>
                                            <p className="font-medium text-sm text-text-main dark:text-text-main-dark line-clamp-1">{act.name}</p>
                                            <p className="text-xs text-text-sub dark:text-text-sub-dark">${act.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-sm text-text-sub italic">No activities selected.</p>
                        )}
                    </div>
                </div>

                <div className="bg-white dark:bg-background-dark border border-border-light dark:border-border-dark rounded-xl p-4 flex gap-3 text-sm text-text-sub dark:text-text-sub-dark">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                    <p>Your deposit of $200 is fully refundable until 48 hours before the trip. You will receive a confirmation email with all tickets and itineraries.</p>
                </div>

                {/* Additional Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-4 pb-2">
                    <button 
                        onClick={handleDeleteTrip} 
                        className="text-red-500 hover:text-red-600 font-bold flex items-center gap-2 px-4 py-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    >
                        <Trash2 className="w-5 h-5" /> Delete Trip
                    </button>
                    <button 
                        onClick={generatePDF} 
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center gap-2 px-6 py-3 rounded-lg shadow-md transition-all hover:translate-y-[-1px]"
                    >
                        <Download className="w-5 h-5" /> Download PDF
                    </button>
                </div>
            </div>
        </TripWizardLayout>
    );
}
