/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: false // set to false to use static SVG
};

const greeting = {
  username: "Jatin Salve",
  title: "Hi all, I'm Jatin Salve",
  subTitle: emoji(
    "A passionate Full Stack Software Developer and Competitive Programmer 🚀 having keen interest in Machine Learning and AI and A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact. "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1uPzGn-vqzXfo6UpRkCKUMAHW4DzusMRq/view?usp=drivesdk",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jatinS-dev",
  linkedin: "https://www.linkedin.com/in/jatin-salve-b1001b1a2/",
  gmail: "jasalve_b19@el.vjti.ac.in",
  instagram: "https://www.instagram.com/_jatin_1_/",
  medium: "https://medium.com/@jasalve_b19",

  // Instagram and Twitter are also supported in the links!
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ I do competitive Programming on Codechef and Codeforces"),
    emoji("⚡ Learning about devops technology stack")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "ML/ AI",
      fontAwesomeClassname: "fab fa-kaggle"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Veermata Jijabai Technological Institute",
      logo: require("./assets/images/vjti.jpeg"),
      subHeader: "Bachelor of Technology in Electronics Engineering",
      duration: "August 2019 - June 2023",
      desc: "Technical Team Member",
      descBullets: [
        "Community of Coders (COC) ",
        "Developer Students Club (DSC) "
      ]
    },
    {
      schoolName: "Vivekanand Education Society",
      logo: require("./assets/images/ves.jpeg"),
      subHeader: "HSC",
      duration: "June 2017 - May 2019",
      desc: "Ranked top 10% in the program.",
      descBullets: ["97.2 Percentile in MHT-CET", "81.69 % in HSC"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "75%"
    },
    {
      Stack: "Competitive Programming (C++ & JAVA)",
      progressPercentage: "80%"
    },
    {
      Stack: "DBMS",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "REACT FRONTEND DEVELOPER",
      company: "FREELANCER",
      companylogo: require("./assets/images/freelancer1.jpeg"),
      date: "June 2020 – Dec 2020",
      descBullets: [
        "Employed mastery of front-end technologies (React, Redux, JS, CSS) in collaboration with senior developer by translating UI/UX design wireframe to actual code",
        "Applied version control software (Git) to track, test, and update pre-existing source-code"
      ]
    },
    {
      role: "Machine Learning",
      company: "Verzeo",
      companylogo: require("./assets/images/verzeo.jpeg"),
      date: "Jan 2020 - March 2020",
      desc: "Done the learning based Machine Learning internship in assosiation with Microsoft",
      descBullets: [
        "Learned the fundamentals and the core machine learning algorithms",
        "Implemented the algorithms in Project"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/zoom.jpeg"),
      projectName: "Zoom Clone",
      projectDesc:
        "Developed a web based video conferencing application using the technologies like NodeJS, WebRTC, EJS, etc.",
      footerLink: [
        {
          name: "Visit github repo",
          url: "https://github.com/jatinS-dev/ZOOM-CLONE"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/cowin.jpeg"),
      projectName: "Cowin Notifier",
      projectDesc:
        "Build a web based React application integrating with NodeJS in the backend to give the availability of Cowin Slots on regular time of interval",
      footerLink: [
        {
          name: "Visit github repo",
          url: "https://github.com/jatinS-dev/CovidNotifier"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Machine Learning by Microsoft",
      subtitle:
        "Successfully completed the learning based Machine Learning internship in assosiation with Microsoft",
      image: require("./assets/images/verzeo.jpeg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1wd38SeW4-dmR1d7O14zlIMaasrVvhXe9/view?usp=drivesdk"
        }
      ]
    },
    {
      title: "Mastering Data Structures and Algorithm in C and C++",
      subtitle:
        "Successfully Completed the Data Structures and algorithm course on Udemy",
      image: require("./assets/images/udemy.jpeg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1vBVTHu5YdkwaOertMKe6T9d2sZjQYnjx/view"
        }
      ]
    },

    {
      title: "Python For Everybody Specialization",
      subtitle: "Done the Python Specialization on Coursera",
      image: require("./assets/images/coursera.jpeg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1vBVTHu5YdkwaOertMKe6T9d2sZjQYnjx/view"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "jasalve_b19@el.vjti.ac.in",
  number: "Open for Opportunities: YES"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
