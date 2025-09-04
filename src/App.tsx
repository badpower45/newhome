import { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Input } from './components/ui/input'
import { Progress } from './components/ui/progress'
import { 
  Plane, Shield, Star, Clock, Brain, 
  CheckCircle, Headphones, MapPin, Utensils, 
  ShoppingBag, Camera, Mail, Users, 
  Calendar, Globe, Camera as CameraIcon,
  Sparkles, Zap, MessageCircle, Heart,
  Target, TrendingUp, Ship, TreePine, 
  Building2, Crown, Compass, Map, Car
} from 'lucide-react'
import { ImageWithFallback } from './components/figma/ImageWithFallback'

export default function App() {
  const [isArabic, setIsArabic] = useState(false)

  const content = {
    en: {
      // Hero Content
      badge: "PORT SAID / EGYPT",
      heroTitle1: "Egy",
      heroTitle2: "Safary:",
      heroTitle3: "Your Trusted Journey to",
      heroTitle4: "Port Said's Heart",
      heroSubtitle: "Seamless Exploration, Authentic Experiences, Unforgettable Memories.",
      heroSubtitle2: "Your Safety, Our Priority.",
      primaryBtn: "Unlock Port Said Magic",
      secondaryBtn: "Discover Port Said",
      trustBadges: ["Secure", "Verified Partners", "24/7 Support"],
      
      // Why Choose Section
      whyChooseTitle: "Why Choose",
      whyChooseAccent: "Egy Safary?",
      features: [
        {
          title: 'Safety First',
          desc: 'Every partner is verified and monitored for your peace of mind.'
        },
        {
          title: 'Authenticity',
          desc: 'Real local experiences curated by Port Said experts.'
        },
        {
          title: 'Smart Planning',
          desc: 'AI-powered recommendations tailored to your preferences.'
        },
        {
          title: '24/7 Support',
          desc: 'Always here when you need us, in multiple languages.'
        }
      ],

      // Planner Section
      plannerTitle: "Plan Your",
      plannerAccent: "Safe Adventure",
      plannerSubtitle: "Our smart planner helps you create the perfect Port Said experience in minutes.",
      stepText: "Step 1 of 3",
      questionText: "What's your vibe?",
      vibeOptions: ["Food", "Shopping", "Culture", "Family"],
      miniSteps: ["Step 2: Select Date & Time", "Step 3: Pick Your Package"],
      plannerBtn: "Build My Safe Plan",

      // AI Section
      aiBadges: ["New", "AI"],
      aiTitle: "New AI Travel Assistant",
      aiSubtitle: "Available Now!",
      aiDesc: "Discover Port Said intelligently with your personal Egy Safary assistant.",
      aiFeatures: "Instant Recommendations • Smart Planning • Personalized Experience",
      aiCards: [
        {
          title: 'Instant Recommendations',
          desc: 'Ask anything and get smart answers about Port Said.',
          icon: 'Zap',
          features: ['Real-time responses', 'Local insights', 'Custom suggestions']
        },
        {
          title: 'Personal Assistant',
          desc: 'Learns your preferences and suggests the best places for you.',
          icon: 'Heart',
          features: ['Learning preferences', 'Personalized routes', 'Smart matching']
        },
        {
          title: 'Smart Planning',
          desc: 'Plan your trip in seconds with AI assistance.',
          icon: 'Target',
          features: ['Auto-scheduling', 'Time optimization', 'Budget planning']
        }
      ],
      aiBtn: "Try AI Assistant",
      limitedOffer: "Launch Special",
      limitedText: "Get premium features free for 30 days!",
      comingSoon: "Available Now – Start Your Journey!",

      // Curated Section
      curatedTitle: "Curated for You:",
      curatedAccent: "Port Said's Best",
      curatedSubtitle: "Dive into Port Said's vibrant scene with our expert recommendations.",
      viewAll: "View All →",
      
      // Travel Packages
      packagesTitle: "Your Journey",
      packagesAccent: "Your Way",
      packagesSubtitle: "Choose from our carefully crafted packages designed for every traveler",
      packagesView: "Cards View",
      packagesCompare: "Compare",
      packages: [
        {
          name: 'VIP Voyager',
          price: 450,
          currency: 'EGP',
          period: 'per person',
          popular: 'Most Popular',
          color: 'gold',
          features: ['Premium hotel accommodation', 'VIP restaurant reservations', 'Private guided tours', 'Premium safety coverage'],
          cta: 'Choose VIP'
        },
        {
          name: 'Adventurer',
          price: 250,
          currency: 'EGP',
          period: 'per person',
          popular: 'Best Value',
          color: 'teal',
          features: ['3-star hotel booking', 'Restaurant recommendations', 'Interactive maps & guides', 'Standard safety coverage'],
          cta: 'Start Adventure'
        },
        {
          name: 'Explorer',
          price: 200,
          currency: 'EGP',
          period: 'per person',
          color: 'blue',
          features: ['City maps & directions', 'Budget dining suggestions', 'Transport assistance', 'Basic safety coverage'],
          cta: 'Start Exploring'
        },
        {
          name: 'Alex Day Trip',
          price: 399,
          currency: 'EGP',
          period: 'per person',
          color: 'purple',
          features: ['Round-trip transportation', 'Alexandria city tour', 'Lunch included', 'Travel insurance included'],
          cta: 'Book Day Trip'
        }
      ],

      // Restaurants
      restaurantsTitle: "Restaurants & Cafés",
      restaurants: [
        { 
          name: 'Ibn Hamido', 
          cuisine: 'Traditional seafood restaurant', 
          rating: 4.8, 
          image: 'https://i.postimg.cc/BnkV6jgs/476448144-1028783965953841-6448972743175736685-n.jpg',
          specialty: 'Famous for fresh catch of the day',
          link: 'https://egy-safary.odoo.com/ibn-hamiduo'
        },
        { 
          name: 'Asmak City', 
          cuisine: 'Mediterranean seafood specialties', 
          rating: 4.6, 
          image: 'https://i.postimg.cc/Px3ZXwWQ/485729605-1069499708549498-1959922569899581041-n.jpg',
          specialty: 'Grilled fish and seafood platters',
          link: 'https://egy-safary.odoo.com/asmak-city'
        },
        { 
          name: 'Abdo Salem', 
          cuisine: 'Authentic local cuisine', 
          rating: 4.7, 
          image: 'https://i.postimg.cc/kXhj12L8/480969069-1045383804286691-6539337838710740832-n.jpg',
          specialty: 'Traditional Egyptian dishes',
          link: 'https://egy-safary.odoo.com/abdo-salem'
        },
        { 
          name: 'City Crepe', 
          cuisine: 'French crepes with local twist', 
          rating: 4.7, 
          image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop',
          specialty: 'Sweet and savory crepes',
          link: 'https://egy-safary.odoo.com/city-crepe'
        }
      ],
      viewMenu: "View Menu",
      bookNow: "Discover Now",

      // Shopping
      shoppingTitle: "Shopping & Local Finds",
      discoverStores: "Discover Stores →",
      shops: [
        { 
          name: 'Nuts Jeans', 
          category: 'Premium denim collection', 
          tags: ['Local Brand'], 
          promo: '20% off',
          image: 'https://i.postimg.cc/7YV4fnG4/311574864-493009316175920-8157584742326155656-n.jpg',
          link: 'http://egy-safary.odoo.com/nuts-jeans'
        },
        { 
          name: 'Abu Abas Active', 
          category: 'Local fashion brand', 
          tags: ['Trending'],
          image: 'https://i.postimg.cc/MpvLq71d/465187391-985206483638982-7945889023653170387-n.jpg',
          link: 'http://egy-safary.odoo.com/active'
        },
        { 
          name: 'Top Jeans', 
          category: 'Local denim specialists', 
          tags: ['Local Brand'],
          image: 'https://i.postimg.cc/CxQWqPw3/327211586-556721933054505-9124816171449876841-n.jpg',
          link: 'http://egy-safary.odoo.com/top-jeans-1'
        }
      ],
      visitStore: "Visit Store",

      // Landmarks Enhanced
      landmarksTitle: "Historic Landmarks & Cultural Activities",
      morePlaces: "Explore All Places →",
      landmarks: [
        { 
          name: 'Suez Canal', 
          image: 'https://i.postimg.cc/MGwphpQZ/20250222-135243.jpg',
          description: 'Marvel at one of the world\'s most important waterways connecting the Mediterranean and Red Sea',
          duration: '2-4 hours',
          type: 'Engineering Wonder',
          highlights: ['Ship watching', 'Canal history', 'Panoramic views', 'Photo opportunities'],
          bestTime: 'Morning & Afternoon',
          icon: 'Ship'
        },
        { 
          name: 'Forela Garden', 
          image: 'https://i.postimg.cc/pV5yh4RH/20250310-131350.jpg',
          description: 'Beautiful botanical garden with exotic plants, peaceful walking paths and recreational areas',
          duration: '1-3 hours',
          type: 'Nature Park',
          highlights: ['Botanical diversity', 'Walking trails', 'Picnic areas', 'Bird watching'],
          bestTime: 'Morning & Evening',
          icon: 'TreePine'
        },
        { 
          name: 'Military Museum', 
          image: 'https://i.postimg.cc/7Z8zZD2d/fabulous.jpg',
          description: 'Discover Egypt\'s military heritage with rare artifacts, weapons and historical exhibits',
          duration: '2-3 hours',
          type: 'Military History',
          highlights: ['Historical weapons', 'Military artifacts', 'Interactive displays', 'War memorabilia'],
          bestTime: 'All day',
          icon: 'Building2'
        }
      ],
      viewDetails: "View Details",
      exploreNow: "Explore Now",

      // Newsletter
      newsletterTitle: "Stay Updated with Egy Safary",
      newsletterSubtitle: "Subscribe to get the latest Port Said tips, events, and exclusive offers.",
      emailPlaceholder: "Enter your email",
      subscribe: "Subscribe",
      privacyText: "We respect your privacy. No spam ever."
    },
    ar: {
      // Hero Content
      badge: "بورسعيد / مصر",
      heroTitle1: "إجي",
      heroTitle2: "سفاري:",
      heroTitle3: "رحلتك الآمنة لـ",
      heroTitle4: "قلب بورسعيد",
      heroSubtitle: "استكشاف سلس، تجارب أصيلة، ذكريات ماتتنساش.",
      heroSubtitle2: "أمانك همنا الأول.",
      primaryBtn: "اكتشف سحر بورسعيد",
      secondaryBtn: "اكتشف بورسعيد",
      trustBadges: ["آمن", "شركاء موثقين", "دعم ٢٤/٧"],
      
      // Why Choose Section
      whyChooseTitle: "ليه تختار",
      whyChooseAccent: "إجي سفاري؟",
      features: [
        {
          title: 'الأمان أولاً',
          desc: 'كل الشركاء متحققين ومراقبين عشان راحة بالك.'
        },
        {
          title: 'الأصالة',
          desc: 'تجارب محلية حقيقية مختارة من خبراء بورسعيد.'
        },
        {
          title: 'التخطيط الذكي',
          desc: 'توصيات بالذكاء الاصطناعي على مقاسك.'
        },
        {
          title: 'دعم ٢٤/٧',
          desc: 'موجودين دايماً لما تحتاجنا، بكذا لغة.'
        }
      ],

      // Planner Section
      plannerTitle: "خطط رحلتك",
      plannerAccent: "الآمنة",
      plannerSubtitle: "منظم الرحلات الذكي بتاعنا هيساعدك تعمل تجربة بورسعيد المثالية في دقايق.",
      stepText: "خطوة ١ من ٣",
      questionText: "إيه مودك؟",
      vibeOptions: ["أكل", "تسوق", "ثقافة", "عائلة"],
      miniSteps: ["خطوة ٢: اختار التاريخ والوقت", "خطوة ٣: اختار الباقة"],
      plannerBtn: "اعمل خطة آمنة",

      // AI Section
      aiBadges: ["جديد", "ذكي"],
      aiTitle: "مساعد السفر الذكي الجديد",
      aiSubtitle: "متاح الآن!",
      aiDesc: "اكتشف بورسعيد بذكاء مع مساعد إجي سفاري الشخصي بتاعك.",
      aiFeatures: "توصيات فورية • تخطيط ذكي • تجربة شخصية",
      aiCards: [
        {
          title: 'توصيات فورية',
          desc: 'اسأل أي حاجة واحصل على إجابات ذكية عن بورسعيد.',
          icon: 'Zap',
          features: ['ردود فورية', 'معلومات محلية', 'اقتراحات مخصصة']
        },
        {
          title: 'مساعد شخصي',
          desc: 'يتعلم تفضيلاتك ويقترحلك أحسن الأماكن.',
          icon: 'Heart',
          features: ['تعلم التفضيلات', 'طرق شخصية', 'مطابقة ذكية']
        },
        {
          title: 'تخطيط ذكي',
          desc: 'خطط رحلتك في ثواني بمساعدة الذكاء الاصطناعي.',
          icon: 'Target',
          features: ['جدولة تلقائية', 'تحسين الوقت', 'تخطيط الميزانية']
        }
      ],
      aiBtn: "جرب المساعد الذكي",
      limitedOffer: "عرض الإطلاق",
      limitedText: "اشترك واحصل على المميزات المدفوعة مجاناً لمدة ٣٠ يوم!",
      comingSoon: "متاح الآن – ابدأ رحلتك!",

      // Curated Section
      curatedTitle: "مختار ليك:",
      curatedAccent: "أحسن حاجة في بورسعيد",
      curatedSubtitle: "اغطس في مشهد بورسعيد النابض بالحياة مع توصياتنا المتخصصة.",
      viewAll: "شوف الكل ←",
      
      // Travel Packages
      packagesTitle: "رحلتك",
      packagesAccent: "على مزاجك",
      packagesSubtitle: "اختار من الباقات المصممة خصيصاً لكل نوع مسافر",
      packagesView: "عرض البطاقات",
      packagesCompare: "قارن",
      packages: [
        {
          name: 'في آي بي فوياجر',
          price: 450,
          currency: 'جنيه',
          period: 'للفرد',
          popular: 'الأشهر',
          color: 'gold',
          features: ['إقامة فندقية فاخرة', 'حجوزات مطاعم في آي بي', 'جولات خاصة مع مرشد', 'تغطية أمان مميزة'],
          cta: 'اختار في آي بي'
        },
        {
          name: 'المغامر',
          price: 250,
          currency: 'جنيه',
          period: 'للفرد',
          popular: 'أفضل قيمة',
          color: 'teal',
          features: ['حجز فندق ٣ نجوم', 'توصيات مطاعم', 'خرائط وأدلة تفاعلية', 'تغطية أمان عادية'],
          cta: 'ابدأ المغامرة'
        },
        {
          name: 'المستكشف',
          price: 200,
          currency: 'جنيه',
          period: 'للفرد',
          color: 'blue',
          features: ['خرائط المدينة والاتجاهات', 'اقتراحات أكل وميزانية', 'مساعدة النقل', 'تغطية أمان أساسية'],
          cta: 'ابدأ الاستكشاف'
        },
        {
          name: 'رحلة الإسكندرية',
          price: 399,
          currency: 'جنيه',
          period: 'للفرد',
          color: 'purple',
          features: ['نقل ذهاب وعودة', 'جولة مدينة الإسكندرية', 'الغداء مشمول', 'تأمين السفر مشمول'],
          cta: 'احجز الرحلة'
        }
      ],

      // Restaurants
      restaurantsTitle: "مطاعم وكافيهات",
      restaurants: [
        { 
          name: 'ابن حميدو', 
          cuisine: 'مطعم مأكولات بحرية تقليدي', 
          rating: 4.8, 
          image: 'https://i.postimg.cc/BnkV6jgs/476448144-1028783965953841-6448972743175736685-n.jpg',
          specialty: 'مشهور بصيد اليوم الطازة',
          link: 'https://egy-safary.odoo.com/ibn-hamiduo'
        },
        { 
          name: 'أسماك سيتي', 
          cuisine: 'مأكولات بحرية متوسطية', 
          rating: 4.6, 
          image: 'https://i.postimg.cc/Px3ZXwWQ/485729605-1069499708549498-1959922569899581041-n.jpg',
          specialty: 'سمك مشوي وأطباق بحرية',
          link: 'https://egy-safary.odoo.com/asmak-city'
        },
        { 
          name: 'عبده سالم', 
          cuisine: 'أكل محلي أصيل', 
          rating: 4.7, 
          image: 'https://i.postimg.cc/kXhj12L8/480969069-1045383804286691-6539337838710740832-n.jpg',
          specialty: 'أكلات مصرية تقليدية',
          link: 'https://egy-safary.odoo.com/abdo-salem'
        },
        { 
          name: 'سيتي كريب', 
          cuisine: 'كريب فرنساوي بلمسة محلية', 
          rating: 4.7, 
          image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop',
          specialty: 'كريب حلو ومالح',
          link: 'https://egy-safary.odoo.com/city-crepe'
        }
      ],
      viewMenu: "شوف المينو",
      bookNow: "اكتشف دلوقتي",

      // Shopping
      shoppingTitle: "تسوق ولقيات محلية",
      discoverStores: "اكتشف المحلات ←",
      shops: [
        { 
          name: 'نتس جينز', 
          category: 'مجموعة جينز فاخرة', 
          tags: ['براند محلي'], 
          promo: 'خصم ٢٠٪',
          image: 'https://i.postimg.cc/7YV4fnG4/311574864-493009316175920-8157584742326155656-n.jpg',
          link: 'http://egy-safary.odoo.com/nuts-jeans'
        },
        { 
          name: 'أبو عباس أكتيف', 
          category: 'براند أزياء محلي', 
          tags: ['ترند'],
          image: 'https://i.postimg.cc/MpvLq71d/465187391-985206483638982-7945889023653170387-n.jpg',
          link: 'http://egy-safary.odoo.com/active'
        },
        { 
          name: 'توب جينز', 
          category: 'متخصص جينز محلي', 
          tags: ['براند محلي'],
          image: 'https://i.postimg.cc/CxQWqPw3/327211586-556721933054505-9124816171449876841-n.jpg',
          link: 'http://egy-safary.odoo.com/top-jeans-1'
        }
      ],
      visitStore: "زور المحل",

      // Landmarks Enhanced
      landmarksTitle: "معالم تاريخية وأنشطة ثقافية",
      morePlaces: "استكشف كل الأماكن ←",
      landmarks: [
        { 
          name: 'قناة السويس', 
          image: 'https://i.postimg.cc/MGwphpQZ/20250222-135243.jpg',
          description: 'اتفرج على واحدة من أهم الممرات المائية في العالم اللي بتربط البحر المتوسط بالبحر الأحمر',
          duration: '٢-٤ ساعات',
          type: 'عجيبة هندسية',
          highlights: ['مراقبة السفن', 'تاريخ القناة', 'مناظر شاملة', 'فرص تصوير'],
          bestTime: 'الصبح والضهر',
          icon: 'Ship'
        },
        { 
          name: 'حديقة فريلا', 
          image: 'https://i.postimg.cc/pV5yh4RH/20250310-131350.jpg',
          description: 'حديقة نباتية جميلة فيها نباتات غريبة وممرات هادية ومناطق ترفيهية',
          duration: '١-٣ ساعات',
          type: 'منتزه طبيعي',
          highlights: ['تنوع نباتي', 'ممرات المشي', 'مناطق النزهة', 'مراقبة الطيور'],
          bestTime: 'الصبح والمغرب',
          icon: 'TreePine'
        },
        { 
          name: 'المتحف الحربي', 
          image: 'https://i.postimg.cc/7Z8zZD2d/fabulous.jpg',
          description: 'اكتشف التراث العسكري المصري مع تحف نادرة وأسلحة ومعروضات تاريخية',
          duration: '٢-٣ ساعات',
          type: 'تاريخ عسكري',
          highlights: ['أسلحة تاريخية', 'تحف عسكرية', 'معروضات تفاعلية', 'تذكارات الحروب'],
          bestTime: 'طول اليوم',
          icon: 'Building2'
        }
      ],
      viewDetails: "شوف التفاصيل",
      exploreNow: "استكشف دلوقتي",

      // Newsletter
      newsletterTitle: "خليك متابع مع إجي سفاري",
      newsletterSubtitle: "اشترك عشان تاخد آخر نصايح بورسعيد والأحداث والعروض الحصرية.",
      emailPlaceholder: "اكتب إيميلك",
      subscribe: "اشترك",
      privacyText: "احنا بنحترم خصوصيتك. مافيش سبام أبداً."
    }
  }

  const t = content[isArabic ? 'ar' : 'en']

  return (
    <div className={`min-h-screen bg-white ${isArabic ? 'rtl' : 'ltr'}`} style={{ fontFamily: 'var(--font-dg-ghayaty)' }}>
      {/* Language Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <Button
          onClick={() => setIsArabic(!isArabic)}
          className="bg-white/90 text-[var(--brand-600)] hover:bg-white shadow-lg backdrop-blur-sm border border-white/20 rounded-full w-12 h-12 p-0"
        >
          <Globe className="w-4 h-4" />
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative h-[720px] md:h-[720px] sm:h-[520px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop')`
          }}
        >
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(11, 18, 32, 0.70) 0%, rgba(11, 18, 32, 0.25) 100%)'
            }}
          ></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto pt-20">
          <Badge className="bg-white/14 border-white/25 text-white mb-8 text-xs rounded-full px-4 py-2">
            {t.badge}
          </Badge>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
            <span style={{ fontFamily: 'var(--font-pacifico)', color: 'var(--brand-400)' }}>
              {t.heroTitle1} {t.heroTitle2}
            </span>{' '}
            {t.heroTitle3}
            <br />
            <span style={{ fontFamily: 'var(--font-pacifico)', color: 'var(--brand-400)' }}>
              {t.heroTitle4}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/80 max-w-3xl mx-auto">
            {t.heroSubtitle}
            <br />
            {t.heroSubtitle2}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-[var(--brand-600)] hover:bg-[var(--brand-500)] h-12 rounded-lg px-8">
              <Plane className="w-5 h-5 mr-2" />
              {t.primaryBtn}
            </Button>
            <Button size="lg" variant="outline" className="border-white/35 text-white hover:bg-white hover:text-gray-900 h-12 rounded-lg px-8">
              {t.secondaryBtn}
            </Button>
          </div>
          
          <div className="flex justify-center items-center space-x-6 text-sm">
            {t.trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center bg-white/10 rounded-full px-3 py-1">
                {index === 0 && <Shield className="w-4 h-4 mr-1" />}
                {index === 1 && <CheckCircle className="w-4 h-4 mr-1" />}
                {index === 2 && <Headphones className="w-4 h-4 mr-1" />}
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Egy Safary */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-[var(--ink-900)]">
              {t.whyChooseTitle}{' '}
              <span style={{ fontFamily: 'var(--font-pacifico)', color: 'var(--brand-600)' }}>
                {t.whyChooseAccent}
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-0 rounded-3xl">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--brand-600)] to-[var(--teal-500)] rounded-full flex items-center justify-center mx-auto mb-4">
                    {index === 0 && <Shield className="w-6 h-6 text-white" />}
                    {index === 1 && <Star className="w-6 h-6 text-white" />}
                    {index === 2 && <Brain className="w-6 h-6 text-white" />}
                    {index === 3 && <Headphones className="w-6 h-6 text-white" />}
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-[var(--ink-900)]">{feature.title}</h3>
                    <CheckCircle className="w-4 h-4 text-[var(--brand-600)]" />
                  </div>
                  <p className="text-[var(--ink-500)] text-sm leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Planner Section */}
      <section className="py-24" style={{ background: 'var(--gradient-deep-blue)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-white">
              {t.plannerTitle}{' '}
              <span style={{ fontFamily: 'var(--font-pacifico)' }}>
                {t.plannerAccent}
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {t.plannerSubtitle}
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto bg-white/6 border-white/16 rounded-[28px] backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-white/80 text-sm">{t.stepText}</span>
                  <Progress value={33} className="w-32 h-2" />
                </div>
                <h3 className="text-2xl text-white mb-6">{t.questionText}</h3>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {t.vibeOptions.map((option, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                      index === 0
                        ? 'border-[var(--brand-400)] bg-white/10'
                        : 'border-white/20 bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    {index === 0 && <Utensils className="w-8 h-8 text-white mx-auto mb-2" />}
                    {index === 1 && <ShoppingBag className="w-8 h-8 text-white mx-auto mb-2" />}
                    {index === 2 && <Camera className="w-8 h-8 text-white mx-auto mb-2" />}
                    {index === 3 && <Users className="w-8 h-8 text-white mx-auto mb-2" />}
                    <p className="text-white text-center font-medium">{option}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center items-center gap-4 mb-8 text-sm text-white/60">
                {t.miniSteps.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex items-center bg-white/10 rounded-full px-3 py-1">
                      {index === 0 && <Clock className="w-3 h-3 mr-1" />}
                      {index === 1 && <ShoppingBag className="w-3 h-3 mr-1" />}
                      {step}
                    </div>
                    {index < t.miniSteps.length - 1 && <span className="mx-2">•</span>}
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <Button size="lg" className="bg-[var(--brand-600)] hover:bg-[var(--brand-500)] h-12 rounded-lg px-8">
                  {t.plannerBtn}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* AI Assistant */}
      <section className="py-24 relative" style={{ background: 'var(--gradient-deep-blue)' }}>
        {/* Enhanced background with sparkles */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/5 to-transparent">
          <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-white/20 rounded-full animate-pulse delay-1500"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center gap-2 mb-4">
              {t.aiBadges.map((badge, index) => (
                <Badge key={index} className="bg-white/20 text-white border-white/30 text-xs px-3 py-1">
                  <Sparkles className="w-3 h-3 mr-1" />
                  {badge}
                </Badge>
              ))}
            </div>
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                <Brain className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl text-white mb-2">
              {t.aiTitle}
            </h2>
            <h3 className="text-3xl md:text-4xl text-white mb-6">
              <span style={{ fontFamily: 'var(--font-pacifico)', color: 'var(--brand-400)' }}>
                {t.aiSubtitle}
              </span>
            </h3>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-4">
              {t.aiDesc}
            </p>
            <div className="flex justify-center items-center gap-2 text-lg text-white/70 mb-8">
              <MessageCircle className="w-5 h-5" />
              <span>{t.aiFeatures}</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {t.aiCards.map((feature, index) => {
              const IconComponent = feature.icon === 'Zap' ? Zap : feature.icon === 'Heart' ? Heart : Target
              return (
                <Card key={index} className="bg-white/10 border-white/20 rounded-2xl hover:bg-white/15 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[var(--brand-400)] to-[var(--teal-400)] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h4 className="text-xl text-white mb-3 font-semibold">{feature.title}</h4>
                    <p className="text-white/80 mb-4">{feature.desc}</p>
                    <div className="space-y-2">
                      {feature.features.map((feat, featIndex) => (
                        <div key={featIndex} className="flex items-center justify-center gap-2 text-sm text-white/70">
                          <CheckCircle className="w-3 h-3 text-[var(--teal-400)]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          
          {/* Enhanced CTA Section */}
          <div className="text-center">
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
                <Button 
                  size="lg" 
                  className="bg-white text-[var(--brand-600)] hover:bg-gray-100 h-12 rounded-lg px-8 group"
                  onClick={() => window.open('https://egy-safary.odoo.com/', '_blank')}
                >
                  <Brain className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  {t.aiBtn}
                </Button>
                <div className="flex items-center">
                  <Badge className="bg-[var(--warning)] text-white mr-2 animate-pulse">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {t.limitedOffer}
                  </Badge>
                  <span className="text-white/80 text-sm">{t.limitedText}</span>
                </div>
              </div>
              
              {/* Progress indicator */}
              <div className="flex justify-center items-center gap-2 mb-4">
                <div className="text-white/60 text-sm">{isArabic ? 'المستخدمين النشطين:' : 'Active Users:'}</div>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((_, i) => (
                    <div key={i} className={`w-2 h-2 rounded-full ${i < 5 ? 'bg-green-400' : 'bg-white/20'}`}></div>
                  ))}
                </div>
                <div className="text-white/60 text-sm">1,247+ {isArabic ? 'مستخدم نشط' : 'active users'}</div>
              </div>
              
              <p className="text-white/60 text-sm">{t.comingSoon}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Packages Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center gap-2 mb-4">
              <Badge className="bg-[var(--brand-600)]/10 text-[var(--brand-600)] border-[var(--brand-600)]/20 text-xs px-3 py-1">
                <Plane className="w-3 h-3 mr-1" />
                {isArabic ? 'الباقات' : 'Packages'}
              </Badge>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4 text-[var(--ink-900)]">
              {t.packagesTitle}{' '}
              <span style={{ fontFamily: 'var(--font-pacifico)', color: 'var(--brand-600)' }}>
                {t.packagesAccent}
              </span>
            </h2>
            <p className="text-xl text-[var(--ink-500)] max-w-2xl mx-auto mb-8">
              {t.packagesSubtitle}
            </p>
            
            {/* Package View Toggle */}
            <div className="flex justify-center gap-2 mb-8">
              <Button size="sm" className="bg-[var(--brand-600)] text-white">
                <Calendar className="w-4 h-4 mr-1" />
                {t.packagesView}
              </Button>
              <Button size="sm" variant="outline">
                <TrendingUp className="w-4 h-4 mr-1" />
                {t.packagesCompare}
              </Button>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-6">
            {t.packages.map((pkg, index) => {
              const getPackageIcon = (name) => {
                if (name.includes('VIP') || name.includes('فوياجر')) return Crown
                if (name.includes('Adventure') || name.includes('المغامر')) return Compass
                if (name.includes('Explorer') || name.includes('المستكشف')) return Map
                return Car
              }
              
              const getPackageColor = (color) => {
                const colors = {
                  gold: 'from-yellow-400 to-yellow-600',
                  teal: 'from-teal-400 to-teal-600',
                  blue: 'from-blue-400 to-blue-600',
                  purple: 'from-purple-400 to-purple-600'
                }
                return colors[color] || colors.blue
              }
              
              const PackageIcon = getPackageIcon(pkg.name)
              
              return (
                <Card key={index} className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  pkg.popular ? 'border-yellow-400 shadow-lg' : 'border-gray-200'
                }`}>
                  {pkg.popular && (
                    <div className="absolute -top-0 -right-0 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-xs font-semibold py-1 px-3 rounded-bl-lg">
                      {pkg.popular}
                    </div>
                  )}
                  
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${getPackageColor(pkg.color)} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <PackageIcon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2 text-[var(--ink-900)]">{pkg.name}</h3>
                    
                    <div className="text-center mb-6">
                      <span className="text-3xl font-bold text-[var(--ink-900)]">{pkg.price}</span>
                      <span className="text-sm text-[var(--ink-500)] ml-1">
                        {pkg.currency} {pkg.period}
                      </span>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      {pkg.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-[var(--ink-600)] text-left">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600' : 'bg-[var(--brand-600)] hover:bg-[var(--brand-500)]'} text-white rounded-lg h-12 font-semibold`}>
                      {pkg.cta}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Curated Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-[var(--ink-900)]">
              {t.curatedTitle}{' '}
              <span style={{ fontFamily: 'var(--font-pacifico)', color: 'var(--brand-600)' }}>
                {t.curatedAccent}
              </span>
            </h2>
            <p className="text-xl text-[var(--ink-500)] max-w-2xl mx-auto">
              {t.curatedSubtitle}
            </p>
            <div className={`text-${isArabic ? 'left' : 'right'} mt-4`}>
              <a href="https://egy-safary.odoo.com/all-restaurants" className="text-[var(--brand-600)] hover:text-[var(--brand-500)] font-medium">
                {t.viewAll}
              </a>
            </div>
          </div>

          {/* Restaurants & Cafés */}
          <div className="mb-20">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-semibold text-[var(--ink-900)]">{t.restaurantsTitle}</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.restaurants.map((restaurant, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 rounded-2xl">
                  <div className="aspect-[16/11] relative">
                    <ImageWithFallback
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-full object-cover rounded-t-2xl"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-[var(--ink-700)] backdrop-blur-sm">
                        <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                        {restaurant.rating}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2 text-[var(--ink-900)]">{restaurant.name}</h4>
                    <p className="text-sm text-[var(--ink-500)] mb-2">{restaurant.cuisine}</p>
                    <p className="text-xs text-[var(--brand-600)] mb-4 font-medium">{restaurant.specialty}</p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 rounded-lg">
                        {t.viewMenu}
                      </Button>
                      <Button 
                        size="sm" 
                        className="flex-1 bg-[var(--brand-600)] hover:bg-[var(--brand-500)] rounded-lg"
                        onClick={() => window.open(restaurant.link, '_blank')}
                      >
                        {t.bookNow}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Shopping & Local Finds */}
          <div className="mb-20">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-semibold text-[var(--ink-900)]">{t.shoppingTitle}</h3>
              <a href="https://egy-safary.odoo.com/all-stores" className="text-[var(--brand-600)] hover:text-[var(--brand-500)] font-medium">
                {t.discoverStores}
              </a>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {t.shops.map((shop, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 rounded-2xl border">
                  <div className="aspect-video relative">
                    <ImageWithFallback
                      src={shop.image}
                      alt={shop.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h4 className="font-semibold mb-2 text-[var(--ink-900)]">{shop.name}</h4>
                    <p className="text-sm text-[var(--ink-500)] mb-3">{shop.category}</p>
                    <div className="flex justify-center gap-2 mb-4">
                      {shop.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} className="bg-[var(--brand-600)]/10 text-[var(--brand-600)]">
                          {tag}
                        </Badge>
                      ))}
                      {shop.promo && (
                        <Badge className="bg-[var(--warning)] text-white">
                          {shop.promo}
                        </Badge>
                      )}
                    </div>
                    <Button 
                      className="w-full bg-[var(--brand-600)] hover:bg-[var(--brand-500)] h-10 rounded-lg"
                      onClick={() => window.open(shop.link, '_blank')}
                    >
                      {t.visitStore}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Enhanced Landmarks & Activities */}
          <div>
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-semibold text-[var(--ink-900)]">{t.landmarksTitle}</h3>
              <a href="https://egy-safary.odoo.com/all-places" className="text-[var(--brand-600)] hover:text-[var(--brand-500)] font-medium">
                {t.morePlaces}
              </a>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {t.landmarks.map((landmark, index) => {
                const IconComponent = landmark.icon === 'Ship' ? Ship : landmark.icon === 'TreePine' ? TreePine : Building2
                return (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 rounded-2xl group">
                    <div className="aspect-video relative">
                      <ImageWithFallback
                        src={landmark.image}
                        alt={landmark.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[var(--brand-600)] text-white flex items-center gap-1">
                          <IconComponent className="w-3 h-3" />
                          {landmark.type}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h4 className="text-xl font-semibold mb-1">{landmark.name}</h4>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {landmark.duration}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {landmark.bestTime}
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-[var(--ink-500)] text-sm mb-4 leading-relaxed">
                        {landmark.description}
                      </p>
                      
                      <div className="mb-4">
                        <h5 className="font-semibold text-[var(--ink-900)] mb-2 text-sm flex items-center gap-1">
                          <Star className="w-3 h-3 text-[var(--brand-600)]" />
                          {isArabic ? 'أبرز المعالم:' : 'Highlights:'}
                        </h5>
                        <div className="flex flex-wrap gap-1">
                          {landmark.highlights.map((highlight, hIndex) => (
                            <Badge key={hIndex} variant="secondary" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1 rounded-lg group">
                          <MapPin className="w-3 h-3 mr-1 group-hover:bounce" />
                          {t.viewDetails}
                        </Button>
                        <Button size="sm" className="flex-1 bg-[var(--brand-600)] hover:bg-[var(--brand-500)] rounded-lg group">
                          <CameraIcon className="w-3 h-3 mr-1 group-hover:rotate-12 transition-transform" />
                          {t.exploreNow}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, var(--brand-600), var(--teal-500))' }}>
        <div className="max-w-4xl mx-auto px-4">
          <Card className="rounded-3xl shadow-2xl bg-white/95 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-semibold mb-4 text-[var(--ink-900)]">{t.newsletterTitle}</h3>
              <p className="text-lg text-[var(--ink-500)] mb-8 max-w-2xl mx-auto">
                {t.newsletterSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto mb-4">
                <Input
                  placeholder={t.emailPlaceholder}
                  className={`flex-1 h-12 ${isArabic ? 'rounded-r-lg sm:rounded-l-none border-l-0 sm:border-l' : 'rounded-l-lg sm:rounded-r-none border-r-0 sm:border-r'}`}
                />
                <Button className={`bg-[var(--brand-600)] hover:bg-[var(--brand-500)] h-12 px-8 ${isArabic ? 'rounded-l-lg sm:rounded-r-none' : 'rounded-r-lg sm:rounded-l-none'}`}>
                  <Mail className="w-4 h-4 mr-2" />
                  {t.subscribe}
                </Button>
              </div>
              <p className="text-sm text-[var(--ink-500)]">
                {t.privacyText}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}