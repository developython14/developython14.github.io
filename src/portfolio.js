/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Mustapha's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Belkassam Mustapha Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Mustapha Belkassam",
  logo_name: "MustaphaBelkassam",
  nickname: "mustapha",
  subTitle:
    " Hello! I'm a passionate software engineer with a strong expertise in React and Flutter for building engaging and intuitive user interfaces. I also possess solid skills in data science, utilizing tools and techniques to extract insights from complex datasets. My proficiency extends to backend development using Flask and Django, creating robust and scalable web applications. With a problem-solving mindset and a deep understanding of algorithms, I enjoy tackling challenging technical problems and implementing efficient solutions. My diverse skill set allows me to contribute to full-stack development projects, combining my front-end expertise with backend and data-driven functionalities. I'm dedicated to delivering high-quality code and exceptional user experiences. Let's collaborate and bring innovative ideas to life! ",
  resumeLink:
    "https://drive.google.com/file/d/1FL_wydnPF2SWCdw2goYAgZ1KKBx8TpcD/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/developython14",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/developython14",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mustapha-belkassem-9b04b116b/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:khasarou@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
 
  {
    name: "Hackerranck",
    link: "https://www.hackerrank.com/khasarou?hr_r=1",
    fontAwesomeIcon: "fa-brands fa-hackerrank", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#4bb22e", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "LeetCode",
    link: "https://leetcode.com/khasarou/",
    fontAwesomeIcon:"simple-icons:leetcode", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#292929", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Frontend",
    link: "https://www.frontendmentor.io/profile/developython14",
    fontAwesomeIcon: "fa-thin fa-webhook", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1e2f4d", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Kaggle",
    link: "https://www.kaggle.com/belkassemmoustapha/code",
    fontAwesomeIcon: "fa-brands fa-kaggle", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#09caec", // Reference https://simpleicons.org/?q=facebook
  },
]
const skills = {
  data: [
    {
      title: "Data Science & ML",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Exploratory Data Analysis (EDA): Perform initial data exploration to gain insights, understand patterns, detect anomalies, and identify relationships within the data.",
        "⚡ Data Cleaning and Preprocessing: Handle missing values, outliers, and inconsistencies in the data. This involves techniques such as data imputation, outlier detection, and standardization.",
        "⚡ Feature Engineering: Create new features or transform existing ones to improve model performance. This could involve techniques like one-hot encoding, feature scaling, or creating interaction terms.",
        "⚡ Statistical Analysis: Apply statistical methods to uncover patterns, relationships, and trends in the data. This includes hypothesis testing, correlation analysis, regression analysis, and time series analysis.        ",
        "⚡ Machine Learning Modeling: Build predictive models using various machine learning algorithms such as linear regression, logistic regression, decision trees, random forests, support vector machines, or neural networks.        ",
        "⚡ Model Evaluation and Validation: Assess the performance of machine learning models using appropriate metrics, cross-validation techniques, and validation data sets. This helps ensure the models generalize well to unseen data.        ",
        "⚡ Data Visualization: Create visual representations of data using tools like Matplotlib, Seaborn, or Tableau to effectively communicate findings and insights.        ",
        "⚡ Model Deployment and Integration: Integrate the trained models into production systems or develop APIs to make predictions on new data.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "FrontEnd Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop user interfaces and interactive web applications using HTML, CSS, and JavaScript. Implement responsive design principles to ensure compatibility across different devices and screen sizes",
        "⚡ Collaborate with UX designers to create visually appealing and intuitive interfaces that provide an excellent user experience. This includes designing layouts, navigation systems, and user interactions.",
        "⚡ Utilize frontend frameworks and libraries, such as React.js, Vue.js, or Angular, to build scalable and modular applications. Leverage the power of these frameworks to efficiently manage state, handle data binding, and create reusable components",
      '⚡ Ensure that web applications work consistently across different browsers and devices. Test and debug applications to resolve any compatibility issues that may arise.'
    ,'⚡ Collaborate with backend developers to integrate frontend components with server-side logic and APIs. Implement data fetching and submission mechanisms to communicate with the backend services.'  
    ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
      
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
       
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        }, {
          skillName: "Boostrap",
          fontAwesomeClassname: "fa-brands fa-mdb",
          style: {
            color: "#9d258f",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Ajax",
          fontAwesomeClassname: "fa-brands fa-mdb",
          style: {
            color: "#9d258f",
          },
        },
        {
          skillName: "chartjs",
          fontAwesomeClassname: "fa-brands fa-mdb",
          style: {
            color: "#9d258f",
          },
        },
        {
          skillName: "redux",
          fontAwesomeClassname: "fa-brands fa-mdb",
          style: {
            color: "#9d258f",
          },
        },
        {
          skillName: "Provider",
          fontAwesomeClassname: "fa-brands fa-mdb",
          style: {
            color: "#9d258f",
          },
        },
        {
          skillName: "Rest Api",
          fontAwesomeClassname: "fa-brands fa-mdb",
          style: {
            color: "#9d258f",
          },
        },
      ],
    },
    {
      title: "Backend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
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
      subtitle: "Master. in applied physics",
      logo_path: "usthb.png",
      alt_name: "IIITDM Kurnool",
      duration: "2019 - 2021",
      descriptions: [
        "I am a highly skilled physicist specialized in the field of energy with a strong background in simulation coding, deep analytics, and fluid dynamics. Through my master's degree program, I have gained extensive experience in using MATLAB and Python for coding simulations, solving complex differential equations, and simulating real-world problems. Additionally, I have developed a deep understanding of various types of fluids and their behaviors. My final project focused on the simulation of solar panels and improving their performance by incorporating nanoparticles.",
        "⚡ Experienced in developing simulation models, implementing numerical methods, and solving differential equations to simulate real-world energy problems.",
        "⚡ Proficient in analyzing and interpreting complex data sets, identifying trends, and drawing meaningful conclusions.",
         "⚡ Skilled in coding simulations and algorithms using MATLAB and Python, with a focus on solving energy-related problems.", 
         "⚡  Demonstrated ability to tackle complex problems, think critically, and propose innovative solutions within the field of energy physics.",
         "⚡ Effective communicator, able to convey complex concepts and research findings to both technical and non-technical audiences.",
      ],
      website_link: "https://usthb.dz/",
    },
    {
      title: "The University of Science and Technology Houari Boumediene",
      subtitle: "Bachlor in applied physics",
      logo_path: "usthb.png",
      alt_name: "Indiana University Bloomington",
      duration: "2016 - 2019",
      descriptions: [
        "I am a dedicated and knowledgeable graduate with a strong foundation in mathematics, physics, and chemistry. Through my bachelor's degree program, I have gained expertise in algebra, analysis, statistics, mechanics, electronics, quantum mechanics, and fundamental principles of chemistry. My academic journey has equipped me with a solid understanding of scientific principles and problem-solving skills, allowing me to approach complex challenges with analytical thinking and attention to detail.",
        "⚡ Developed the ability to analyze complex problems, identify patterns, and apply logical reasoning to find effective solutions.",
        "⚡  Proficient in using statistical techniques and software to analyze data, interpret results, and draw meaningful conclusions.",
        "⚡ During my time at university,  Acquired strong problem-solving skills, leveraging mathematical and scientific principles to approach challenges systematically.",
        "⚡ Developed a meticulous approach to work, ensuring accuracy and precision in mathematical calculations and scientific experiments.",
        "⚡ Developed effective communication skills, both verbal and written, to articulate complex concepts and findings to diverse audiences",
      ],
      website_link: "https://usthb.dz/",
    },
  ],
};

const certifications = {
  certifications: [
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
      color_code: '#fffff',
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
    }, {
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
    }, {
      title: "Learning Excel: Data Analysis",
      subtitle: "- Linkedin Learning",
      logo_path: "linkedin.jfif",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
    }, {
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
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - Aug 2021",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
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
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
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
