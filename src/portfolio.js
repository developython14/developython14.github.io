/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Mustapha's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Belkassam Mustapha Portfolio",
    type: "website",
    url: "https://developython14.github.io/#/",
  },
};

//Home Page
const greeting = {
  title: "Mustapha Belkassam eltomahook",
  logo_name: "MustaphaBelkassam",
  nickname: "mustapha",
  subTitle:
    " Hello! hoble I'm a passionate software engineer with a strong expertise in React and Flutter for building engaging and intuitive user interfaces. I also possess solid skills in data science, utilizing tools and techniques to extract insights from complex datasets. My proficiency extends to backend development using Flask and Django, creating robust and scalable web applications. With a problem-solving mindset and a deep understanding of algorithms, I enjoy tackling challenging technical problems and implementing efficient solutions. My diverse skill set allows me to contribute to full-stack development projects, combining my front-end expertise with backend and data-driven functionalities. I'm dedicated to delivering high-quality code and exceptional user experiences. Let's collaborate and bring innovative ideas to life! ",
  resumeLink:
    "https://drive.google.com/file/d/1MxUUMDN1g7xBIPRzL82JqX1XtPamXygG/view?usp=drive_link",
  portfolio_repository: "https://github.com/developython14",
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
        '⚡ Experienced backend developer with expertise in designing and developing web applications using Django, Flask, and PostgreSQL.',
'⚡ Proficient in utilizing cloud platforms such as Google Cloud for hosting and deploying applications.',
'⚡ Skilled in managing VPS (Virtual Private Server) environments to ensure smooth application performance and security.',
'⚡ Extensive knowledge of WebSocket and WebRTC technologies for real-time communication and collaboration features.',
'⚡ Strong understanding of REST API principles and best practices for creating scalable and efficient APIs.',
'⚡ Well-versed in integrating various third-party services and APIs to enhance application functionality and user experience.',
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
      logo_path: "usthb.jpg",
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
          title: "Software Engineer",
          company: "Inrepm ",
          company_url: "",
          logo_path: "legato_logo.png",
          duration: "oct 2022 - current",
          location: "Toulouse, France",
          description:
            "At Inrepm, I had the opportunity to work as a software engineer, contributing to the development of a platform similar to LinkedIn and Google Meet. My role involved utilizing technologies such as React, WebSocket, Django, AJAX, and PostgreSQL to build a robust and scalable system. I was responsible for front-end development, designing and implementing user-friendly interfaces using React, HTML, CSS, and JavaScript. Leveraging WebSocket technology, I enabled real-time communication and collaboration features, enhancing the platform's interactivity. Additionally, I played a key role in the backend development, utilizing Django to design and develop RESTful APIs. This facilitated seamless integration between the front-end and backend systems, ensuring smooth data flow and optimal performance. I also leveraged AJAX to improve server communication, enhancing the platform's responsiveness. During my time at Inrepm, I worked closely with the team to implement essential features like user authentication, search functionality, and notifications. I also utilized PostgreSQL to design and manage the database, ensuring data integrity and scalability. Collaborating with product managers, designers, and other stakeholders, I gained a comprehensive understanding of project requirements and delivered solutions that met client expectations. I actively participated in code reviews, maintaining code quality standards and providing valuable feedback to peers. Overall, my experience at Inrepm allowed me to contribute to the development of a cutting-edge platform, leveraging technologies like React, WebSocket, Django, AJAX, and PostgreSQL. I played a crucial role in both front-end and backend development, delivering high-quality solutions and ensuring a seamless user experience.",
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
            "During my experience as a freelance software engineer on Mostaql, I have had the opportunity to work on a wide range of projects, including building backend and frontend systems, as well as mobile applications for diverse companies. Notably, I have collaborated with Right Edu, a prominent education technology company, where I played a key role in developing innovative solutions. For Right Edu, I was responsible for designing and implementing backend systems that supported their educational platform. I worked closely with the product team to understand their requirements and translate them into robust and scalable backend architectures. By leveraging my expertise in algorithmic thinking and data structures, I developed efficient algorithms to handle complex educational data, such as user profiles, course content, and progress tracking. In addition to backend development, I also contributed to the frontend systems of Right Edu's applications. I collaborated with the frontend developers to ensure seamless integration between the frontend and backend components. This involved designing and implementing RESTful APIs to facilitate smooth data flow and efficient communication between the different layers of the application. Furthermore, I had the opportunity to contribute to the development of mobile applications for Right Edu. Leveraging my knowledge of mobile app development frameworks, I built user-friendly interfaces and implemented functionalities that enhanced the overall user experience. I worked closely with the mobile development team to ensure consistency and synchronization between the backend systems and the mobile applications. Throughout my freelancing experience, I maintained effective communication with clients, ensuring a clear understanding of their project requirements and providing regular updates on progress. I consistently delivered high-quality software solutions within agreed-upon timelines, earning positive feedback and building long-lasting relationships with clients. My freelancing experience on platforms like mostaqel has honed my ability to adapt to various project requirements and work efficiently in remote environments. It has also strengthened my problem-solving skills, allowing me to quickly analyze and address challenges that arise during software development. Overall, my experience in freelancing on platforms like mostaqel has provided me with a diverse and enriching experience in software engineering, particularly in building backend and frontend systems, as well as mobile applications for esteemed companies like Right Edu.",
          color: "#0879bf",
        },
        {
          title: "Software Engineer",
          company: "6Sigma ",
          company_url: "",
          logo_path: "legato_logo.png",
          duration: "Dec 2020 - Avr 2021",
          location: "amestredam, holland",
          description:
            "my primary role is to tackle real-world problems using algorithmic thinking and data structures. I specialize in building backend solutions that are efficient, scalable, and reliable. I collaborate remotely with cross-functional teams, including product managers and designers, to understand project requirements and design robust architectures. I implement algorithms and optimize existing ones to develop high-performance solutions. Additionally, I design and implement RESTful APIs, conduct thorough testing and debugging, and actively participate in code reviews to maintain code quality. I stay updated with emerging technologies and industry best practices to continually enhance software development processes and deliver innovative backend solutions.",
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
            "During my tenure at The Solar Equipment Development Unit, I specialized in solving power and fluids-related problems using Python and MATLAB. My role encompassed developing code to analyze and process environmental data, including variables such as air speed, temperature, and nanoparticle concentrations. I employed my skills to clean and preprocess the collected data, ensuring its accuracy and reliability for further analysis. Furthermore, I applied machine learning techniques to train models using the collected data, enabling the creation of accurate and robust simulations and representations. By leveraging my expertise in Python and MATLAB, I implemented algorithms and statistical models to optimize the training process and produce highly predictive models. Working in close collaboration with a multidisciplinary team, I effectively communicated and collaborated with domain experts to understand the specific requirements and nuances of the power and fluids domain. I actively contributed to the development of cutting-edge methodologies and techniques, continuously improving the accuracy and efficiency of the modeling process. My experience in The Solar Equipment Development Unit allowed me to gain a comprehensive understanding of power and fluids-related challenges and the ability to develop innovative solutions using programming languages like Python and MATLAB. I developed strong data analysis and modeling skills, combining domain knowledge with technical expertise to produce reliable and insightful results.",
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
            "• Planning and presenting lessons to facilitate students' understanding and application of mathematical concepts.• Preparing and distributing learning material such as notes, assignments, and quizzes.• Sourcing the resources and supplies needed for lessons.• Ensuring that the classroom remains safe and conducive to learning. • Grading assignments and quizzes in a timely manner. • Invigilating quizzes and final examinations. • Documenting and reporting on students' progress. • Attending meetings with parents and staff ",
          color: "#181717",
        },
        {
          title: "Developper",
          company: "HackAlgeria",
          company_url: "https://www.linkedin.com/company/hackalgeria/?originalSubdomain=fr",
          logo_path: "hackalgeria.png",
          duration: "juin 2020 - juin 2020",
          location: "Alger , Algeria",
          description:'At the Hackalgera hackathon, I participated in creating innovative solutions to detect fake news and analyze forged images. Collaborating with a talented team, we utilized advanced technologies such as natural language processing and computer vision to tackle these challenges. With my programming skills and expertise in NLP and image processing, I contributed to the development of an effective system. This experience deepened my understanding of misinformation and digital integrity while honing my teamwork and problem-solving abilities.',
          color: "#181717",

        }
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
    profile_image_path: "mus.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, flutter, React, django, flask and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://www.linkedin.com/in/mustapha-belkassem-9b04b116b/recent-activity/all/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Raleigh,Nc",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/vVdfKG7xEdkVjsQ29",
  },
  phoneSection: {
    title: "Phone:whatsapp:telegram",
    subtitle: "+213674901699",
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
