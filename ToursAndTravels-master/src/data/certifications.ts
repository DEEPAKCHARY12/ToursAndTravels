import { Award, ShieldCheck, CheckCircle } from 'lucide-react';
import type { CertificationProps } from '../types';

export const CERTIFICATIONS: CertificationProps[] = [
    {
        title: "Best Travel Agency 2023",
        issuer: "World Travel Awards",
        icon: Award,
        color: "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400"
    },
    {
        title: "IATA Accredited",
        issuer: "Certified Partner",
        icon: ShieldCheck,
        color: "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400"
    },
    {
        title: "Sustainable Travel Badge",
        issuer: "Eco-Tourism Board",
        icon: CheckCircle,
        color: "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
    }
];
