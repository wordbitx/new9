export interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: string;
  features: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: 1,
    name: "Social Media Management",
    description: "Complete social media management for your business. We handle content creation, scheduling, and engagement across all major platforms.",
    price: 299,
    duration: "per month",
    features: [
      "Daily posts on 3 platforms",
      "Content creation & design",
      "Community management",
      "Monthly analytics report",
      "Hashtag research",
      "Story/Reels management"
    ],
    icon: "Share2"
  },
  {
    id: 2,
    name: "Virtual Assistant - Basic",
    description: "Professional virtual assistance to handle your daily administrative tasks and help you focus on growing your business.",
    price: 199,
    duration: "per month (20 hours)",
    features: [
      "Email management",
      "Calendar scheduling",
      "Data entry",
      "Travel arrangements",
      "Document preparation",
      "Phone support"
    ],
    icon: "Headphones"
  },
  {
    id: 3,
    name: "Virtual Assistant - Premium",
    description: "Advanced virtual assistance with specialized skills for businesses that need comprehensive support.",
    price: 499,
    duration: "per month (40 hours)",
    features: [
      "Everything in Basic",
      "Project management",
      "Customer service",
      "Social media support",
      "Bookkeeping basics",
      "Research & reports"
    ],
    icon: "UserCheck"
  },
  {
    id: 4,
    name: "Content Writing - Blog Package",
    description: "High-quality blog content written by professional writers to boost your SEO and engage your audience.",
    price: 149,
    duration: "per package (4 posts)",
    features: [
      "4 x 1000-word articles",
      "SEO optimized content",
      "Keyword research",
      "2 revisions included",
      "Royalty-free images",
      "48-hour delivery"
    ],
    icon: "FileText"
  },
  {
    id: 5,
    name: "Graphic Design - Brand Package",
    description: "Complete brand identity design to make your business stand out with professional visuals.",
    price: 399,
    duration: "one-time",
    features: [
      "Logo design (3 concepts)",
      "Business card design",
      "Social media templates",
      "Brand style guide",
      "Letterhead design",
      "Unlimited revisions"
    ],
    icon: "Palette"
  },
  {
    id: 6,
    name: "Website Development - Basic",
    description: "Professional website development for small businesses and startups. Get online quickly with a beautiful, responsive website.",
    price: 599,
    duration: "one-time",
    features: [
      "Up to 5 pages",
      "Mobile responsive",
      "Contact form",
      "Basic SEO setup",
      "2 weeks delivery",
      "30 days support"
    ],
    icon: "Globe"
  },
  {
    id: 7,
    name: "Website Development - E-commerce",
    description: "Full-featured e-commerce website to start selling your products online with secure payment integration.",
    price: 1299,
    duration: "one-time",
    features: [
      "Unlimited products",
      "Payment gateway setup",
      "Inventory management",
      "User accounts",
      "Order management",
      "3 months support"
    ],
    icon: "ShoppingCart"
  },
  {
    id: 8,
    name: "SEO Optimization Service",
    description: "Comprehensive SEO service to improve your search engine rankings and drive organic traffic to your website.",
    price: 349,
    duration: "per month",
    features: [
      "Keyword research",
      "On-page optimization",
      "Technical SEO audit",
      "Backlink building",
      "Monthly reporting",
      "Competitor analysis"
    ],
    icon: "Search"
  },
  {
    id: 9,
    name: "Email Marketing Campaign",
    description: "Professional email marketing campaigns to nurture leads and convert them into customers.",
    price: 249,
    duration: "per campaign",
    features: [
      "Campaign strategy",
      "Email template design",
      "Copywriting",
      "A/B testing",
      "List segmentation",
      "Performance report"
    ],
    icon: "Mail"
  },
  {
    id: 10,
    name: "Video Editing - Social Media",
    description: "Professional video editing for your social media content. Make your videos stand out and engage your audience.",
    price: 99,
    duration: "per video (up to 60s)",
    features: [
      "Professional editing",
      "Color correction",
      "Sound design",
      "Text & graphics",
      "Music licensing",
      "2 revisions"
    ],
    icon: "Video"
  },
  {
    id: 11,
    name: "Business Consulting",
    description: "One-on-one business consulting to help you strategize, plan, and grow your business effectively.",
    price: 199,
    duration: "per session (1 hour)",
    features: [
      "Business strategy",
      "Growth planning",
      "Process optimization",
      "Market analysis",
      "Action plan",
      "Follow-up support"
    ],
    icon: "Briefcase"
  },
  {
    id: 12,
    name: "Digital Marketing Strategy",
    description: "Comprehensive digital marketing strategy tailored to your business goals and target audience.",
    price: 499,
    duration: "one-time",
    features: [
      "Market research",
      "Competitor analysis",
      "Channel strategy",
      "Content calendar",
      "Budget planning",
      "90-day roadmap"
    ],
    icon: "TrendingUp"
  },
  {
    id: 13,
    name: "Facebook Ads Management",
    description: "Professional Facebook and Instagram ads management to maximize your ROI and reach your target audience.",
    price: 299,
    duration: "per month",
    features: [
      "Ad campaign setup",
      "Audience targeting",
      "Creative design",
      "A/B testing",
      "Weekly optimization",
      "Monthly report"
    ],
    icon: "Facebook"
  },
  {
    id: 14,
    name: "Google Ads Management",
    description: "Expert Google Ads management to drive qualified traffic to your website and increase conversions.",
    price: 349,
    duration: "per month",
    features: [
      "Campaign setup",
      "Keyword research",
      "Ad copywriting",
      "Bid management",
      "Conversion tracking",
      "Monthly report"
    ],
    icon: "Target"
  },
  {
    id: 15,
    name: "Influencer Outreach",
    description: "Connect with relevant influencers in your niche to promote your brand and reach new audiences.",
    price: 449,
    duration: "per campaign",
    features: [
      "Influencer research",
      "Outreach & negotiation",
      "Contract management",
      "Content coordination",
      "Performance tracking",
      "Campaign report"
    ],
    icon: "Users"
  }
];
