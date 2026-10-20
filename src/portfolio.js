/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Mustapha Belkassam | Solution Development Manager",
  description:
    "Solution Development Manager at Amazon building full-stack platforms and data pipelines at scale. Expertise in Django, React, AWS (Redshift, QuickSight, ECS, Lambda), and Python.",
  og: {
    title: "Mustapha Belkassam — Solution Development Manager",
    type: "website",
    url: "https://developython14.github.io/#/",
  },
};

//Home Page
const greeting = {
  title: "Mustapha Belkassam",
  logo_name: "MustaphaBelkassam",
  nickname: "mustapha",
  subTitle:
    "Building full-stack platforms and data pipelines at Amazon — turning operational complexity into scalable, high-impact solutions.",
  resumeLink:
    "https://drive.google.com/file/d/1MxUUMDN1g7xBIPRzL82JqX1XtPamXygG/view?usp=drive_link",
  portfolio_repository: "https://github.com/developython14",
  githubProfile: "https://github.com/developython14",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/developython14",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mustapha-belkassem-9b04b116b/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:khasarou@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "HackerRank",
    link: "https://www.hackerrank.com/khasarou?hr_r=1",
    fontAwesomeIcon: "fa-hackerrank",
    backgroundColor: "#2EC866",
  },
  {
    name: "Kaggle",
    link: "https://www.kaggle.com/belkassemmoustapha/code",
    fontAwesomeIcon: "fa-kaggle",
    backgroundColor: "#20BEFF",
  },
];
const skills = {
  data: [
    {
      title: "Cloud Engineering",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Deploying containerized services on ECS Fargate with auto-scaling, ALB, and CI/CD via CodePipeline.",
        "⚡ Managing multi-AZ PostgreSQL RDS (120M+ rows), ElastiCache Redis, and S3 storage at scale.",
        "⚡ Building event-driven architectures with Lambda, EventBridge, and CloudWatch for automated workflows.",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: { color: "#FF9900" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#2496ED" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { color: "#336791" },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: { color: "#DC382D" },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: { color: "#FCC624" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
        },
      ],
    },
    {
      title: "Data Engineering",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Architecting data pipelines with AWS Redshift, S3, Lambda, and EventBridge processing 4M+ rows/day across 65+ sites.",
        "⚡ Building interactive dashboards with QuickSight (SPICE) serving 1,000+ users for real-time operational decisions.",
        "⚡ Designing automated ETL jobs with Andes/DataNet, SQL, and Python replacing manual processes saving $3M+.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: { color: "#150458" },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "simple-icons:jupyter",
          style: { color: "#F37626" },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "simple-icons:tensorflow",
          style: { color: "#FF6F00" },
        },
        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "simple-icons:plotly",
          style: { color: "#3F4F75" },
        },
      ],
    },
    {
      title: "Full-Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building production platforms with Django REST APIs + React/Redux frontends serving 2,250+ active users.",
        "⚡ Implementing real-time features with WebSocket, authentication with Midway/AAA/LDAP, and load testing with Locust.",
        "⚡ Developing responsive UIs with React, HTML5, CSS3, and integrating with backend services via REST APIs.",
      ],
      softwareSkills: [
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: { color: "#092E20" },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { color: "#F7DF1E" },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "simple-icons:css3",
          style: { color: "#1572B6" },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: { color: "#FFFFFF" },
        },
      ],
    },
    {
      title: "BI & Process Improvement",
      fileName: "DesignImg",
      skills: [
        "⚡ Driving $16.8M+ operational impact through data-driven process optimization, staffing models, and quality frameworks.",
        "⚡ Building network-wide reporting systems — IDRT (41% DPMO reduction), safety compliance (74%→97%), stow optimization ($5.14M space value).",
        "⚡ Designing KPI dashboards and automated alerting for real-time decision-making across 65+ sites and 3 countries.",
      ],
      softwareSkills: [
        {
          skillName: "QuickSight",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: { color: "#FF9900" },
        },
        {
          skillName: "Excel/VBA",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: { color: "#217346" },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "Slack API",
          fontAwesomeClassname: "simple-icons:slack",
          style: { color: "#4A154B" },
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "simple-icons:jira",
          style: { color: "#0052CC" },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/khasarou/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/khasarou?hr_r=1",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/belkassemmoustapha/code",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "The University of Science and Technology Houari Boumediene",
      subtitle: "Master in Applied Physics (Energy)",
      logo_path: "usthb.png",
      alt_name: "USTHB",
      duration: "2019 - 2021",
      descriptions: [
        "⚡ Specialized in energy physics with a focus on simulation coding, deep analytics, and fluid dynamics.",
        "⚡ Built simulation models using MATLAB and Python — solving differential equations and simulating real-world energy problems.",
        "⚡ Final project: Simulation of solar panels and performance optimization using nanoparticles.",
        "⚡ Strong foundation in statistical analysis, data interpretation, and numerical methods.",
      ],
      website_link: "https://usthb.dz/",
    },
    {
      title: "The University of Science and Technology Houari Boumediene",
      subtitle: "Bachelor in Applied Physics",
      logo_path: "usthb.jpg",
      alt_name: "USTHB",
      duration: "2016 - 2019",
      descriptions: [
        "⚡ Strong foundation in mathematics (algebra, analysis, statistics), physics (mechanics, electronics, quantum mechanics), and chemistry.",
        "⚡ Proficient in statistical techniques and software for data analysis and interpretation.",
        "⚡ Developed systematic problem-solving skills leveraging mathematical and scientific principles.",
      ],
      website_link: "https://usthb.dz/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "CompTIA Security+",
      subtitle: "- CompTIA",
      logo_path: "comptia_logo.svg",
      certificate_link: "",
      alt_name: "CompTIA",
      color_code: "#C8202F",
    },
    {
      title: "Front-End Web Development with React",
      subtitle: "-Courseras",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Version Control with Git",
      subtitle: "-Udacity",
      logo_path: "udacity.jfif",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#02B3E4",
    },

    {
      title: "advanced Sql",
      subtitle: "-Kaggle",
      logo_path: "kaggle.jfif",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#fffff",
    },
    {
      title: "data analysis using python",
      subtitle: "-Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "machine learning with python",
      subtitle: "-Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "React Manage states with Hooks",
      subtitle: "- Linkedin Learning",
      logo_path: "linkedin.jfif",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
    },
    {
      title: "Programming Foundations: Web Security",
      subtitle: "- Linkedin Learning",
      logo_path: "linkedin.jfif",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
    },
    {
      title: "Succeeding in Web Development: Full Stack and Front End",
      subtitle: "- Linkedin Learning",
      logo_path: "linkedin.jfif",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
    },
    {
      title: "Data Fluency: Exploring and Describing Data",
      subtitle: "- Linkedin Learning",
      logo_path: "linkedin.jfif",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
    },
    {
      title: "Learning Data Visualization",
      subtitle: "- Linkedin Learning",
      logo_path: "linkedin.jfif",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
    },
    {
      title: "Power BI Essential Training",
      subtitle: "- Linkedin Learning",
      logo_path: "linkedin.jfif",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
    },
    {
      title: "Excel Statistics Essential Training: 1",
      subtitle: "- Linkedin Learning",
      logo_path: "linkedin.jfif",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
    },
    {
      title: "Learning Excel: Data Analysis",
      subtitle: "- Linkedin Learning",
      logo_path: "linkedin.jfif",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
    },
    {
      title: "Learning Data Analytics",
      subtitle: "- Linkedin Learning",
      logo_path: "linkedin.jfif",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
    },
    {
      title: "Django for Everybody Specialization",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Solution Development Manager at Amazon, building full-stack platforms and data pipelines at scale. Previously a software engineer at startups across France, Saudi Arabia, and the Netherlands.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Solution Development Manager (L5)",
          company: "Amazon",
          company_url: "https://www.amazon.com",
          logo_path: "amazon_logo.svg",
          duration: "May 2025 - Present",
          location: "Harrisburg, PA",
          description:
            "Leading a team of 2 L3 Data Analysts with structured development plans and accountability cadence. Driving expansion of all core platforms (Quantum, Atlas, SQPR) from SDC-only to multi-network coverage across 30+ buildings. Built the RDC Shift Planner serving 12 sites with 100+ roles. Mentored 3 AM interns with 100% return offer rate and onboarded 6+ analysts.",
          color: "#FF9900",
        },
        {
          title: "Data Developer (L4)",
          company: "Amazon",
          company_url: "https://www.amazon.com",
          logo_path: "amazon_logo.svg",
          duration: "Feb 2025 - May 2025",
          location: "Harrisburg, PA",
          description:
            "Solo-designed and deployed the Quantum Staffing Board — a full-stack digital staffing platform with $9.3M NPV network-wide, serving 1,000+ active leaders across the SDC network. Built the SQPR quality dashboard spanning 65 sites across US, Canada, and Europe saving $1.9M. Designed Atlas (Fennec) real-time employee tracking system for 18+ buildings. Created ML-driven Auto Gatekeeping system reducing monthly defects by 76% and saving $3M annually. Tech stack: Django, React, PostgreSQL RDS, AWS (EC2, ECS Fargate, Lambda, ElastiCache Redis, Redshift, QuickSight, S3).",
          color: "#FF9900",
        },
        {
          title: "Data Analyst (L3)",
          company: "Amazon",
          company_url: "https://www.amazon.com",
          logo_path: "amazon_logo.svg",
          duration: "Aug 2024 - Feb 2025",
          location: "Harrisburg, PA",
          description:
            "Delivered 17 achievements driving $16.8M+ total impact. Created the IDRT reporting framework achieving 41% DPMO reduction. Developed SQL automation replacing manual staffing processes, saving up to $3M in operational costs with 400% accuracy increase. Built real-time alert systems using Python, VBA, and Slack API. Managed 21,700+ bin configurations and redesigned clustering from 10 to 37 clusters. Improved network-wide safety compliance from 74% to 97% across 14+ SDC sites training 13,000+ associates.",
          color: "#FF9900",
        },
        {
          title: "Software Engineer",
          company: "Inrepm",
          company_url: "",
          logo_path: "legato_logo.png",
          duration: "Oct 2022 - Jul 2024",
          location: "Toulouse, France",
          description:
            "Built a professional networking and video conferencing platform (similar to LinkedIn + Google Meet) using React, WebSocket, Django, AJAX, and PostgreSQL. Developed real-time communication features with WebSocket, designed RESTful APIs with Django, and implemented user authentication, search, and notifications. Managed PostgreSQL database design ensuring data integrity and scalability.",
          color: "#0879bf",
        },
        {
          title: "Software Engineer",
          company: "Right ",
          company_url: "https://mostaql.com/u/elsaroukh",
          logo_path: "Mostaql.jpg",
          duration: "Dec 2021 - Avr 2023",
          location: "Saudi Arabia",
          description:
            "Freelance software engineer building backend, frontend, and mobile applications. Key client: Right Edu — designed scalable backend architectures for their educational platform handling user profiles, course content, and progress tracking. Built RESTful APIs for frontend-backend integration and developed mobile app interfaces. Delivered projects across diverse industries within agreed timelines.",
          color: "#0879bf",
        },
        {
          title: "Software Engineer",
          company: "6Sigma ",
          company_url: "",
          logo_path: "legato_logo.png",
          duration: "Dec 2020 - Avr 2021",
          location: "Amsterdam, Netherlands",
          description:
            "Built efficient and scalable backend solutions using algorithmic thinking and data structures. Designed robust architectures and RESTful APIs in collaboration with cross-functional teams. Conducted thorough testing, debugging, and code reviews to maintain quality standards.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "The Solar Equipment Development Unit.",
          company_url: "http://udes.cder.dz/",
          logo_path: "udes.png",
          duration: "avril 2021 - sep 2021",
          location: "bousmail, Algeria",
          description:
            "Solved power and fluids-related problems using Python and MATLAB. Developed code to analyze environmental data (air speed, temperature, nanoparticle concentrations), applied ML techniques to train predictive models, and built accurate simulations for solar panel performance optimization.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Mathmeatics teacher",
          company: "ELkotof",
          company_url: "https://github.com/developython14",
          logo_path: "school.jpg",
          duration: "sep 2018 - juin 2022",
          location: "Ain taya , Algeria",
          description:
            "Planned and presented math lessons, prepared learning materials (notes, assignments, quizzes), graded assignments, invigilated exams, and documented student progress. Maintained a safe and conducive learning environment.",
          color: "#181717",
        },
        {
          title: "Developper",
          company: "HackAlgeria",
          company_url:
            "https://www.linkedin.com/company/hackalgeria/?originalSubdomain=fr",
          logo_path: "hackalgeria.png",
          duration: "juin 2020 - juin 2020",
          location: "Alger , Algeria",
          description:
            "Built solutions to detect fake news and analyze forged images using NLP and computer vision at the HackAlgeria hackathon. Contributed to developing an effective misinformation detection system.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Welcome to my Projects section, where I transform ideas into reality. With expertise in backend development, frontend design, and data science, I take projects from conception through execution to deployment. Dive into a collection that showcases innovation at every stage, blending creativity with technical prowess. Join me on this journey from inception to implementation, and explore a world where ideas meet seamless execution.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "mus.jpg",
    description:
      "Feel free to reach out — I'm happy to discuss data engineering, full-stack development, AWS architecture, or potential collaborations. I typically reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link:
      "https://www.linkedin.com/in/mustapha-belkassem-9b04b116b/recent-activity/all/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Harrisburg, PA — Open to relocate anywhere in the USA",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/HarrisburgPA",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
