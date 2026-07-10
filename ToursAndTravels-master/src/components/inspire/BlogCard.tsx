import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../../data/inspireData';

export default function BlogCard({ post }: { post: BlogPost }) {
    const path = `/blog/${post.slug}`;

    return (
        <Link to={path} className="group block h-full">
            <article className="h-full bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-primary/5 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-300"></div>
                    <img 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                        alt={post.title} 
                        src={post.image}
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-primary text-xs font-bold rounded-lg shadow-sm z-20">
                        {post.category}
                    </span>
                </div>
                
                <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-slate-400">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" /> {post.readTime}
                        </span>
                    </div>
                    <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors text-slate-900 dark:text-white">
                        {post.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 leading-relaxed">
                        {post.excerpt}
                    </p>
                </div>
            </article>
        </Link>
    );
}
