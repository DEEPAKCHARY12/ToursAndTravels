import { Users, Globe, Award, Smile } from 'lucide-react';
import type { StatProps } from '../types';

export const STATS: StatProps[] = [
    { id: 1, name: 'Happy Travelers', value: '50k+', icon: Smile },
    { id: 2, name: 'Destinations', value: '200+', icon: Globe },
    { id: 3, name: 'Tours Completed', value: '10k+', icon: Users },
    { id: 4, name: 'Awards Won', value: '15', icon: Award },
];
