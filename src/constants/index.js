export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Podcastr - AI Podcast Platform',
    desc: 'Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.',
    subdesc:
      'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.',
    href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    etat: 'In Production',
    animated_icon: '/project/osmose.gif',
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'Convex'],
    concepts: ['AI-powered features', 'Text-to-multiple-voices functionality', 'SaaS'],
  },
  {
    title: 'LiveDoc - Real-Time Google Docs Clone',
    desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
    subdesc:
      'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
    href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    etat: 'In Development',
    animated_icon: '/project/text2sql.gif',
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
    technologies: ['Next.js', 'Liveblocks', 'TypeScript'],
    concepts: ['Real-time collaboration', 'Document editing', 'Scalability'],
  },
  {
    title: 'CarePulse - Health Management System',
    desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
    subdesc:
      'With a focus on efficiency, CarePulse integrates complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    etat: 'In Development',
    animated_icon: '/project/rgpd.gif',
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
    technologies: ['Next.js', 'Appwrite', 'Twilio', 'Sentry'],
    concepts: ['Patient registration', 'Appointment scheduling', 'Medical record management'],
  },
  {
    title: 'Horizon - Online Banking Platform',
    desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
    subdesc:
      'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
    href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    etat: 'In Production',
    animated_icon: '/project/chestCancer2.gif',
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
    technologies: ['Next.js', 'Appwrite', 'Dwolla', 'Plaid'],
    concepts: ['Finance management', 'Real-time transactions', 'Money transfer'],
  },
  {
    title: 'Imaginify - AI Photo Manipulation App',
    desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    subdesc:
      'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    texture: '/textures/project/project5.mp4',
    animated_icon: '/project/osmose1.gif',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    etat:'In Production',
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
    technologies: ['Next.js', 'Cloudinary AI', 'Clerk', 'Stripe'],
    concepts: ['AI-driven image editing', 'Payments system', 'Credits-based model'],
  },
  // Ajoutez les autres projets ici de la même manière
];

