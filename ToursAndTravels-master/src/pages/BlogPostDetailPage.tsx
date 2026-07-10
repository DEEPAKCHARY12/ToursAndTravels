import { 
    ChevronRight, 
    Calendar, 
    Clock, 
    Share2, 
    Facebook, 
    Twitter, 
    Link2, 
    Lightbulb, 
    ArrowRight, 
    ThumbsUp,
    MessageCircle,
    Send,
    Palmtree
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogPostDetailPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Breadcrumbs & Header */}
                <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
                    <Link className="hover:text-primary transition-colors" to="/">Home</Link>
                    <ChevronRight className="w-3 h-3" />
                    <Link className="hover:text-primary transition-colors" to="/blog">Blog</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-slate-900 dark:text-white font-medium">Hidden Gems of Goa</span>
                </nav>

                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">Travel Tips</span>
                        <span className="text-slate-400 text-sm flex items-center gap-1">
                            <Calendar className="w-4 h-4" /> Feb 12, 2026
                        </span>
                        <span className="text-slate-400 text-sm flex items-center gap-1">
                            <Clock className="w-4 h-4" /> 8 min read
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
                        Exploring the Hidden Gems of Goa: A Guide to the Best Secret Beaches
                    </h1>
                    <div className="flex items-center gap-4">
                        <img 
                            className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-slate-800 shadow-sm" 
                            alt="Portrait of Elena Rodriguez" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNc79en4KrqQjRSj10qjUKwEAxL3o_7EhvH-kkFCk4yYWgcbt77sftEdASucO3BUl_1HucSWVJ-DSyBr7EVFNsqLX2UYrU0kG5IRb2qtl7muzm05hMuLBLgkS6c62zdK87zaiMnEElg9q6y7Inf8vFycJS0q4PqGyzD8UwwfClN3tQN_pW4Tmrhtf8O8HJzRs_R0N06XzT38sy9AeNO08JSX1spPIjTpc_rW19uFwlZX70Sd_Rb_3X0Xxz_yK9I049l0RZf5Af5_4"
                        />
                        <div>
                            <p className="text-slate-900 dark:text-white font-bold">Elena Rodriguez</p>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">Adventure Seeker & Coastal Explorer</p>
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-xl">
                    <img 
                        className="w-full h-full object-cover" 
                        alt="A secluded tropical beach with turquoise water and palm trees" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGMfO_WerwL_YVphlb2lqZJe6qSCFqBYvbehAGBHNmNrb_Xm9jd_x67XEF56CEv3hbRm7DOspQ1-hfKVKj72G9z-GXmdLRjOXptdp00yjzF4QpNNUsc8eSYQeMQ1e-hpOu7d_o8ELPlv499jkTbjGfE19GBV7mBwwJp5DGqchJccFy4e40_gzt4mODEzg21RqFwQWu8Cf6j0LCLNdm6yoqdBw27dhy9fD1ZbEO-LvJmJ-VFki6HzUnFAqoehBpxvWyL6pruw1zbxU"
                    />
                </div>

                {/* Content Layout */}
                <div className="grid grid-cols-12 gap-12">
                    {/* Left Sidebar: Social Share */}
                    <aside className="hidden lg:block lg:col-span-1">
                        <div className="sticky top-24 flex flex-col items-center gap-4">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest vertical-rl rotate-180 mb-2">Share</p>
                            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary hover:text-white transition-all text-slate-600 dark:text-slate-400">
                                <Share2 className="w-5 h-5" />
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-[#1877F2] hover:text-white transition-all text-slate-600 dark:text-slate-400">
                                <Facebook className="w-5 h-5" />
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-black hover:text-white transition-all text-slate-600 dark:text-slate-400">
                                <Twitter className="w-5 h-5" />
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-[#0A66C2] hover:text-white transition-all text-slate-600 dark:text-slate-400">
                                <Link2 className="w-5 h-5" />
                            </button>
                        </div>
                    </aside>

                    {/* Main Content Body */}
                    <article className="col-span-12 lg:col-span-7 prose prose-slate dark:prose-invert max-w-none">
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                            While North Goa buzzes with nightlife and South Goa offers serene luxury, there's a third Goa waiting to be discovered. Far from the crowded shacks of Baga and Calangute lie secluded strips of white sand where the only sound you'll hear is the rhythm of the Arabian Sea.
                        </p>
                        
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-10 mb-6">The Untouched Paradise of Butterfly Beach</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                            Hidden between two hills, Butterfly Beach is one of the most secluded spots in all of India. Accessible only by a boat ride from Palolem or a rigorous trek through dense jungle, this crescent-shaped beach is a haven for those seeking solitude.
                        </p>
                        
                        <div className="my-10 rounded-xl overflow-hidden shadow-md">
                            <img 
                                className="w-full h-auto" 
                                alt="A small hidden bay with golden sand and clear blue water" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdQHbXcAukBNClmDUBPlr4myybiBFFZX_ylDGZid_dVAbB_Qf0RGg3n1I8o2CU0p-FZgXDvTn1sjE4il2XRKQMSO6ghLGlKkIXXJ6yQIsQhe6bNE1oYorgZhidTUJ4eUegxp6KsgUFphJ55vE5Ino2oVAxGabOMzVOwMrrbqFILNKUtiEJHraCXq9P50h93lD7frJJwbNpy4Rmqb1eityReJ8wrYNuRxQAu7B0yW0Hr64ZzwEfmT8Bfv2tk2ssj0aeGTeP8AyBK6Y"
                            />
                            <p className="bg-slate-50 dark:bg-slate-800 p-4 text-xs text-center text-slate-500 dark:text-slate-400 italic">Butterfly Beach: Nature's own private sanctuary.</p>
                        </div>
                        
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                            During low tide, you can spot millions of butterflies swarming the blossoming flowers on the hillside, giving the beach its name. Keep your eyes peeled for dolphins dancing in the distance—the waters here are known to be their playground.
                        </p>
                        
                        <blockquote className="border-l-4 border-primary pl-6 py-2 my-10 italic text-xl text-slate-700 dark:text-slate-300 bg-primary/5 rounded-r-lg">
                            "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes." — Marcel Proust
                        </blockquote>
                        
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-10 mb-6">Cola Beach: Where the Lagoon Meets the Sea</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                            What makes Cola Beach extraordinary is its freshwater lagoon. Just steps away from the crashing salty waves, a calm emerald-green river flows silently, shaded by towering coconut palms. It's the perfect spot for a refreshing dip after a long afternoon in the sun.
                        </p>
                        
                        <div className="bg-primary/5 p-8 rounded-xl border-l-4 border-primary my-10 shadow-sm">
                            <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                                <Lightbulb className="w-5 h-5 text-primary" /> Pro Travel Tip
                            </h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300 m-0 leading-relaxed">
                                Rent a scooter to reach the cliff overlooking Cola Beach. The road is rocky, so drive slowly, but the panoramic view from the top is worth every bump.
                            </p>
                        </div>

                        {/* Tags */}
                        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2">
                            {['#goa', '#beaches', '#budgettravel', '#india'].map(tag => (
                                <Link 
                                    key={tag} 
                                    to="#" 
                                    className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-primary hover:text-white rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 transition-all shrink-0"
                                >
                                    {tag}
                                </Link>
                            ))}
                        </div>
                    </article>

                    {/* Right Sidebar: TOC & Packages */}
                    <aside className="col-span-12 lg:col-span-4 space-y-8">
                        <div className="sticky top-24 space-y-8">
                            {/* Table of Contents */}
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6">Table of Contents</h3>
                                <nav className="space-y-4">
                                    {[
                                        { label: 'Introduction', active: true },
                                        { label: 'Butterfly Beach', active: false },
                                        { label: 'Cola Beach & Lagoon', active: false },
                                        { label: 'Galgibaga Beach', active: false },
                                        { label: 'Best Time to Visit', active: false }
                                    ].map((item) => (
                                        <a 
                                            key={item.label} 
                                            href="#" 
                                            className={`block text-sm font-medium transition-colors pl-4 border-l-2 ${
                                                item.active 
                                                ? 'text-primary border-primary font-bold' 
                                                : 'text-slate-600 dark:text-slate-400 border-transparent hover:text-primary hover:border-primary/30'
                                            }`}
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>

                            {/* Related Package Widget */}
                            <div className="bg-primary rounded-2xl p-6 text-white shadow-lg overflow-hidden relative group">
                                <div className="relative z-10">
                                    <span className="bg-white/20 backdrop-blur-md text-[10px] font-bold px-2 py-1 rounded uppercase mb-4 inline-block">Special Offer</span>
                                    <h3 className="text-xl font-bold mb-2">Luxury Goa Escape</h3>
                                    <p className="text-white/80 text-sm mb-6 leading-relaxed">4 Nights at Taj Exotica Resort & Spa with private beach access.</p>
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="text-2xl font-bold">$799 <span className="text-xs font-normal opacity-75">/ person</span></span>
                                        <span className="text-sm line-through opacity-60">$950</span>
                                    </div>
                                    <button className="w-full py-4 bg-white text-primary font-bold rounded-xl hover:bg-slate-100 transition-all active:scale-95 shadow-lg">
                                        View Deal
                                    </button>
                                </div>
                                <div className="absolute -right-8 -bottom-8 opacity-10 transition-transform group-hover:scale-110 duration-500">
                                    <Palmtree className="w-[180px] h-[180px]" />
                                </div>
                            </div>

                            {/* Newsletter Mini */}
                            <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-6">
                                <h3 className="font-bold text-slate-900 dark:text-white mb-2">Weekly Inspiration</h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">Join 20,000+ travelers getting weekly secret destinations.</p>
                                <div className="space-y-3">
                                    <input 
                                        className="w-full rounded-xl border-none bg-white dark:bg-slate-900 text-sm py-3 px-4 focus:ring-2 focus:ring-primary/20 transition-all" 
                                        placeholder="Email address" 
                                        type="email"
                                    />
                                    <button className="w-full bg-slate-900 dark:bg-primary text-white text-sm font-bold py-3 rounded-xl hover:opacity-90 transition-all active:scale-95 shadow-md">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Related Posts Section */}
                <section className="mt-24 pt-16 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex items-center justify-between mb-10 overflow-hidden">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">You might also like</h2>
                        <Link to="/blog" className="text-primary font-bold flex items-center gap-2 hover:underline group shrink-0">
                            View all posts <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkWtNehFv2ELp2yGbOruWsGE3nRYBubwOAxdK6yM5XBFtbaZdn4NnyQooDHSAOQeafkV_MbKfsy4SvsUs1Jp03ujnn_zINXv72UPJJBpcXSlLxxbxreUiCgWDKa5LzahdqZ7pw8rN3bHdXE4iQ6TFin-wiB_iu5ASV0Nix7QCoZq8piHZZNcy6RsBOXmTDuKm0NBBJimfhe-ndxDwstRhajHYTUIhU5L7DLVahF0l7_jk6mhsZ0Xf-m-a-CI2xeUTwKw5K_6zFCqo",
                                category: "Hotels",
                                title: "10 Luxury Resorts in South Goa for Every Budget",
                                date: "Jan 15, 2026",
                                readTime: "5 min read"
                            },
                            {
                                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYJFc3hetTtvCwIBRRFPe-3t4xkFTiDF2B7qECsbhZC6mJK03K5zuRylPbPqq1aGDIZxhucxKVx9ruVW67-6DVp3X0FSverUxAlQdoW8c0k3G8IeoKc4LM-xgrUEJ99c_x2qNsM3G3Sl_jUwIj6AOEQRClA95339GF9-pixlXsteQFnj9HqeliFCHbrT6LkOZ3AH2eujUn_xQMS175PsD-STNqXwBa-w06IifQ-FGECx3p1Q9jCLl4F5oesKDMHlvW_pezuXVQXCM",
                                category: "Food & Culture",
                                title: "The Ultimate Foodie Guide to Traditional Goan Cuisine",
                                date: "Jan 28, 2026",
                                readTime: "12 min read"
                            },
                            {
                                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVte2Izue7nfzYAzlmYvLU3CG7JIqdD7OVLnnbTN7OX-NJ4Y4UEyJjG_5_T-JpyhmFm2Gcp2Z1w9YosBwZ9EUkBD5W5Sq9MYUC2U6rauGXUhGcG2VleDYVW9EtL4czyGs0f9Rt8yHAtk_dwYzUZ4Jsj6oEkh_daOhaCL_YwjSZXOcecRf0swSeEZLAETJcJ6IPYuz3YTUaxEXZeCHtMpCSs2XfG7DRIlwx23tWlnpVlAsUxQNSh65HkN7z2wQlMwfzpwVe0D14Muk",
                                category: "Adventure",
                                title: "Road Tripping from Mumbai to Goa: The Konkan Route",
                                date: "Feb 02, 2026",
                                readTime: "15 min read"
                            }
                        ].map((post, idx) => (
                            <div key={idx} className="group cursor-pointer">
                                <div className="aspect-video rounded-2xl overflow-hidden mb-6 shadow-sm border border-slate-200 dark:border-slate-800">
                                    <img 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                                        alt={post.title} 
                                        src={post.img} 
                                    />
                                </div>
                                <span className="text-primary text-[10px] font-bold uppercase tracking-widest">{post.category}</span>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-3 group-hover:text-primary transition-colors leading-tight">{post.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm mt-3">{post.date} • {post.readTime}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Comments Section */}
                <section className="max-w-3xl mx-auto mt-24 pt-16 border-t border-slate-200 dark:border-slate-800">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-3">
                        Comments <span className="text-slate-400 font-normal text-xl">(14)</span>
                    </h2>
                    
                    <div className="flex gap-4 mb-14 bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl">
                        <img 
                            className="w-12 h-12 rounded-full bg-slate-200 object-cover shrink-0" 
                            alt="Your avatar" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6KDh6ASwHIFaO5YvPKdjGm3lDUMEQn8PXsIPK-n-fMjGutQA-owi9PUyNRvurkkNzCmnyFJpIZC4DvhMy6iiinaTaAu8Pa2s0LSzDyXHZYJNR32iqc_x2oVUiWYmIpMbo5oPlazExFe1ZHdWFCJS0xevtqIKAnoi5HJ1T9606JPEYb14EAAm4o430XDU7nhNorF8ocxfe9UnTUZH54vfA3BqIe_FHrW1fRvLmHLG34SZl39qvMTiQ9LSabAI4w_76JNe3AeHv99A" 
                        />
                        <div className="flex-1">
                            <textarea 
                                className="w-full rounded-xl border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-primary focus:border-primary p-4 h-32 resize-none text-sm" 
                                placeholder="Join the discussion..."
                            ></textarea>
                            <div className="mt-4 flex justify-end">
                                <button className="flex items-center gap-2 bg-primary text-white font-bold py-3 px-8 rounded-xl hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-primary/20">
                                    <Send className="w-4 h-4" /> Post Comment
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-10">
                        {/* Comment 1 */}
                        <div className="flex gap-4 group">
                            <img 
                                className="w-12 h-12 rounded-full object-cover shrink-0" 
                                alt="Marcus Thorne" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqm1FEOIkzLF4gBI7WAX-QSYHOrMA-rJ1IQNaW2h0xgJQ0860roqm6NAEFu1qZo8ck6P2DqQ_JFcxGCph24fYHV_zQT0S_jL6K9hi5DeTkTY4YjUmu7lIfcf6Kwr1l3bIAmunBIG8ILAhmCw35m_2zmQaHMcX6PUbh7-Xb7IAlG7qRtb4GFkDW2Y4PwnV2ddiYfd6sOz_vPywMzHKgoBGfNsOn1vmd7YE1WY9kMC6hPlrkBdKr6Z0XrPNXEmav44Y0D_3Kq-1KNhE" 
                            />
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="font-bold text-slate-900 dark:text-white">Marcus Thorne</span>
                                    <span className="text-xs text-slate-400">2 days ago</span>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                                    Amazing guide! I visited Butterfly Beach last year and it was the highlight of my trip. The trek is definitely worth it, but make sure to bring plenty of water as there are no shacks there!
                                </p>
                                <div className="flex items-center gap-6 text-xs font-bold text-slate-400 dark:text-slate-500">
                                    <button className="hover:text-primary transition-colors flex items-center gap-1.5">
                                        <MessageCircle className="w-4 h-4" /> Reply
                                    </button>
                                    <button className="hover:text-primary transition-colors flex items-center gap-1.5">
                                        <ThumbsUp className="w-4 h-4" /> 12
                                    </button>
                                </div>
                                
                                {/* Reply */}
                                <div className="mt-8 flex gap-4 pl-8 border-l-2 border-slate-100 dark:border-slate-800">
                                    <img 
                                        className="w-10 h-10 rounded-full object-cover shrink-0" 
                                        alt="Sarah Jenkins" 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxUnioabp7tw9IwC1RnD1xiafbOXhorFjkXtQjoIVGtrdAQvlf3wywVCVIOU4MAFWwSLJAa6FZYMADqlIHkdz1qjwurcfUIWN-umOCd7appnjcOfKOvvobF_Fu7gmIBenFIlj2_QHlPbonupAsWhJ-BKmhtMIbOJeZieNcso8yOQQ0HhJqaBHlZJxcpquiJ7qTIW_ZvfDcVIYA45qG2s1aaxUVfcPM8nKD-WPUej561BnuhG9332YDFIu5z5UPDBVDeS6ggf0NhTM" 
                                    />
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="font-bold text-slate-900 dark:text-white">Sarah Jenkins</span>
                                            <span className="text-xs text-slate-400">1 day ago</span>
                                        </div>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                                            Totally agree with Marcus. Also, try to leave before sunset if you're trekking back, the jungle path can get tricky in the dark!
                                        </p>
                                        <div className="flex items-center gap-6 text-xs font-bold text-slate-400">
                                            <button className="hover:text-primary transition-colors">Reply</button>
                                            <button className="hover:text-primary transition-colors flex items-center gap-1.5">
                                                <ThumbsUp className="w-4 h-4" /> 3
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-14 text-center">
                        <button className="text-sm font-bold text-primary hover:underline hover:text-primary/80 transition-all">
                            Load more comments
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}
