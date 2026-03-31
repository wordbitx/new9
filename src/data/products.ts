import type { Product, Testimonial } from '@/types';

export const products: Product[] = [
  {
    id: 1,
    name: "LionX Growth Accelerator",
    description: "Complete digital growth toolkit with proven strategies, templates, and automation tools for scaling your business online.",
    price: 29.99,
    category: "Digital Marketing",
    image: "/images/products/product-1.jpg",
    rating: 4.8,
    reviews: 124,
    features: ["30+ Page Strategy Guide", "Content Calendar Templates", "Hashtag Research Tool", "Analytics Dashboard"]
  },
  {
    id: 2,
    name: "Social Pulse Pro",
    description: "Boost your social media engagement with comprehensive analytics, scheduling tools, and performance tracking.",
    price: 24.99,
    category: "Social Media",
    image: "/images/products/product-2.jpg",
    rating: 4.9,
    reviews: 89,
    features: ["Real-time Analytics", "Competitor Tracking", "Engagement Reports", "Trend Analysis"]
  },
  {
    id: 3,
    name: "Content Creator Studio",
    description: "All-in-one content creation suite with video editing templates, thumbnail makers, and script generators.",
    price: 34.99,
    category: "Content Creation",
    image: "/images/products/product-3.jpg",
    rating: 4.7,
    reviews: 156,
    features: ["Video Templates", "Thumbnail Maker", "Script Generator", "Stock Assets Library"]
  },
  {
    id: 4,
    name: "Network Nexus",
    description: "Professional networking toolkit for building connections, generating leads, and growing your professional presence.",
    price: 39.99,
    category: "Professional Growth",
    image: "/images/products/product-4.jpg",
    rating: 4.8,
    reviews: 67,
    features: ["Profile Optimization", "Connection Scripts", "Lead Generation", "Outreach Templates"]
  },
  {
    id: 5,
    name: "Streamline Studio",
    description: "Complete streaming and video platform toolkit for creators looking to build their audience and monetize content.",
    price: 49.99,
    category: "Video Production",
    image: "/images/products/product-5.jpg",
    rating: 4.9,
    reviews: 203,
    features: ["Stream Setup Guide", "Overlay Templates", "Monetization Roadmap", "SEO Optimization"]
  },
  {
    id: 6,
    name: "Engagement Engine",
    description: "Automated engagement system to grow your audience and increase interaction across all platforms.",
    price: 19.99,
    category: "Social Media",
    image: "/images/products/product-6.jpg",
    rating: 4.6,
    reviews: 78,
    features: ["Auto-engagement Tools", "Response Templates", "Growth Analytics", "Best Time Posting"]
  },
  {
    id: 7,
    name: "Vision Board Pro",
    description: "Visual content planning and inspiration toolkit for creating stunning mood boards and content strategies.",
    price: 22.99,
    category: "Content Creation",
    image: "/images/products/product-7.jpg",
    rating: 4.7,
    reviews: 45,
    features: ["Mood Board Creator", "Color Palette Tools", "Inspiration Library", "Brand Guidelines"]
  },
  {
    id: 8,
    name: "Content Calendar Master",
    description: "365-day content planning system with post ideas, holiday content, and platform-specific strategies.",
    price: 14.99,
    category: "Content Planning",
    image: "/images/products/product-8.jpg",
    rating: 4.8,
    reviews: 112,
    features: ["365 Post Ideas", "Holiday Calendar", "Platform Guides", "Auto-scheduling"]
  },
  {
    id: 9,
    name: "Ad Campaign Architect",
    description: "Complete advertising toolkit for creating, managing, and optimizing high-converting ad campaigns.",
    price: 59.99,
    category: "Digital Marketing",
    image: "/images/products/product-9.jpg",
    rating: 4.9,
    reviews: 89,
    features: ["Campaign Templates", "Audience Targeting", "A/B Testing", "ROI Tracking"]
  },
  {
    id: 10,
    name: "Virtual Assistant Elite",
    description: "Premium virtual assistance service package for 20 hours of professional support for your business.",
    price: 99.00,
    category: "Virtual Services",
    image: "/images/products/product-10.jpg",
    rating: 4.9,
    reviews: 134,
    features: ["20 Hours of Service", "Email Management", "Calendar Scheduling", "Data Entry"]
  },
  {
    id: 11,
    name: "CopyCraft Pro",
    description: "Professional copywriting service including 5 SEO-optimized blog posts or 20 social media posts.",
    price: 79.99,
    category: "Content Creation",
    image: "/images/products/product-11.jpg",
    rating: 4.8,
    reviews: 56,
    features: ["5 Blog Posts (1000 words)", "SEO Optimized", "2 Revisions", "48-Hour Delivery"]
  },
  {
    id: 12,
    name: "Brand Identity Suite",
    description: "Complete brand identity package with logo concepts, color palette, typography, and brand guidelines.",
    price: 89.99,
    category: "Branding",
    image: "/images/products/product-12.jpg",
    rating: 4.7,
    reviews: 43,
    features: ["3 Logo Concepts", "Color Palette", "Typography Guide", "Brand Guidelines PDF"]
  },
  {
    id: 13,
    name: "Email Marketing Pro",
    description: "Complete email marketing automation setup with sequences, templates, and list segmentation.",
    price: 69.99,
    category: "Digital Marketing",
    image: "/images/products/product-13.jpg",
    rating: 4.8,
    reviews: 67,
    features: ["Welcome Sequence", "5 Email Templates", "Automation Setup", "List Segmentation"]
  },
  {
    id: 14,
    name: "SEO Dominator",
    description: "Comprehensive SEO toolkit to rank higher on search engines with keyword research and optimization.",
    price: 44.99,
    category: "SEO",
    image: "/images/products/product-14.jpg",
    rating: 4.6,
    reviews: 98,
    features: ["Keyword Research", "On-Page SEO", "Technical Audit", "Backlink Strategy"]
  },
  {
    id: 15,
    name: "Dev Starter Kit",
    description: "Complete web development starter kit with code templates, components, and project boilerplates.",
    price: 54.99,
    category: "Development",
    image: "/images/products/product-15.jpg",
    rating: 4.9,
    reviews: 178,
    features: ["React Components", "CSS Framework", "Project Templates", "Documentation"]
  },
  {
    id: 16,
    name: "Digital Mastery Guide",
    description: "200-page comprehensive digital marketing ebook covering all aspects of online business growth.",
    price: 19.99,
    category: "Ebooks",
    image: "/images/products/product-16.jpg",
    rating: 4.8,
    reviews: 234,
    features: ["200 Pages", "PDF & EPUB", "Actionable Strategies", "Case Studies"]
  },
  {
    id: 17,
    name: "Kids Learning Adventure",
    description: "Fun and educational digital resource pack for children with games, activities, and worksheets.",
    price: 12.99,
    category: "Education",
    image: "/images/products/product-17.jpg",
    rating: 4.9,
    reviews: 89,
    features: ["Alphabet Games", "Math Activities", "Coloring Pages", "Printable Worksheets"]
  },
  {
    id: 18,
    name: "Mobile App Builder",
    description: "Mobile app development starter kit with templates, UI components, and deployment guides.",
    price: 49.99,
    category: "Development",
    image: "/images/products/product-18.jpg",
    rating: 4.7,
    reviews: 56,
    features: ["App Templates", "UI Components", "API Integration", "Deployment Guide"]
  },
  {
    id: 19,
    name: "Analytics Command Center",
    description: "Professional analytics dashboard template for tracking business metrics and KPIs.",
    price: 39.99,
    category: "Analytics",
    image: "/images/products/product-19.jpg",
    rating: 4.8,
    reviews: 45,
    features: ["Pre-built Widgets", "Chart Components", "Data Visualization", "Custom Themes"]
  },
  {
    id: 20,
    name: "Freelancer Freedom Guide",
    description: "Complete guide to building a successful freelancing career from finding clients to scaling.",
    price: 29.99,
    category: "Ebooks",
    image: "/images/products/product-20.jpg",
    rating: 4.9,
    reviews: 167,
    features: ["Client Acquisition", "Pricing Strategies", "Contract Templates", "Growth Tactics"]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Marketing Director",
    company: "Growth Labs",
    content: "LionXSofts transformed our digital presence completely. The tools are intuitive and the results speak for themselves!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder",
    company: "TechStart Inc",
    content: "Fast, professional, and incredibly helpful. The virtual assistant service saved me countless hours every month.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Content Creator",
    company: "Creative Studio",
    content: "The Content Creator Studio helped me triple my output while maintaining quality. Absolutely game-changing!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    rating: 5
  },
  {
    id: 4,
    name: "David Park",
    role: "CEO",
    company: "Digital Ventures",
    content: "Professional quality products that deliver real results. Their dev kits accelerated our timeline significantly.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    rating: 5
  },
  {
    id: 5,
    name: "Jessica Williams",
    role: "Social Media Manager",
    company: "Brand Co",
    content: "Social Pulse Pro is a game-changer. Our engagement rate increased by 340% in just one month!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    rating: 5
  },
  {
    id: 6,
    name: "Robert Taylor",
    role: "Entrepreneur",
    company: "Taylor Consulting",
    content: "From ebooks to virtual services, everything is top-notch. LionXSofts is my go-to for digital resources.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    rating: 5
  }
];

export const categories = [
  { name: "Digital Marketing", count: 4, icon: "TrendingUp" },
  { name: "Social Media", count: 2, icon: "Share2" },
  { name: "Content Creation", count: 3, icon: "FileText" },
  { name: "Virtual Services", count: 1, icon: "Headphones" },
  { name: "Development", count: 2, icon: "Code" },
  { name: "Ebooks", count: 2, icon: "BookOpen" },
  { name: "Education", count: 1, icon: "GraduationCap" },
  { name: "Branding", count: 1, icon: "Palette" },
  { name: "SEO", count: 1, icon: "Search" },
  { name: "Analytics", count: 1, icon: "BarChart" }
];
