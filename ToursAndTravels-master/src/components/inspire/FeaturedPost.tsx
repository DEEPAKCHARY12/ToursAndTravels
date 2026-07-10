import { Clock, Bookmark, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { featuredPost } from '../../data/inspireData';

export default function FeaturedPost() {
    return (
        <section className="mb-16 animate-in fade-in duration-700">
            <div className="relative group overflow-hidden rounded-xl bg-white dark:bg-slate-900 shadow-xl border border-primary/5 hover:shadow-2xl hover:shadow-primary/10 transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="h-[400px] lg:h-[500px] overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-500"></div>
                        <img 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                            alt={featuredPost.title} 
                            src={featuredPost.image}
                        />
                    </div>
                    <div className="flex flex-col justify-center p-8 lg:p-16 space-y-6 relative">
                        <div className="flex items-center gap-3">
                            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">Featured Post</span>
                            <span className="text-slate-400 text-xs flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}
                            </span>
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-bold leading-tight text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                            {featuredPost.title}
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                            {featuredPost.excerpt}
                        </p>
                        <div className="flex items-center gap-4 pt-4">
                            <Link to={`/blog/${featuredPost.slug}`} className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all shadow-md active:scale-95 transform flex items-center gap-2">
                                Read More <ArrowRight className="w-4 h-4" />
                            </Link>
                            <button className="p-3 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors">
                                <Bookmark className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