export const projectIa =[
  {
    title: 'Chest Cancer Classifier - AI Medical Tool',
    desc: 'Chest Cancer Classifier is a cutting-edge AI tool that revolutionizes the way medical professionals diagnose chest cancer. By leveraging machine learning algorithms, it can accurately detect cancerous cells in chest X-ray images, enabling early diagnosis and treatment.',
    subdesc:
      'Developed with Python, Pytorch, MLflow, Chest Cancer Classifier is a powerful diagnostic tool that enhances the efficiency and accuracy of chest cancer detection.',
    href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    etat: 'In Production',
    animated_icon: '/project/chestCancer.gif',
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Text2SQL - AI Database Query Tool',
    desc: 'Text2SQL is an advanced AI tool that simplifies the process of generating SQL queries from natural language text. By using state-of-the-art natural language processing algorithms, it can accurately interpret user queries and convert them into SQL commands.',
    subdesc:
      'I use rag model, Huggingface, Text2SQL is designed to enhance the efficiency of database management and data retrieval processes, making it an essential tool for data analysts and database administrators.',
    href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    etat: 'In Development',
    animated_icon: '/project/text2sql.gif',
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'GPDR Law Auditing with LLM - AI Legal Tool',
    desc: 'GDPR Law Auditing with LLM is an innovative AI tool that simplifies the process of auditing legal documents for GDPR compliance. By using advanced machine learning algorithms, it can accurately analyze legal texts and identify potential GDPR violations, enabling organizations to ensure compliance with data protection regulations.',
    subdesc:
      'Developed with Python, Pytorch, GDPR Law Auditing with LLM is a powerful legal tool that enhances the efficiency and accuracy of GDPR auditing processes',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    etat: 'In Development',
    animated_icon: '/project/rgpd-m.gif',
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Reverse Osmosis System Design - Engineering Tool',
    desc: 'Reverse Osmosis System Design is a comprehensive engineering tool that simplifies the process of designing reverse osmosis systems. By using advanced algorithms and simulation techniques, it can accurately model the performance of RO systems and optimize their design for maximum efficiency and cost-effectiveness.',
    subdesc:
      'Conducted Experience and analis with panda and numpy, Reverse Osmosis System Design is designed to enhance the efficiency of water treatment processes, making it an essential tool for environmental engineers and water treatment specialists.',
    animated_icon: '/project/osmose1.gif',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    etat:'In Production',
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmallPhone, isPhone, isLaptop, isDesktop, isLargeDesktop,  screenHeight) => {
  const deskPositionY = screenHeight > 730 ? -3.25 + (screenHeight - 800) / 500 : -3.25;
  return {
    deskScale: isSmallPhone ? 0.4 : isPhone ? 0.4 : 0.75,
    deskPosition: isSmallPhone ? [0, 0.5, -1.1] : isPhone ? [0, -1, -1.1] : isLaptop ? [1.5, deskPositionY, -1.5] : isDesktop ? [1.5, deskPositionY, -1.5] : [2, deskPositionY, -1.5],
    rotation: [-0.01, -0.2, -0.1],
    cubePosition: isSmallPhone ? [4, -5, 0] : isPhone ? [5, -5, 0] : isLaptop ? [5, -5, 0] : isDesktop ? [6, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmallPhone ? [3, 4, 0] : isPhone ? [5, 4, 0] : isLaptop ? [5, 4, 0] : isDesktop ? [6, 4, 0] : [12, 3, 0],
    ringPosition: isSmallPhone ? [-5, 7, 0] : isPhone ? [-10, 10, 0] : isLaptop ? [-12, 10, 0] : isDesktop ? [-15, 10, 0] : [-24, 10, 0],
    targetPosition: isSmallPhone ? [-5, -10, -10] : isPhone ? [-9, -10, -10] : isLaptop ? [-11, -7, -10] : isDesktop ? [-12, -7, -10] : [-13, -13, -10],

    brainPosition: isSmallPhone ? [2.4, 1.2, -4] : isPhone ? [0
      , 1.6, -2.6] : isLaptop ? [1.5, deskPositionY, -1.5] : isDesktop ? [1.5, deskPositionY, -1.5] : [2, deskPositionY, -1.5],
  };
};
export const workExperiences = [
  {
    id: 1,
    name: 'AG2R LA Mondial',
    pos: 'Web Developer - AI',
    duration: '2022 - Present',
    title: "At AG2R LA Mondial, I developed AI-driven web applications to enhance user experience and streamline internal processes. I collaborated with cross-functional teams to integrate machine learning models into web platforms.",
    icon: '/assets/framer.svg',
    technologies: ['React', 'Node.js'],
    concepts: ['Machine Learning', 'User Experience'],
  },
  {
    id: 2,
    name: 'RATP',
    pos: 'Data Scientist - Discovery Internship',
    duration: '2020 - 2022',
    title: "During my internship at RATP, I analyzed large datasets to uncover insights and support decision-making processes. I worked on predictive modeling and data visualization projects to improve operational efficiency.",
    icon: '/assets/figma.svg',
    technologies: ['Python', 'Pandas'],
    concepts: ['Predictive Modeling', 'Data Visualization'],
  },
];

export const education = [
  {
    id: 1,
    name: 'École des Mines de Saint-Étienne',
    pos: 'MSc Computer Science - minor in Microelectronic Systems. Courses included: Data Structures and Algorithms | Database Systems | Computer Networks | Cybersecurity | Machine Learning.',
    duration: '2023 - Present',
    title: "Main courses ----",
    icon: '/assets/mines.png',
  },
  {
    id: 2,
    name: 'Lycée Hoche',
    pos: 'Two-year undergraduate intensive preparation for the entrance exams to top French Engeneering schools',
    duration: '2020 - 2022',
    title: "Main courses ----",
    icon: '/assets/lyceehoche4.png',
  },
];

export const technologies = [
  {
    name: "CSS 3",
    icon: "/logo/css.png",
    position: [-10, 5, 0],
    categorie: ["dev"],
  },
  {
    name: "JavaScript",
    icon: "/logo/javascript.png",
    position: [-10, 0, 0],
    categorie: ["dev"],
  },
  {
    name: "React JS",
    icon: "/logo/reactjs.png",
    position: [-10, -5, 0],
    categorie: ["dev"],
  },
  {
    name: "Tailwind CSS",
    icon: "/logo/tailwind.png",
    position: [-2.5, 7.5, 0.75],
    categorie: ["dev"],
  },
  {
    name: "Node JS",
    icon: "/logo/nodejs.png",
    position: [-2.5, 2.5, -0.75],
    categorie: ["dev"],
  },
  {
    name: "MongoDB",
    icon: "/logo/mongodb.png",
    position: [-2.5, -2.5, 0.75],
    categorie: ["dev"],
  },
  {
    name: "Three JS",
    icon: "/logo/threejs.svg",
    position: [-2.5, -7.5, -0.75],
    categorie: ["dev"],
  },
  {
    name: "git",
    icon: "/logo/git.png",
    position: [5, 7.5, -0.75],
    categorie: ["dev"],
  },
  {
    name: "figma",
    icon: "/logo/figma.png",
    position: [5, 2.5, 0.75],
    categorie: ["dev"],
  },
  {
    name: "docker",
    icon: "/logo/docker.png",
    position: [5, -2.5, -0.75],
    categorie: ["dev"],
  },
  {
    name: "firebase",
    icon: "/logo/firebase.png",
    position: [5, -7.5, 0.75],
    categorie: ["dev"],
  },
  {
    name: "typescript",
    icon: "/logo/typescript.png",
    position: [12.5, 2.5, 0],
    categorie: ["dev"],
  },
  {
    name: "scikit-learn",
    icon: "/logo/scikit-learn.png",
    position: [20, -2.5, 0],
    categorie: ["ai"],
  },
  {
    name: "pytorch",
    icon: "/logo/pytorch.png",
    position: [12.5, -2.5, 0],
    categorie: ["ai", "data science"],
  },
  {
    name: "huggingface",
    icon: "/logo/huggingface.svg",
    position: [20, -2.5, 0],
    categorie: ["ai"],
  },
];

export const areaOfExpertise = [
  {
    id: 1,
    title: 'Machine Learning',
    description: 'Exploring and creating innovative AI solutions with a focus on deep learning and advanced research.',
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'Designing modern applications, integrating front-end and back-end technologies for seamless user experiences.',
  },
  {
    id: 3,
    title: 'Data Science',
    description: 'Mastering tools and methodologies to extract valuable insights from complex datasets.',
  },
];