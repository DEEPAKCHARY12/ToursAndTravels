import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItemProps {
    question: string;
    answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden mb-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-4 text-left bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
                <span className="font-semibold text-slate-900 dark:text-white">{question}</span>
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-slate-500" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500" />
                )}
            </button>
            <div
                className={cn(
                    "bg-slate-50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-300 transition-all duration-300 ease-in-out border-t border-slate-200 dark:border-slate-700",
                    isOpen ? "max-h-96 opacity-100 p-4" : "max-h-0 opacity-0 overflow-hidden"
                )}
            >
                <div className="prose dark:prose-invert max-w-none text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: answer }} />
            </div>
        </div>
    );
}
