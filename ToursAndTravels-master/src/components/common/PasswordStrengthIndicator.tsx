import { useMemo } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface PasswordStrengthIndicatorProps {
    password?: string;
}

export default function PasswordStrengthIndicator({ password = '' }: PasswordStrengthIndicatorProps) {
    const strength = useMemo(() => {
        if (!password) return 0;
        let score = 0;
        if (password.length >= 8) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[a-z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;
        
        // Cap score at 4 for UI segments
        return Math.min(score, 4);
    }, [password]);

    const strengthText = useMemo(() => {
        switch (strength) {
            case 0: return 'Too short';
            case 1: return 'Weak';
            case 2: return 'Fair';
            case 3: return 'Good';
            case 4: return 'Strong';
            default: return '';
        }
    }, [strength]);

    const getColorClass = (index: number) => {
        if (index >= strength) return 'bg-slate-200 dark:bg-slate-700';
        
        switch (strength) {
            case 1: return 'bg-red-500';
            case 2: return 'bg-orange-500';
            case 3: return 'bg-yellow-500';
            case 4: return 'bg-green-500';
            default: return 'bg-slate-200';
        }
    };

    return (
        <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500 dark:text-slate-400 font-medium">Strength:</span>
                <span className={cn(
                    "font-bold",
                    strength === 1 && "text-red-500",
                    strength === 2 && "text-orange-500",
                    strength === 3 && "text-yellow-500",
                    strength === 4 && "text-green-500",
                )}>
                    {strengthText}
                </span>
            </div>
            
            <div className="flex gap-1.5 h-1.5">
                {[0, 1, 2, 3].map((index) => (
                    <div 
                        key={index} 
                        className={cn(
                            "flex-1 rounded-full transition-colors duration-300",
                            getColorClass(index + 1)
                        )}
                    />
                ))}
            </div>
        </div>
    );
}
