
import Hero from '../components/features/home/Hero';
import SearchForm from '../components/common/SearchForm';
import PopularDestinations from '../components/features/home/PopularDestinations';
import TrendingPackages from '../components/features/home/TrendingPackages';
import TourCategories from '../components/features/home/TourCategories';
import SpecialOffers from '../components/features/home/SpecialOffers';
import ValueProps from '../components/features/home/ValueProps';
import CustomerReviews from '../components/common/CustomerReviews';
import TravelBlog from '../components/features/home/TravelBlog';
import Newsletter from '../components/inspire/Newsletter';

export default function HomePage() {
    return (
        <>
            {/* Hero Section with overlapping SearchForm */}
            <div className="relative pb-24 sm:pb-32">
                <Hero />
                <SearchForm />
            </div>

            <PopularDestinations />
            <TrendingPackages />
            <TourCategories />
            <SpecialOffers />
            <ValueProps />
            <CustomerReviews />
            <TravelBlog />
            <Newsletter />
        </>
    );
}
