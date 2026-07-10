import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FeaturedPost from '../../inspire/FeaturedPost';
import CategoryFilters from '../../inspire/CategoryFilters';
import BlogCard from '../../inspire/BlogCard';
import { blogPosts } from '../../../data/inspireData';

export default function TravelBlog() {
    return (
        <section className="max-w-7xl mx-auto px-6 lg:px-20 py-24 border-t border-slate-200 dark:border-slate-800">
             <div className="mb-16 text-center">
                <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">Travel Magazine</span>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Travel Inspiration</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    Discover hidden gems, expert guides, and unforgettable stories from around the globe. curated by our travel experts.
                </p>
             </div>

            <FeaturedPost />
            <CategoryFilters />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 mt-12">
                {blogPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
            
            <div className="flex justify-center">
                 <Link to="/blog" className="group flex items-center gap-2 px-10 py-4 bg-white dark:bg-slate-800 text-primary border-2 border-primary/20 hover:border-primary rounded-xl font-bold transition-all shadow-sm active:scale-95">
                    <span>View All Stories</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </section>
    );
}
