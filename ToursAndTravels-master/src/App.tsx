
import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout.tsx';
import HomePage from './pages/HomePage.tsx';
import FAQPage from './pages/FAQPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import ConfirmationPage from './pages/ConfirmationPage.tsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.tsx';
import TermsOfServicePage from './pages/TermsOfServicePage.tsx';
import FlightSearchResultsPage from './pages/FlightSearchResultsPage.tsx';
import TripBuilderPage from './pages/TripBuilderPage.tsx';
import SettingsPage from './pages/SettingsPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import RegisterPage from './pages/RegisterPage.tsx';
import ForgotPasswordPage from './pages/ForgotPasswordPage.tsx';
import PackagesPage from './pages/PackagesPage.tsx';
import PackageDetailsPage from './pages/PackageDetailsPage.tsx';
import CheckoutPage from './pages/CheckoutPage.tsx';
import HotelSearchResultsPage from './pages/HotelSearchResultsPage.tsx';
import BlogPage from './pages/BlogPage.tsx';
import HotelDetailsPage from './pages/HotelDetailsPage.tsx';
import BlogPostDetailPage from './pages/BlogPostDetailPage.tsx';
import ResetPasswordPage from './pages/ResetPasswordPage.tsx';
import ScrollToTop from './components/common/ScrollToTop.tsx';
import { useThemeStore } from './store/themeStore.ts';
import { useEffect } from 'react';

function App() {
  const { theme } = useThemeStore();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Handle system preference on first load if no theme is set (optional, but good UX)
  // For now, we rely on the store's default 'light' or persisted value.

  return (
    <>
      <ScrollToTop />
      <Routes>

        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/flights" element={<FlightSearchResultsPage />} />
          <Route path="/dashboard/settings" element={<SettingsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/packages/type/:category" element={<PackagesPage />} />
          <Route path="/packages/:slug" element={<PackageDetailsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/hotels" element={<HotelSearchResultsPage />} />
          <Route path="/hotels/:id" element={<HotelDetailsPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/blog/:slug" element={<BlogPostDetailPage />} />
          {/* Add more routes here as needed */}
        </Route>

        <Route path="/trip-builder" element={<TripBuilderPage />} />
      </Routes>
    </>

  );
}

export default App;
