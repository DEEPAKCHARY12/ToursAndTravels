
import { useTripStore } from '../store/tripStore';
import Step1Destination from '../components/features/trip-builder/Step1Destination';
import Step2Travelers from '../components/features/trip-builder/Step2Travelers';
import Step3Preferences from '../components/features/trip-builder/Step3Preferences';
import Step4Activities from '../components/features/trip-builder/Step4Activities';
import Step5Review from '../components/features/trip-builder/Step5Review';

export default function TripBuilderPage() {
    const { currentStep } = useTripStore();

    switch (currentStep) {
        case 1:
            return <Step1Destination />;
        case 2:
            return <Step2Travelers />;
        case 3:
            return <Step3Preferences />;
        case 4:
            return <Step4Activities />;
        case 5:
            return <Step5Review />;
        default:
            return <Step1Destination />;
    }
}

