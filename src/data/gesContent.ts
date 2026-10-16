export interface NavItem {
  name: string;
  href: string;
  badge?: string;
}

export interface SchoolItem {
  id: string;
  name: string;
  shortName: string;
  location: string;
  established?: string;
  curriculum: string;
  grades?: string;
  ages?: string;
  website: string;
  websiteDisplay: string;
  mainImg: string;
  logo: string;
  description: string;
  extendedDescription?: string;
  facilities?: string[];
  gallery: string[];
}

export interface LeaderMember {
  name: string;
  role: string;
  img: string;
  bio?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  author: string;
  date: string;
  img: string;
  url: string;
  category: string;
  summary?: string;
  language?: string;
}

export interface StoryVideo {
  thumb: string;
  title: string;
  url: string;
  embedUrl: string;
  duration?: string;
}

export interface OperationalModel {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  img: string;
  desc: string;
  features: string[];
}

export interface QualityIndicator {
  num: string;
  title: string;
  img: string;
  category: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export const GES_DATA = {
  brand: {
    name: "Global Education Services LLC",
    shortName: "GES Quality Education",
    legalName: "Global Education Services L.L.C.",
    slogan: "The Future of Learning",
    legacySlogan: "Quality Education",
    establishedYear: 2012,
    yearsOfExcellence: 13, // 2012 to 2025
    founder: "Honorable Sheikh Salim Hamood Al Hashmi",
    headquarters: {
      address: "Airport Heights, P.O. Box 1756, Postal Code 111",
      city: "Muscat",
      country: "Sultanate of Oman",
      phone: "+968 24554422",
      phoneFormatted: "+968 2455 4422",
      email: "info@ges.om",
      careersEmail: "careers@ges.om",
      geo: { lat: 23.6302, lng: 58.1937 }
    },
    socials: [
      { name: "Facebook", url: "https://www.facebook.com/GES-Global-Education-Services-109478385115626", icon: "facebook" },
      { name: "Instagram", url: "https://www.instagram.com/ges.education/", icon: "instagram" },
      { name: "Twitter / X", url: "https://twitter.com/GES_education", icon: "twitter" },
      { name: "LinkedIn", url: "https://www.linkedin.com", icon: "linkedin" },
      { name: "YouTube", url: "https://www.youtube.com", icon: "youtube" }
    ],
    logos: {
      lightBg: "/assets/img/banner/ges-logo-internal.png",
      darkBg: "/assets/img/banner/ges-logo.png",
      favicon: "/assets/img/favicon.ico"
    },
    colors: {
      primaryNavy: "#1F265A",
      midnightNavy: "#102448",
      royalBlue: "#0064D3",
      azureBlue: "#3365B0",
      accentRed: "#E53239",
      accentGold: "#F5AF02",
      accentGreen: "#85B826",
      neutralDark: "#0F172A",
      neutralLight: "#F8FAFC"
    }
  },

  navigation: [
    { name: "Home", href: "/" },
    { name: "About GES", href: "/about" },
    { name: "Operational Models", href: "/operational" },
    { name: "Our Schools", href: "/schools" },
    { name: "Partner With Us", href: "/partner" },
    { name: "Careers", href: "/careers" },
    { name: "Our Impact", href: "/news" },
    { name: "Contact", href: "/contact" }
  ],

  heroThemes: [
    {
      id: "excellence",
      number: "01",
      tag: "Quest For Excellence",
      title: "Transforming Minds & Shaping Leaders",
      subtitle: "Delivering world-class private education across the Sultanate of Oman since 2012 with an unwavering standard of excellence.",
      ctaText: "Discover Operational Models",
      ctaLink: "/operational",
      secondaryCtaText: "Explore Our Campuses",
      secondaryCtaLink: "/schools",
      image: "/assets/img/banner/ch-1.png",
      badge: "British Curriculum & Cognia Accredited"
    },
    {
      id: "meeting",
      number: "02",
      tag: "Executive Leadership",
      title: "Request an Institutional Meeting",
      subtitle: "Connect with our academic leadership, advisory board, and school operations specialists for strategic consultations.",
      ctaText: "Schedule Executive Meeting",
      ctaLink: "/contact",
      secondaryCtaText: "Partner Opportunities",
      secondaryCtaLink: "/partner",
      image: "/assets/img/banner/ch-2.png",
      badge: "Public-Private Partnerships"
    },
    {
      id: "community",
      number: "03",
      tag: "Inside GES Community",
      title: "A Vibrant Ecosystem of 5,000+ Learners",
      subtitle: "Homegrown Omani legacy built on international rigor, nurturing future-ready problem solvers and global citizens.",
      ctaText: "Explore Our Story",
      ctaLink: "/about",
      secondaryCtaText: "Watch Student Stories",
      secondaryCtaLink: "/news",
      image: "/assets/img/banner/ch-3.png",
      badge: "K-12 & Early Learning Network"
    },
    {
      id: "support",
      number: "04",
      tag: "Continuous Commitment",
      title: "24-Hour Effective Educational Support",
      subtitle: "Unmatched operational infrastructure, continuous teacher development, and robust family-school engagement.",
      ctaText: "Contact Administration",
      ctaLink: "/contact",
      secondaryCtaText: "Career Opportunities",
      secondaryCtaLink: "/careers",
      image: "/assets/img/banner/ch-4.png",
      badge: "Centralized Quality Assurance"
    }
  ],

  impactStats: [
    {
      value: "5,000+",
      label: "Enrolled Students",
      sublabel: "Across K-12 and Early Childhood centers",
      icon: "/assets/img/student.png"
    },
    {
      value: "700+",
      label: "Qualified Educators & Staff",
      sublabel: "Top-tier international academic talent",
      icon: "/assets/img/emp.png"
    },
    {
      value: "100+",
      label: "Graduated Alumni",
      sublabel: "Pursuing higher education worldwide",
      icon: "/assets/img/grad.png"
    },
    {
      value: "4",
      label: "Signature Institutions",
      sublabel: "In Muscat with major expansion underway",
      icon: "/assets/img/schools.png"
    }
  ],

  awards: [
    {
      year: "2021",
      title: "Alam Al Iktisaad Award",
      sub: "Best Company (Education Sector)",
      pdf: "/assets/downloads/awards.pdf"
    },
    {
      year: "2022",
      title: "Alam Al Iktisaad Award",
      sub: "Education Company of the Year",
      pdf: "/assets/downloads/awards.pdf"
    },
    {
      year: "Accredited",
      title: "Cognia Global Accreditation",
      sub: "International Seal of Educational Quality",
      pdf: "/assets/downloads/awards.pdf"
    }
  ],

  aboutIntro: {
    heading: "About GES Quality Education",
    paragraphs: [
      "Global Education Services Company “GES” Quality Education is a leading private education group in the Sultanate of Oman, dedicated to delivering world-class K-12 premium schools, preschools, and early learning centers. Since our founding in 2012, GES has been committed to nurturing young minds and empowering them with the knowledge, skills, and values needed to thrive in an ever-changing world.",
      "As a homegrown Omani brand, GES is the lifelong dream of the Al Hashmi family, who envisioned a transformative educational journey for the children of Oman. Our mission is to provide quality education that inspires innovation, fosters leadership, and cultivates a lifelong love for learning.",
      "Over the years, GES’s team of top-tier talented experts with extensive experience has focused on opening new schools, turning around failing schools, and growing and improving existing ones. 2025 marks our 13th year since establishment, maintaining an unwavering commitment to continuous improvement on productive learning environments, equitable resource allocation that meets the needs of learners, and effective leadership."
    ]
  },

  chairmanMessage: {
    name: "Honorable Sheikh Salim Hamood Al Hashmi",
    title: "Chairman",
    photo: "/assets/img/chirman.png",
    introQuote: "“We believe that every child, when given the right opportunities and access to quality education, can learn, achieve, and make a meaningful difference in their lives and the world around them.”",
    paragraphs: [
      "We believe that every child, when given the right opportunities and access to quality education, can learn, achieve, and make a meaningful difference in their lives and the world around them. Every child is unique, and with the right guidance, support, and encouragement, they can unlock their full potential and become agents of positive change.",
      "This belief drives us to provide our students with a safe, supportive, and positive school environment that understands and addresses their individual needs. By incorporating diverse teaching methods and learning styles, we ensure that every student is given the opportunity to succeed and thrive.",
      "Education is a collaborative effort. When schools, families, and communities work together, students become more successful, aware of their surroundings, and equipped to contribute to the growth and well-being of their communities. This is why we actively encourage parental involvement in their children’s education and seize every opportunity to engage with the broader community.",
      "Our mission is to instill in students the importance of receiving a high-quality education and to nurture them into lifelong learners who are curious, adaptable, and driven to continuously learn and grow. We aim to prepare them not only to thrive in an ever-changing world but also to lead with confidence, empathy, and innovation."
    ]
  },

  vicePresidentMessage: {
    name: "Sheikh Julanda Bin Salim Al Hashmi",
    title: "Vice President",
    photo: "/assets/img/members/julanda.jpg",
    quote: "“We are able to build trust through a demonstrated ability to optimize performance and achieve desired business results. We are passionate about professional and personal development to continue to bring the highest values to the market. We are continuously in pursuit of fostering strategic economic and development endeavors between the Sultanate of Oman and different countries around the world.”"
  },

  cogniaEndorsement: {
    speaker: "Dr. Mark A. Elgart",
    speakerTitle: "President and CEO of Cognia",
    quote: "“Cognia Accreditation is a rigorous process that focuses the entire cooperation and its community on the primary goal of preparing lifelong learners in engaging environments where all students can flourish. Global Education Services Company are to be commended for demonstrating that they have met high standards, and is making progress on key indicators that impact student learning.”"
  },

  pillars: {
    vision: {
      title: "Our Vision",
      statement: "To empower a generation of innovative leaders equipped with the knowledge, skills, and values to thrive in a globalized world and contribute to the advancement of society."
    },
    mission: {
      title: "Our Mission",
      statement: "To provide exceptional education that inspires curiosity, fosters lifelong learning, and prepares students to achieve their full potential and make a positive impact on the world."
    },
    values: {
      title: "ELEVATE Framework",
      subtitle: "Our Core Commitment to Education",
      items: [
        { key: "Excellence", description: "Striving for the highest academic and ethical standards." },
        { key: "Leadership", description: "Empowering students to take initiative and inspire change." },
        { key: "Equity", description: "Ensuring inclusive, personalized learning for all." },
        { key: "Vision", description: "Driving innovation and future-focused education." },
        { key: "Adaptability", description: "Embracing change and continuous growth." },
        { key: "Technology", description: "Utilizing advanced tools for effective learning." },
        { key: "Empowerment", description: "Cultivating responsible, globally minded individuals." }
      ]
    },
    innovation: {
      title: "Innovation and Research",
      statement: "We lead in educational innovation by offering world-class curricula and forging partnerships with top institutions. Our focus is on creating a dynamic learning environment where students can explore their talents, pursue excellence, and contribute to the future of knowledge and society.",
      hubDescription: "In pursuit of empowering inventive problem solvers, GES has partnered with leading educational institutions to establish an Innovation and Research Hub in the heart of Muscat, providing students with access to cutting-edge technological laboratories and fostering imagination, entrepreneurship, and collaboration."
    }
  },

  managementTeam: [
    {
      name: "Honorable Sheikh Salim Hamood Al Hashmi",
      role: "Chairman",
      img: "/assets/img/chirman.png",
      bio: "Founder and Chairman of Global Education Services LLC, providing visionary institutional leadership and direction since 2012."
    },
    {
      name: "Sheikh Julanda Salim Hamood Al Hashmi",
      role: "Vice President",
      img: "/assets/img/members/julanda.jpg",
      bio: "Leads strategic development, public-private partnerships, and regional educational expansion initiatives."
    },
    {
      name: "Sheikha Janat Salim Hamood Al Hashmi",
      role: "Chief Executive Officer",
      img: "/assets/img/members/Jannat.jpg",
      bio: "Oversees executive strategy, institutional governance, operational performance, and academic transformation."
    },
    {
      name: "Sheikha Jinan Salim Hamood Al Hashmi",
      role: "Managing Director",
      img: "/assets/img/members/jinan.jpg",
      bio: "Directs organizational operations, community partnerships, brand growth, and early years curriculum implementation."
    },
    {
      name: "Ms. Sarah Saeed",
      role: "Head of Academics",
      img: "/assets/img/members/Sarah.jpg",
      bio: "Guides curriculum delivery, British National Curriculum standards, teacher pedagogical training, and student outcomes."
    },
    {
      name: "Mr. Shanmuganand Hariharan",
      role: "Director of Finance & Accounts",
      img: "/assets/img/members/Heri.jpg",
      bio: "Oversees corporate financial architecture, capital projects, asset management, and institutional audit integrity."
    },
    {
      name: "Ms. Randa Al Ahmadieh",
      role: "Head of Administration",
      img: "/assets/img/members/Randa.jpg",
      bio: "Manages centralized human resources, administrative systems, admissions coordination, and operational compliance."
    }
  ],

  timeline: [
    {
      year: "2012",
      title: "The Journey Begins",
      description: "Global Education Services L.L.C. (GES Quality Education) founded by the Al Hashmi family in Muscat with the ambition to build Oman's premier private education group.",
      highlight: true
    },
    {
      year: "2013",
      title: "First Educational Operations & Training",
      description: "Launch of foundational educational programs and specialized training institute in Muscat."
    },
    {
      year: "2015",
      title: "Al Shomoukh International Private School",
      description: "Official launch of Al Shomoukh International Private School (SIPS) in Hay Al Hail, offering K-12 British National Curriculum and bilingual tracks.",
      highlight: true
    },
    {
      year: "2016",
      title: "Reggio Emilia Early Childhood Foundation",
      description: "Pioneering the Reggio Emilia inquiry-based approach and EYFS foundation in Oman's early childhood sector."
    },
    {
      year: "2017",
      title: "Approved Edexcel Examination Centre",
      description: "Accredited by Pearson Edexcel to deliver official UK IGCSE and A-Level examinations in Oman."
    },
    {
      year: "2019",
      title: "Major PPP Strategic Partnership",
      description: "Historic Public-Private Partnership agreement signed with Omani ministries and Education Council, accelerating school management models.",
      highlight: true
    },
    {
      year: "2021",
      title: "Cognia Accreditation & Alam Al Iktisaad",
      description: "Achieved international Cognia Global Accreditation and honored with the Alam Al Iktisaad Best Company Award in Education.",
      highlight: true
    },
    {
      year: "2022",
      title: "Al Mouj Sustainable Campus & Award",
      description: "Official launch of the flagship Shomoukh Early Childhood Education campus at Al Mouj Muscat, recognized as Education Company of the Year.",
      highlight: true
    },
    {
      year: "2025",
      title: "13 Years of Excellence & World Academy",
      description: "Celebrating 13 years of leadership in education with 5,000+ students, advancing towards the Shomoukh World Academy landmark project and Oman Vision 2040.",
      highlight: true
    }
  ],

  schools: [
    {
      id: "sips",
      name: "Al Shomoukh International Private School (SIPS)",
      shortName: "Al Shomoukh International (SIPS)",
      location: "Hay Al Hail, Al Jadeed Al Hail South, Muscat – Oman",
      curriculum: "UK National English Curriculum (British) & Bilingual Stream",
      grades: "Kindergarten to Grade 12 (IGCSE & A-Levels)",
      website: "http://www.alshomoukh.com/",
      websiteDisplay: "www.alshomoukh.com",
      mainImg: "/assets/img/about/s1.jpg",
      logo: "/assets/img/about/sis-logo.jpg",
      description: "Al Shomoukh International Private School (SIPS) is one of Oman’s top educational schools, renowned for delivering exceptional academic excellence through the National English Curriculum (British) for K-12 students. Established in 2015 alongside a bilingual stream for students seeking a diverse academic pathway, SIPS offers a world-class learning environment that welcomes students from diverse cultural and national backgrounds, fostering inclusivity and global citizenship.",
      extendedDescription: "With a strong reputation for academic excellence across Oman, SIPS has consistently achieved outstanding outcomes, earning its place among the leading private schools in the country. The school is an approved Edexcel examination centre, fully compliant with Ministry of Education standards, preparing learners for premier global universities.",
      facilities: [
        "Sporting fields & Athletics tracks",
        "Dining facilities & Student cafeteria",
        "Science laboratories (Physics, Chemistry, Biology)",
        "Advanced Computer laboratories",
        "Library & Comprehensive Reading Areas",
        "Multi-Purpose Event & Sports Halls",
        "Dedicated Kindergarten Play Areas",
        "School Transportation network",
        "Administration offices & Boardrooms",
        "Auditorium & Performance Theater",
        "Smart Interactive Classrooms"
      ],
      gallery: [
        "/assets/img/about/s1.jpg",
        "/assets/img/about/s2.jpg",
        "/assets/img/about/s3.jpg",
        "/assets/img/about/s4.jpg",
        "/assets/img/about/s5.jpg",
        "/assets/img/about/s6.jpg",
        "/assets/img/about/s7.jpg",
        "/assets/img/about/s8.jpg"
      ]
    },
    {
      id: "shomoukh-qurum",
      name: "Shomoukh for Early Childhood Education Al Qurum Campus",
      shortName: "Shomoukh ECE Al Qurum",
      location: "Al Saruj St., Shatti Al Qurum, Muscat - Oman",
      curriculum: "Reggio Emilia Approach & UK Early Years Foundation Stage (EYFS)",
      ages: "Children aged 1 to 4 years old",
      website: "http://www.shomoukh.com/",
      websiteDisplay: "www.shomoukh.com",
      mainImg: "/assets/img/about/c1.jpg",
      logo: "/assets/img/about/snlogo.jpg",
      description: "Shomoukh Early Childhood Education Center at Al Qurum Campus is one of Oman’s leading early childhood education centers, providing exceptional care in a purpose-built environment designed for children aged one to four. With a wide range of programs and a curriculum inspired by the Reggio Emilia Approach, the center fosters creativity, critical thinking, and holistic development.",
      extendedDescription: "Our highly qualified educators and state-of-the-art facilities ensure children are nurtured, engaged, and well-prepared for future learning. Trusted by families across Oman, Shomoukh ECE is a second home for children, offering a safe, stimulating, and aesthetically inspiring space to thrive.",
      facilities: [
        "Purpose-built Reggio Emilia ateliers",
        "Sensory and outdoor discovery gardens",
        "Gross motor play arenas & child-safe splash pools",
        "Parent-educator consultation suites",
        "Nutritious meal preparation facilities",
        "High-security biometric check-in/out"
      ],
      gallery: [
        "/assets/img/about/c1.jpg",
        "/assets/img/about/c2.jpg",
        "/assets/img/about/c3.jpg",
        "/assets/img/about/c4.jpg",
        "/assets/img/about/c5.jpg"
      ]
    },
    {
      id: "shomoukh-mouj",
      name: "Shomoukh for Early Childhood Education Al Mouj Campus",
      shortName: "Shomoukh ECE Al Mouj",
      location: "Al Mouj, Muscat – Oman",
      curriculum: "British Curriculum & Reggio Emilia Approach",
      ages: "Preschool & Early Years Learners",
      website: "http://www.shomoukh.com/",
      websiteDisplay: "www.shomoukh.com",
      mainImg: "/assets/img/about/m1.jpg",
      logo: "/assets/img/about/sis-nur-logo.jpg",
      description: "The Shomoukh for Early Childhood Education at Al Mouj Campus is a high-class early childhood education center of excellence, setting the benchmark for preschools across the MENA region. Renowned for its award-winning sustainable initiatives and innovative educational programs, it provides a world-class learning environment tailored to foster creativity, growth, and holistic development.",
      extendedDescription: "Serving a diverse student body, the center is committed to preparing young learners for a bright future through its cutting-edge curriculum and dedication to excellence. Families trust Al Shomoukh Nursery for its unmatched standards, making it a recognized leader in early childhood education across the region.",
      facilities: [
        "Eco-friendly sustainable campus architecture",
        "Natural light-infused learning ateliers",
        "Creative arts, music & drama performance zones",
        "Interactive STEM early learning stations",
        "Safe rubberized exploratory outdoor grounds",
        "Pediatric wellness and observation clinic"
      ],
      gallery: [
        "/assets/img/about/m1.jpg",
        "/assets/img/about/m2.jpg",
        "/assets/img/about/m3.jpg",
        "/assets/img/about/m4.jpg",
        "/assets/img/about/m5.jpg",
        "/assets/img/about/m6.jpg",
        "/assets/img/about/m7.jpg",
        "/assets/img/about/m8.jpg",
        "/assets/img/about/m9.jpg",
        "/assets/img/about/m10.jpg"
      ]
    },
    {
      id: "world-academy",
      name: "Shomoukh World Academy & Innovation Hub",
      shortName: "Shomoukh World Academy",
      location: "Al Mouj Muscat, Sultanate of Oman",
      curriculum: "Comprehensive K-12 International Curriculum & Innovation Hub",
      grades: "Pre-K to Grade 12 | Capacity: 2,800 Students",
      website: "http://www.ges.om/",
      websiteDisplay: "www.ges.om",
      mainImg: "/assets/img/project-1.jpg",
      logo: "/assets/img/banner/ges-logo-internal.png",
      description: "The Shomoukh World Academy is conceptualized and visualized as a premium educational facility combining K-12 schooling and an Innovation and Research Hub. Situated on a prime 24,361 sqm campus at Al Mouj Muscat, between Seeb and Muscat, the academy serves a catchment population of over 250,000 residents and stands as an upcoming landmark in regional education.",
      extendedDescription: "Designed to meet the highest sustainability and technological standards, the academy features state-of-the-art STEM and robotics laboratories, olympic-scale athletics complexes, performing arts theaters, and collaborative learning hubs directly aligned with Oman Vision 2040.",
      facilities: [
        "24,361 sqm Master-planned educational campus",
        "Innovation & Research Hub laboratories",
        "Olympic swimming pool & indoor sports arena",
        "750-seat professional auditorium",
        "Digital media studios & maker spaces",
        "Sustainable low-carbon campus design"
      ],
      gallery: [
        "/assets/img/project-1.jpg",
        "/assets/img/operational/banner.jpg",
        "/assets/img/operational/s-1.jpg"
      ]
    }
  ],

  operationalModels: [
    {
      id: "private-schools",
      num: "01",
      title: "PRIVATE SCHOOLS",
      subtitle: "Turnkey K-12 Academic Excellence",
      img: "/assets/img/operational/s-1.jpg",
      desc: "GES operates premium-quality Pre-K/K-12 schools and training institutes, designed to meet and exceed international academic standards. With a focus on excellence, these institutions undergo rigorous internal and external quality assurance reviews to maintain a globally competitive edge. GES fosters a student-centered approach that prioritizes innovation, high expectations, and holistic development, ensuring each school meets the highest benchmarks in education.",
      features: [
        "Full institutional operations and governance",
        "Accreditation adherence (Cognia, Edexcel, MoE)",
        "Rigorous continuous quality assurance reviews",
        "Holistic student development frameworks"
      ]
    },
    {
      id: "ppp",
      num: "02",
      title: "PUBLIC-PRIVATE PARTNERSHIPS (PPP)",
      subtitle: "Strategic National Educational Alliances",
      img: "/assets/img/operational/s-2.jpg",
      desc: "As a leader in public-private partnerships, GES leverages Oman’s newly adopted PPP framework to create impactful opportunities for educational investment and development. These initiatives drive national economic diversification, promote innovation in education, and support the delivery of high-quality learning experiences aligned with global standards.",
      features: [
        "Government-backed educational development",
        "Aligning public sector objectives with private agility",
        "Sustainable funding and capital infrastructure models",
        "Direct alignment with Oman's National Strategy for Education 2040"
      ]
    },
    {
      id: "licensed-schools",
      num: "03",
      title: "LICENSED SCHOOLS",
      subtitle: "Intellectual Property & Quality Frameworks",
      img: "/assets/img/operational/s-3.jpg",
      desc: "The GES licensing program enables schools to integrate its proven operational model and intellectual property within their unique management structure. This partnership ensures schools benefit from GES’s expertise while retaining their distinct identity, fostering innovation and excellence in education delivery.",
      features: [
        "Access to proprietary curriculum frameworks",
        "Centralized teacher training and recruitment pipelines",
        "Comprehensive branding and quality benchmarks",
        "Autonomous institutional management with GES pedigree"
      ]
    },
    {
      id: "master-franchise",
      num: "04",
      title: "MASTER FRANCHISE",
      subtitle: "Territorial Expansion Across GCC & MENA",
      img: "/assets/img/operational/s-4.jpg",
      desc: "GES offers exclusive master franchise opportunities, granting partners the authority to manage all franchising activities within a specified territory or country. This model ensures consistent quality, operational excellence, and the strategic expansion of the GES brand while empowering franchisees to lead in their respective regions.",
      features: [
        "Exclusive territorial rights for countries and regions",
        "End-to-end franchise operational playbook",
        "Continuous regional audit, advisory and branding support",
        "Economies of scale in procurement and technology"
      ]
    }
  ],

  qualityIndicators: [
    {
      num: "01",
      title: "Fully aligned curriculum with country standards",
      img: "/assets/img/operational/o-1.png",
      category: "Academic Quality"
    },
    {
      num: "02",
      title: "Advanced software systems to enhance operational efficiency",
      img: "/assets/img/operational/o-2.png",
      category: "Technology"
    },
    {
      num: "03",
      title: "Concept-focused, well-researched educational materials",
      img: "/assets/img/operational/o-3.png",
      category: "Curriculum"
    },
    {
      num: "04",
      title: "Recruitment and professional development for educators",
      img: "/assets/img/operational/o-4.png",
      category: "Human Capital"
    },
    {
      num: "05",
      title: "Cutting-edge research and development methods designed to optimize results",
      img: "/assets/img/operational/o-5.png",
      category: "Innovation"
    },
    {
      num: "06",
      title: "Ongoing academic quality control through computerized monitoring",
      img: "/assets/img/operational/o-6.png",
      category: "Governance"
    },
    {
      num: "07",
      title: "Extensive business management and support services",
      img: "/assets/img/operational/o-7.png",
      category: "Management"
    },
    {
      num: "08",
      title: "Participation in annual regional events for administrators",
      img: "/assets/img/operational/o-8.png",
      category: "Leadership"
    },
    {
      num: "09",
      title: "Regular visits from experienced teams of education and business professionals",
      img: "/assets/img/operational/o-9.png",
      category: "Assurance"
    },
    {
      num: "10",
      title: "Networking opportunities with other GES Network schools",
      img: "/assets/img/operational/o-10.png",
      category: "Ecosystem"
    }
  ],

  careerSteps: [
    {
      num: "01",
      title: "You Complete the Online Application",
      description: "Submit your comprehensive profile, curriculum vitae, verified academic credentials, and statement of educational philosophy.",
      img: "/assets/img/careers/step-1.png"
    },
    {
      num: "02",
      title: "We Review the Resume",
      description: "Our human resources and academic leadership team meticulously review each applicant against institutional criteria and ministry accreditation standards.",
      img: "/assets/img/careers/step-2.png"
    },
    {
      num: "03",
      title: "We assess your application for job fit",
      description: "A specialized subject-matter assessment evaluates your pedagogical alignment, leadership capabilities, and student-centered methodology.",
      img: "/assets/img/careers/step-3.png"
    },
    {
      num: "04",
      title: "We contact you for preliminary interview",
      description: "An exploratory interview with our recruitment team discussing your background, teaching philosophy, and institutional fit.",
      img: "/assets/img/careers/step-4.png"
    },
    {
      num: "05",
      title: "We contact you for a second interview",
      description: "In-depth panel interview with Heads of Academics, School Principals, and executive directors including lesson demonstrations or case reviews.",
      img: "/assets/img/careers/step-5.png"
    },
    {
      num: "06",
      title: "Job Offer Made to the successful candidate",
      description: "Formal offer package with competitive international compensation, relocation assistance, visa sponsorship, and continuous CPD program.",
      img: "/assets/img/careers/step-6.png"
    }
  ],

  partnersAndAccreditations: [
    {
      name: "Ministry of Education - Oman",
      logo: "/assets/img/partners/p-1.jpg",
      url: "https://home.moe.gov.om/?GetLang=en",
      type: "Government Partner"
    },
    {
      name: "Ministry of Labour / Manpower - Oman",
      logo: "/assets/img/partners/p-2.jpg",
      url: "https://www.manpower.gov.om/",
      type: "Regulatory Partner"
    },
    {
      name: "Ministry of Social Development - Oman",
      logo: "/assets/img/partners/p-3.jpg",
      url: "http://www.mosd.gov.om/",
      type: "Child Welfare Partner"
    },
    {
      name: "Cognia Global Accreditation",
      logo: "/assets/img/partners/p-4.jpg",
      url: "https://www.cognia.org",
      type: "International Accreditation"
    },
    {
      name: "ECIS (Educational Collaborative for International Schools)",
      logo: "/assets/img/partners/p-5.jpg",
      url: "https://www.ecis.org",
      type: "Global Membership"
    }
  ],

  brandSchoolsLogos: [
    {
      name: "Al Shomoukh International Private School",
      logo: "/assets/img/about/sis-logo.jpg",
      url: "http://www.alshomoukh.com/"
    },
    {
      name: "Shomoukh Early Childhood Education Al Qurum",
      logo: "/assets/img/about/snlogo.jpg",
      url: "http://www.shomoukh.com/"
    },
    {
      name: "Shomoukh Early Childhood Education Al Mouj",
      logo: "/assets/img/about/sis-nur-logo.jpg",
      url: "http://www.shomoukh.com/"
    }
  ],

  videoStories: [
    {
      thumb: "/assets/img/video-thumb-1.jpg",
      title: "Ceremony Class of 2024\nSIPS",
      url: "https://www.youtube.com/watch?v=GDsGSM-k0Yg",
      embedUrl: "https://www.youtube.com/embed/GDsGSM-k0Yg",
      duration: "Class of 2024 Graduation"
    },
    {
      thumb: "/assets/img/video-thumb-2.jpg",
      title: "Shomoukh Early Childhood Education\nCeremony",
      url: "https://www.youtube.com/watch?v=X8Yx03ZguBY",
      embedUrl: "https://www.youtube.com/embed/X8Yx03ZguBY",
      duration: "Early Years Celebration"
    },
    {
      thumb: "/assets/img/video-thumb-3.jpg",
      title: "Sports Day 2024\nSIPS",
      url: "https://www.youtube.com/watch?v=IFpNJ7AsHWc",
      embedUrl: "https://www.youtube.com/embed/IFpNJ7AsHWc",
      duration: "Athletics Highlights"
    },
    {
      thumb: "/assets/img/video-thumb-4.jpg",
      title: "The 48th Oman National Day Celebration 2018",
      url: "https://youtu.be/NCjXL99py_k",
      embedUrl: "https://www.youtube.com/embed/NCjXL99py_k",
      duration: "National Day"
    },
    {
      thumb: "/assets/img/video-thumb-7.jpg",
      title: "S.I.P.S Art Exhibition",
      url: "https://www.youtube.com/watch?v=Z5MQgE0t08w",
      embedUrl: "https://www.youtube.com/embed/Z5MQgE0t08w",
      duration: "Student Art Showcase"
    },
    {
      thumb: "/assets/img/video-thumb-6.jpg",
      title: "Our Student Story\nSIPS",
      url: "https://youtu.be/KNIyYtQRaXo",
      embedUrl: "https://www.youtube.com/embed/KNIyYtQRaXo",
      duration: "Student Voices"
    }
  ],

  newsItems: [
    {
      id: "news-1",
      title: "Partnership Agreement Signed",
      author: "By: Times of Oman",
      date: "07th May 2019",
      img: "/assets/img/news/news-1.png",
      url: "https://timesofoman.com/article/1254924/oman/education-partnership-agreement-signed",
      category: "latest",
      summary: "Global Education Services Company inks historic educational agreement to expand world-class K-12 operational models in the Sultanate."
    },
    {
      id: "news-2",
      title: "Global Stamp Approval for GES",
      author: "By: Times News Service",
      date: "15th Aug 2021",
      img: "/assets/img/news/19.jpg",
      url: "https://timesofoman.com/article/105452-omani-educational-institution-gets-global-stamp-of-approval",
      category: "latest",
      summary: "GES Quality Education attains Cognia Global Accreditation, demonstrating compliance with premier international educational quality benchmarks."
    },
    {
      id: "news-3",
      title: "اعتراف منظمة كوجنيا الأمريكية بـ GES",
      author: "By: مسقط - الشبيبة",
      date: "12th Aug 2021",
      img: "/assets/img/news/19.jpg",
      url: "https://shabiba.com/article/162472",
      category: "latest",
      summary: "منظمة كوجنيا الأمريكية تمنح الاعتماد الدولي لشركة الخدمات التعليمية العالمية تقديراً لجودة المعايير التعليمية والإدارية.",
      language: "ar"
    },
    {
      id: "news-4",
      title: "Alam Al-Iktisaad Awards 2022",
      author: "By: Zawya Press Release",
      date: "02nd Oct 2022",
      img: "/assets/img/news/20.jpg",
      url: "https://shabiba.com/article/162472",
      category: "latest",
      summary: "GES Quality Education named Education Company of the Year at the prestigious Alam Al-Iktisaad corporate awards in Muscat."
    },
    {
      id: "news-5",
      title: "Education Partnership Agreement Signed",
      author: "By: Edu Council",
      date: "08th May 2019",
      img: "/assets/img/news/news-1.png",
      url: "https://www.educouncil.gov.om/en/article.php?id=4468",
      category: "latest",
      summary: "Oman Education Council reviews strategic private school expansion and public-private cooperation agreements spearheaded by GES."
    },
    {
      id: "news-6",
      title: "NCSI receives students from Al Shomoukh International School",
      author: "By: Webadmin",
      date: "26th Oct 2017",
      img: "/assets/img/news/13.jpg",
      url: "https://www.ncsi.gov.om",
      category: "latest",
      summary: "National Centre for Statistics and Information welcomes Al Shomoukh students for hands-on data science and national development seminars."
    },
    {
      id: "news-7",
      title: "Al Shomoukh International School holds a lecture on ethics, manners",
      author: "By: Muscat Daily",
      date: "04th Nov 2019",
      img: "/assets/img/news/15.jpg",
      url: "https://www.pressreader.com/oman/muscat-daily",
      category: "latest",
      summary: "Distinguished scholars deliver ethical leadership and community manners workshops for senior secondary students at SIPS."
    },
    {
      id: "news-8",
      title: "The National Museum of Oman - School Visit",
      author: "By: @NM_OMAN",
      date: "30th Nov 2016",
      img: "/assets/img/news/8.jpg",
      url: "https://twitter.com/nm_oman",
      category: "latest",
      summary: "Immersive historical excursion to the National Museum of Oman exploring Omani maritime heritage and traditional crafts."
    },
    {
      id: "news-9",
      title: "Partnership Agreement Signed",
      author: "By: Times of Oman",
      date: "07th May 2019",
      img: "/assets/img/news/news-1.png",
      url: "https://timesofoman.com/article/1254924/oman/education-partnership-agreement-signed",
      category: "popular",
      summary: "Prominent regional media coverage of GES’s expanding private education network."
    },
    {
      id: "news-10",
      title: "Global Stamp of Approval for GES",
      author: "By: Times News Service",
      date: "15th Aug 2021",
      img: "/assets/img/news/19.jpg",
      url: "https://timesofoman.com",
      category: "popular",
      summary: "In-depth feature detailing the Cognia accreditation evaluation process across GES institutions."
    },
    {
      id: "news-11",
      title: "Arab Child Conference",
      author: "By: Faiza Al Kalbania",
      date: "21st June 2020",
      img: "/assets/img/news/4.jpg",
      url: "https://alroya.om",
      category: "international",
      summary: "Regional educators convene on progressive childhood psychology and early learning innovations post-pandemic."
    },
    {
      id: "news-12",
      title: "Arab Child Conferences & Curriculum Development",
      author: "By: Khalisa Bint Abdullah",
      date: "17th Nov 2017",
      img: "/assets/img/news/5.jpg",
      url: "https://www.omandaily.om",
      category: "international",
      summary: "International early years pedagogy paper highlighting Reggio Emilia adaptations in the Sultanate."
    },
    {
      id: "news-13",
      title: "Parntnership Agreement Signed in Oman",
      author: "By: Oman Daily",
      date: "07th May 2019",
      img: "/assets/img/news/news-1.png",
      url: "https://www.omandaily.om",
      category: "local",
      summary: "Local newspaper report covering institutional cooperation in Muscat."
    },
    {
      id: "news-14",
      title: "مدرسة الشموخ تحتفل بتخريج الدفعة الأولى من طلابها",
      author: "By: Oman News Center",
      date: "30th April 2018",
      img: "/assets/img/news/7.jpg",
      url: "https://www.youtube.com",
      category: "local",
      summary: "مركز الأخبار بتلفزيون سلطنة عمان يبث وقائع الحفل الختامي وتخريج الدفعة الأولى من طلاب مدرسة الشموخ العالمية.",
      language: "ar"
    },
    {
      id: "news-15",
      title: "منى آل سعيد ترعى حفل تدشين مدرسة الشموح العالمية",
      author: "By: Al Watan",
      date: "13th Feb 2015",
      img: "/assets/img/news/17.jpg",
      url: "http://alwatan.com",
      category: "local",
      summary: "صاحبة السمو السيدة الدكتورة منى بنت فهد آل سعيد ترعى حفل الافتتاح الرسمي لمدرسة الشموخ العالمية بمحافظة مسقط.",
      language: "ar"
    }
  ],

  legal: {
    terms: {
      title: "Terms & Conditions",
      lastUpdated: "January 2025",
      content: `Welcome to Global Education Services L.L.C. (GES Quality Education). By accessing or using this website (www.ges.om) and associated services, you agree to comply with and be bound by the following terms and conditions of use.

1. Acceptance of Terms: Your access to and use of this website constitutes agreement with all applicable laws and regulations of the Sultanate of Oman.
2. Intellectual Property: All content, brand marks, logos, photographs, brochures, curricular frameworks, and digital assets published on this website are the proprietary property of Global Education Services LLC and may not be reproduced without prior written authorization.
3. Information Accuracy: While GES Quality Education makes every effort to ensure information regarding educational programs, tuition, and facilities is accurate, programs and policies are subject to ongoing institutional development and Ministry of Education regulatory updates.
4. User Submissions: When submitting inquiries, career applications, or meeting requests, you warrant that all information provided is true, accurate, and current.
5. Limitation of Liability: Global Education Services LLC shall not be held liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this website.`
    },
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "January 2025",
      content: `Global Education Services L.L.C. (GES Quality Education) is committed to protecting the privacy and personal data of our learners, parents, educators, and institutional partners in compliance with the Personal Data Protection Law of the Sultanate of Oman.

1. Information We Collect: We collect personal information provided voluntarily through contact forms, meeting requests, newsletter subscriptions, and online employment applications (including name, email, phone number, and resume details).
2. Purpose of Processing: Personal data is processed solely for legitimate educational administration, parent communication, appointment coordination, student enrollment, and talent acquisition.
3. Data Protection: We employ rigorous technological and physical security controls to prevent unauthorized access, alteration, disclosure, or destruction of your personal data.
4. Third-Party Sharing: GES does not sell or lease personal data. Data is shared exclusively with accredited school branches, authorized service providers, or regulatory educational authorities when mandated by Omani law.
5. Your Rights: You have the right to request access to, rectification of, or deletion of your personal data by contacting info@ges.om.`
    },
    cookies: {
      title: "Cookies Policy",
      lastUpdated: "January 2025",
      content: `This website uses essential and functional cookies to enhance browsing performance, remember user preferences, and analyze anonymized visitor traffic to improve our digital services.

1. Essential Cookies: Necessary for security, navigation, and accessibility features across the portal.
2. Analytical Cookies: Assist us in understanding user engagement patterns to optimize content delivery and site responsiveness.
3. Managing Cookies: You can modify your browser settings to decline non-essential cookies at any time, though some interactive features may experience reduced functionality.`
    },
    downloads: {
      title: "Institutional Downloads & Publications",
      items: [
        {
          title: "GES Corporate Brochure (Official Publication)",
          description: "Comprehensive 8-page overview of GES history, leadership, ELEVATE framework, Oman Vision 2040 alignment, and campus portfolio.",
          fileUrl: "/assets/downloads/GES Corporate Broucher.pdf",
          size: "1.0 MB",
          format: "PDF Document"
        },
        {
          title: "Awards & International Accreditation Dossier",
          description: "Cognia Global Accreditation verification, ECIS memberships, and Alam Al-Iktisaad Education Company of the Year accolades.",
          fileUrl: "/assets/downloads/awards.pdf",
          size: "6.7 MB",
          format: "PDF Document"
        }
      ]
    }
  }
};
