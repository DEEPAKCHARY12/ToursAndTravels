
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeState {
    theme: 'light' | 'dark';
    currency: string;
    language: string;
    setTheme: (theme: 'light' | 'dark') => void;
    toggleTheme: () => void;
    setCurrency: (currency: string) => void;
    setLanguage: (language: string) => void;
}

export const useThemeStore = create<ThemeState>()(
    persist(
        (set) => ({
            theme: 'light',
            currency: 'USD',
            language: 'en',
            setTheme: (theme) => set({ theme }),
            toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
            setCurrency: (currency) => set({ currency }),
            setLanguage: (language) => set({ language }),
        }),
        {
            name: 'theme-storage',
        }
    )
);
