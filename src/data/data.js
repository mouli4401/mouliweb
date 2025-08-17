

export const about = {
    name: "Mouli Duggirala",
    role: "Full Stack Web Developer",
    about: "Hi, I'm Mouli Duggirala — a Computer Science student passionate about AI, machine learning, and sustainable technology solutions. My work spans coastal erosion tracking with satellite imagery, EEG-based emotion recognition for safer driving, computer vision applications, and AI-powered research assistants. I enjoy building impactful systems by combining programming, data science, and modern web technologies.",
    email: "mouliduggirala02@gmail.com",
};
export const seo = {
    title: `Mouli Duggirala | ${about.name} | ${about.role}`,
    description: "",
    keywords: "portfolio, web developer, Next.js, developer portfolio,  portfolio",
}

export const forms = {
    formspreeUrl: "https://formspree.io/f/xanbzqzl",
}

export const skills = [
  { name: "Html", alt: "html logo", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg" },
  { name: "Css", alt: "css logo", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/css3.svg" },
  { name: "Js", alt: "js logo", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg" },
  { name: "Tailwind", alt: "tailwind logo", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg" },
  { name: "React Js", alt: "react logo", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg" },
  { name: "Next Js", alt: "nextjs logo", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nextdotjs.svg" },
];

export const socials = {
    github: "https://github.com/mouli4401",
    twitter: "https://twitter.com/mouli02",
    instagram: "https://www.instagram.com/mouli",
    facebook: "https://www.facebook.com/mouli",
};

export const projects = {
  pinProjects: [
    {
      title: "Coastal Erosion Tracking For Sustainable Shoreline Protection",
      description:
        "Designed a satellite imagery–driven system to detect and forecast shoreline changes using Python, Flask, CoastSat, and PostgreSQL/PostGIS. Enhanced accuracy through tidal correction (FES2014, pyTMD) and DEM-based slope integration, enabling 10-year erosion/accretion predictions.",
      link: "https://github.com/your-username/coastal-erosion",  // 🔗 replace with actual GitHub link
      tags: ["Image Processing", "Python", "Flask", "CoastSat", "pyTMD", "GDAL"],
    },
    {
      title: "EEG-Based Emotion Recognition for Enhanced Driver Safety",
      description:
        "Developed a real-time EEG-based emotion recognition system to enhance driver safety. Collected and preprocessed EEG signals to identify emotional states such as stress, fatigue, and drowsiness. Applied signal processing techniques and extracted features using FFT and wavelet transforms.",
      link: "https://github.com/your-username/eeg-emotion",  // 🔗 replace with actual GitHub link
      tags: ["Arduino", "EEG", "Python", "NumPy", "Pandas", "SciPy", "MNE"],
    },
  ],

  otherProjects: [
    {
      title: "Real-time Pedestrian and Car Detection using Computer Vision",
      description:
        "Developed a real-time traffic detection web app using OpenCV and Streamlit to identify vehicles and pedestrians in videos. Integrated Haar Cascade classifiers for object detection with an interactive interface for video uploads and processing.",
      link: "https://github.com/your-username/car-pedestrian-detection",  // 🔗 replace with actual GitHub link
      tags: ["OpenCV", "Streamlit", "Computer Vision", "Haar Cascade"],
    },
    {
      title: "Research Agent",
      description:
        "AI-powered research assistant using IBM watsonx and Granite that retrieves literature, summarizes papers, generates hypotheses, and manages citations. Automates repetitive tasks, improving research efficiency and accuracy.",
      link: "https://github.com/your-username/research-agent",  // 🔗 replace with actual GitHub link
      tags: ["IBM Cloud", "Granite", "AI Agent", "Research Automation"],
    },
  ],
};


export const experience = [
  {
    title: "AI Intern at Infosys SpringBoard",
    description:
      "Developed an AI-powered system to monitor and analyze competitor activity in real time for e-commerce businesses. Designed web scraping and API integration pipelines to gather competitor pricing, product listings, discounts, and promotional strategies. Implemented natural language processing and data analysis techniques to extract insights from product descriptions and marketing content. Built dashboards for visualizing trends, competitor comparisons, and actionable recommendations to support strategic decision-making.",
    date: "2025-Present",
  },
  {
    title: "AI & IBM Cloud Intern at Edunet Foundation",
    description:
      "Completed an AI-focused internship leveraging IBM Cloud services to design and deploy a Research Agent application. Implemented natural language processing techniques to retrieve, summarize, and analyze information from multiple sources. Integrated IBM Watson and cloud-based APIs for intelligent query handling and data processing. Delivered a functional, cloud-hosted solution capable of assisting users with efficient research and knowledge extraction.",
    date: "2025",
  },
  {
    title: "Android Virtual Intern at AICTE, GOOGLE",
    description:
      "Developed mobile applications using Java and XML, focusing on intuitive UI design, smooth performance, and seamless user experience.",
    date: "2024",
  },
  {
    title: "CRM Intern at Salesforce",
    description:
      "Completed a virtual internship focused on Salesforce CRM, learning cloud-based customer relationship management solutions. Gained hands-on experience in Salesforce automation, data management, and workflow configuration.",
    date: "2023",
  },
];

export const blogs = [
  {
    title: "Understanding React Hooks",
    date: "12/03/2025",
    link: "#",
  },
  {
    title: "CSS Grid vs Flexbox: When to Use Which",
    date: "25/12/2024",
    link: "#",
  },
  {
    title: "Next.js SEO Best Practices",
    date: "10/07/2024",
    link: "#",
  },
  {
    title: "Building AI-Powered Research Agents with IBM Cloud",
    date: "15/05/2025",
    link: "#",
  },
  {
    title: "Coastal Erosion Prediction using Satellite Imagery",
    date: "20/04/2025",
    link: "#",
  },
  {
    title: "Real-time Emotion Recognition with EEG Signals",
    date: "08/02/2025",
    link: "#",
  },
  {
    title: "Computer Vision for Traffic Detection using OpenCV",
    date: "30/01/2025",
    link: "#",
  },
  {
    title: "Deploying Flask Applications on Cloud Platforms",
    date: "05/12/2024",
    link: "#",
  },
];
