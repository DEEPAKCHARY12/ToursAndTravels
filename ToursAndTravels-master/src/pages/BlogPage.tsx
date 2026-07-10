import TravelBlog from '../components/features/home/TravelBlog';

export default function BlogPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen">
            {/* Simple spacer for the sticky header if needed, but RootLayout main handles it */}
            <div className="pt-8">
                <TravelBlog />
            </div>
        </div>
    );
}
