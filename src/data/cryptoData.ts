export interface Token {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  volume24h: string;
  marketCap: string;
  icon: string;
  category: 'Layer 1' | 'DeFi' | 'AI' | 'Meme' | 'NFT';
  sparkline: number[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  priceMonthly: number;
  priceYearly: number;
  period: string;
  description: string;
  highlighted?: boolean;
  features: {
    text: string;
    included: boolean;
  }[];
}

export const INITIAL_TOKENS: Token[] = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 68420.50,
    change24h: 3.42,
    volume24h: '$34.2B',
    marketCap: '$1.34T',
    icon: '₿',
    category: 'Layer 1',
    sparkline: [66200, 66500, 67100, 66800, 67400, 68100, 68420]
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    price: 3540.80,
    change24h: 4.85,
    volume24h: '$18.9B',
    marketCap: '$425B',
    icon: 'Ξ',
    category: 'Layer 1',
    sparkline: [3350, 3390, 3420, 3400, 3480, 3510, 3540]
  },
  {
    id: 'solana',
    name: 'Solana',
    symbol: 'SOL',
    price: 184.20,
    change24h: 8.12,
    volume24h: '$6.4B',
    marketCap: '$85.6B',
    icon: '◎',
    category: 'Layer 1',
    sparkline: [168, 172, 175, 171, 179, 182, 184]
  },
  {
    id: 'render',
    name: 'Render AI',
    symbol: 'RNDR',
    price: 9.85,
    change24h: 12.40,
    volume24h: '$920M',
    marketCap: '$5.1B',
    icon: '⚡',
    category: 'AI',
    sparkline: [8.5, 8.8, 9.1, 8.9, 9.4, 9.6, 9.85]
  },
  {
    id: 'uniswap',
    name: 'Uniswap',
    symbol: 'UNI',
    price: 11.40,
    change24h: -1.25,
    volume24h: '$410M',
    marketCap: '$6.8B',
    icon: '🦄',
    category: 'DeFi',
    sparkline: [11.8, 11.7, 11.6, 11.5, 11.45, 11.38, 11.4]
  },
  {
    id: 'cardano',
    name: 'Cardano',
    symbol: 'ADA',
    price: 0.58,
    change24h: 2.15,
    volume24h: '$580M',
    marketCap: '$20.4B',
    icon: '₳',
    category: 'Layer 1',
    sparkline: [0.55, 0.56, 0.56, 0.57, 0.57, 0.58, 0.58]
  },
  {
    id: 'avalanche',
    name: 'Avalanche',
    symbol: 'AVAX',
    price: 36.90,
    change24h: 5.60,
    volume24h: '$740M',
    marketCap: '$14.2B',
    icon: '🔺',
    category: 'Layer 1',
    sparkline: [34.5, 35.1, 35.8, 35.4, 36.2, 36.5, 36.9]
  },
  {
    id: 'chainlink',
    name: 'Chainlink',
    symbol: 'LINK',
    price: 18.25,
    change24h: 6.70,
    volume24h: '$650M',
    marketCap: '$10.8B',
    icon: '⬡',
    category: 'DeFi',
    sparkline: [16.9, 17.2, 17.5, 17.4, 17.9, 18.1, 18.25]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'tom-henks',
    name: 'Tom Henks',
    role: 'CEO of Crypto 128',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80',
    bio: 'Pioneer in decentralized financial systems with over 12 years of leadership in fintech & Web3 infrastructure.',
    socials: { twitter: '#', linkedin: '#', github: '#' }
  },
  {
    id: 'brooklyn-simmons',
    name: 'Brooklyn Simmons',
    role: 'Office Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80',
    bio: 'Oversees global operational excellence, cross-border token compliance, and strategic enterprise expansion.',
    socials: { twitter: '#', linkedin: '#' }
  },
  {
    id: 'robert-fox',
    name: 'Robert Fox',
    role: 'Sales Manager',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80',
    bio: 'Helps institutional clients and hedge funds seamlessly onboard onto Crypto 128 liquidity pools.',
    socials: { linkedin: '#', twitter: '#' }
  },
  {
    id: 'albert-flores',
    name: 'Albert Flores',
    role: 'Blockchain Developer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80',
    bio: 'Smart contract architect specializing in zero-knowledge rollups, Rust, and high-frequency DEX matching engines.',
    socials: { github: '#', twitter: '#' }
  },
  {
    id: 'annette-black',
    name: 'Annette Black',
    role: 'UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80',
    bio: 'Crafts ultra-sleek visual design systems and effortless user journeys for modern Web3 applications.',
    socials: { twitter: '#', linkedin: '#' }
  },
  {
    id: 'courtney-henry',
    name: 'Courtney Henry',
    role: 'Software Engineer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80',
    bio: 'Full-stack distributed systems engineer focusing on low-latency WebSocket APIs and high-concurrency order routing.',
    socials: { github: '#', linkedin: '#' }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'Crypto 128 has fundamentally transformed our crypto treasury management. Their forecast analytics and instant liquidity pools have yielded unmatched efficiency for our enterprise operations.',
    author: 'Kathryn Murphy',
    role: 'CEO of Stripe',
    company: 'Stripe',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    quote: 'The speed, security, and intuitive design of Crypto 128 exceed every other platform. Converting high-volume assets takes seconds with zero price slippage.',
    author: 'Jassir Pingle',
    role: 'Lead Designer',
    company: 'Leo Studio',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    quote: 'As a crypto investor, the short-term and long-term predictive forecast algorithms on Crypto 128 have given me a distinct competitive edge in fast-moving market cycles.',
    author: 'Jens Leu',
    role: 'Crypto Analyst & Photographer',
    company: 'Lens Media',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'free',
    name: 'FREE',
    priceMonthly: 0,
    priceYearly: 0,
    period: 'FOREVER',
    description: 'Essential crypto tracking & basic swap features for individual Web3 enthusiasts.',
    features: [
      { text: 'Searchable archive message up to 10K', included: true },
      { text: '10 apps or service integrations', included: false },
      { text: '5GB total file storage', included: false },
      { text: 'Free Updates per month', included: false }
    ]
  },
  {
    id: 'pro',
    name: '$20.00',
    priceMonthly: 20,
    priceYearly: 16,
    period: 'PER USER/MONTH',
    description: 'Advanced forecast tools, zero-fee instant swaps, and multi-asset auto-syncing.',
    highlighted: true,
    features: [
      { text: 'Searchable archive message up to 10K', included: true },
      { text: '10 apps or service integrations', included: true },
      { text: '5GB total file storage', included: false },
      { text: 'Free Updates per month', included: false }
    ]
  },
  {
    id: 'enterprise',
    name: '$50.00',
    priceMonthly: 50,
    priceYearly: 40,
    period: 'PER USER/MONTH',
    description: 'Dedicated institutional vaulting, custom API integrations, and 24/7 VIP desk.',
    features: [
      { text: 'Searchable archive message up to 10K', included: true },
      { text: '10 apps or service integrations', included: true },
      { text: '5GB total file storage', included: true },
      { text: 'Free Updates per month', included: true }
    ]
  }
];

export const FAQ_ITEMS = [
  {
    q: "How does Crypto 128 ensure security for my digital assets?",
    a: "Crypto 128 utilizes institutional-grade MPC (Multi-Party Computation) vault security, 100% cold storage reserve ratios, multi-signature authentication, and is audited bi-annually by top tier cybersecurity firms."
  },
  {
    q: "What payment methods are supported for adding funds?",
    a: "You can deposit funds via Instant ACH, Bank Wire Transfer, Credit/Debit cards, Apple Pay, Google Pay, or direct crypto deposits across 15+ blockchain networks including Ethereum, Solana, and Bitcoin."
  },
  {
    q: "How are the long-term & short-term forecasts generated?",
    a: "Our proprietary AI forecasting engine aggregates order book liquidity depth, cross-chain volume flows, social sentiment velocity, and macroeconomic indicators to generate high-probability price range projections."
  },
  {
    q: "Can I cancel or upgrade my subscription plan anytime?",
    a: "Yes! You can upgrade, downgrade, or cancel your subscription plan at any time from your account settings with zero lock-in contracts or hidden cancellation fees."
  }
];
