
export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    date: string;
    readTime: string;
    slug: string;
}

export const featuredPost: BlogPost = {
    id: 'goa-1',
    title: 'Exploring the Hidden Gems of Goa',
    excerpt: 'Beyond the crowded beaches of Baga and Calangute lies a different world—a Goa of sleepy villages, white-washed churches, and secret spice plantations.',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200',
    category: 'Destinations',
    date: 'May 20, 2024',
    readTime: '8 min read',
    slug: 'hidden-gems-goa'
};

export const blogPosts: BlogPost[] = [
    {
        id: 'goa-1',
        title: 'Exploring the Hidden Gems of Goa',
        excerpt: 'Beyond the crowded beaches of Baga and Calangute lies a different world—a Goa of sleepy villages, white-washed churches, and secret spice plantations.',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200',
        category: 'Destinations',
        date: 'May 20, 2024',
        readTime: '8 min read',
        slug: 'hidden-gems-goa'
    },
    {
        id: '1',
        title: '10 Essential Packing Tips for Solo Travelers',
        excerpt: 'Master the art of light travel with our comprehensive solo packing guide for every climate and terrain.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtbewua-5nJzJNrLpI9NXgdSqDCxu73LQyzsTcEp2AAlXYoCLHQoP1KSdElMF2f8l8yf-WgrRSveJosJAD2j2qpjh1ywfJpuqbfDYtKQkFm5wJASXNr0B0kFoLfuAD38-QePASPfY-d45JI-fQ1qZWC_ZZIBdKGFWjYMLEWt0f3jjIVJeXNG6Mwn4MsVbcRldMXAAbbhI63OCSd1T6ZoYr_hiytsW0fBFy7mfvmlotPKbKgHDv4f_wSDSr3d2ro-sDkcnFVBpTlJI',
        category: 'Tips',
        date: 'May 12, 2024',
        readTime: '4 min read',
        slug: '10-essential-packing-tips'
    },
    {
        id: '2',
        title: 'The Best Street Food in Tokyo',
        excerpt: "From Tsukiji to Shinjuku, explore the must-try flavors and hidden stalls of Japan's vibrant capital.",
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUWfyGgPTZRNd7DcH8guJtNZUSrjEjOVdLPizuruooOYUeVOUBE5Q2gvzoQ9Kqp59bDxHN-IRCKQoxc0zP_T8lW5Ng5roBJlWwzoUmZlFidv0Tg0TD_70EoOTqVOlN4elFqXx8ROA-mpxqqR1zzhac3wICdrWI4pV8J3fESDn1Gqgt-dZoBMSGopBbffcMnkxXQJlf0S2Nz8mYcpRTUd_VYlD-K6zplCMDkMJ-9lXLhel6b00AOy76Fkeg7Y5zNVnC0sAQ6wJD-N8',
        category: 'Food',
        date: 'May 10, 2024',
        readTime: '6 min read',
        slug: 'best-street-food-tokyo'
    },
    {
        id: '3',
        title: 'Hiking the Inca Trail: A Complete Guide',
        excerpt: "Everything you need to know before embarking on South America's most iconic and breathtaking trek.",
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaR8lvaVp6ASF6kGzfoTe_L9mj4bPJxLAIw3gWIf7J_cj7oNr1svereI-PDkGxThRQrcGEIe-9mDGSFPV31mpicrmt90TBqfpFAjAhwQDOLC5njf7SBT2Owd2-c5zfvnXuvqgXDwxth90HdiW4e03OY9ES-jN0GI0YjPw7AwJKZl_sCrRrtve8up6DuEWnBoUBVmxv0kxDZb_JKShWeEG8CL9c0SJ8al6CWSLEw5cDz3QTB5-8Yh7aiYBxarNP0flxYn5KFy7obcI',
        category: 'Adventure',
        date: 'May 08, 2024',
        readTime: '8 min read',
        slug: 'hiking-inca-trail-guide'
    },
    {
        id: '4',
        title: 'Top 5 Budget Stays in Bali',
        excerpt: 'Affordable luxury is possible in paradise with these vetted villas and chic hostels in Ubud.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvQzm9rJQjv9jm2KvHoJFjN2r0A94bXPATL5gMChcu46Z95UBkP7Cp9yztgWGM0QAC77eRi_tU3LA8xAwKCKbpLM8XaJfHIJybnOuZRRljJ7x8faAif_ug9zsfK-lKBUzV4CgRjsYGoGm6LcDcorCqXvkvv1gyM0HTS8AjO2_7D3VXR8NnCS7VEpYXfS9MsTSMwO8k0J_TgenffHWNS1y9LbDSITg4daCHZOiVV2BrjD_4UtJvZTkgcAr4SBZtdUODvmRTZCNyvzY',
        category: 'Budget',
        date: 'May 05, 2024',
        readTime: '5 min read',
        slug: 'top-5-budget-stays-bali'
    },
    {
        id: '5',
        title: 'Cultural Etiquette in Morocco',
        excerpt: 'Navigate local customs and traditions with ease on your next North African adventure.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTUWsL7v1VoZKmkYh4qtLekh1x633fJ2-CeILjLH3snWrF6rphgu0yCIEWKkrgmfle1oqlZ8E6u57F1DqXaVfy50RocbxInSSq-lnocvmSPfAC-vLYxu_5ZHq_QZ7ySHnYflCnlPUodjXkoQsBtlz_SfUrhS62TZwBF3SjWTZpY8ZM6NMU2rLdOs1gwV9VkmCL341gaAT4HA3uM3r2Td6RMWufgs1D-nCIyLmXqGF3OXV20317KLsUO_rmwvZZEClMcpZjGiJl2pU',
        category: 'Culture',
        date: 'May 03, 2024',
        readTime: '7 min read',
        slug: 'cultural-etiquette-morocco'
    },
    {
        id: '6',
        title: 'Winter Magic in the Swiss Alps',
        excerpt: 'A guide to the most picturesque ski resorts and cozy mountain villages for a perfect winter getaway.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlGpqbHrQpg_qnTZ7weYzw9uQqgl7pKlF6DDasNak6rAskZksMfEzJN8ws6t9DCwNPMGCsQyl95zQoeU17_aXR5uv_SFJHdb6iXlnyJ6apL_imVz_fdv2VvSNkLdB47MM7t1RJvXqkOe8r-b8e3KxG3myQheHhxp9_2VHOm_quSSjCGCkwc3T4wsDCEO_AG0fG6TODukO5Bd8_Jkh2IYEzUqFArKMspjcpIjASoyt2YtHr2Q10xQv_7rkLBbo2aiLc7sXb-VA3qS4',
        category: 'Destinations',
        date: 'May 01, 2024',
        readTime: '5 min read',
        slug: 'winter-magic-swiss-alps'
    }
];

export const categories = ['All', 'Destinations', 'Tips', 'Culture', 'Adventure', 'Food', 'Budget'];
