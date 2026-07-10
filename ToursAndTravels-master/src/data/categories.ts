import { Mountain, Heart, Users, Landmark, Camera, Tent, Plane, FerrisWheel } from 'lucide-react';
import type { CategoryProps } from '../types';

export const CATEGORIES: CategoryProps[] = [
    { id: 1, name: "Adventure", icon: Mountain, count: "120+ Tours", color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400" },
    { id: 2, name: "Honeymoon", icon: Heart, count: "85+ Tours", color: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400" },
    { id: 3, name: "Family", icon: Users, count: "200+ Tours", color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" },
    { id: 4, name: "Pilgrimage", icon: Landmark, count: "50+ Tours", color: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400" },
    { id: 5, name: "Wildlife", icon: Camera, count: "60+ Tours", color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400" },
    { id: 6, name: "Camping", icon: Tent, count: "45+ Tours", color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400" },
    { id: 7, name: "International", icon: Plane, count: "300+ Tours", color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400" },
    { id: 8, name: "City Breaks", icon: FerrisWheel, count: "150+ Tours", color: "bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400" },
];
