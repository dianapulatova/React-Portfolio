
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /*  Summary And Greeting Section */
  username: "Diana Pulatova",
  title: "Hi all, I'm Diana",
  subTitle: emoji("A passionate Software Engineer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."),
  resumeLink: ""
};

// Social Media Link

const socialMediaLinks = {

  github: "https://github.com/dianapulatova",
  linkedin: "https://www.linkedin.com/in/diana-pulatova/",
  gmail: "dianapulatovaa@gmail.com",
  // gitlab: "https://gitlab.com/dianapulatova",
  // facebook: "https://www.facebook.com/diana.pulatovaa",
  // medium: "https://medium.com/@dianapulatovaa",
  // stackoverflow: "https://stackoverflow.com/users/13675755/diana",
  // twitter: "https://twitter.com/Diana_Pulatovaa",
  // instagram: "https://www.instagram.com/diana_pulatovaa/"
  // Instagram and Twitter are also supported in the links!
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Full - Stack SOftware Engineer who is passionate for AI",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
  ],



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
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },

    {
      skillName: "Go",
      fontAwesomeClassname: "fab fa-golang"
    }

   
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "100%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming",
      progressPercentage: "95%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
   

    {
      role: "Freelance Full-Stack Software Engineer ",  
      company: "Freelancer",
      companylogo: require("./assets/images/freelancer-1.svg"),
      date: "July 2020 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "dianapulatova", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      name: "Talkque",
      image: require("./assets/images/talkque.png"),
      link: "http://talkque.com/"
    },
    
  ]
};

//  Personal projects




// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "New post is coming soon!",

  blogs: [
    
    {
      url: "",
      title: "",
      description: ""
    },
    {
      url: "",
      title: "",
      description: ""
    }
  ]
};




const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+1(917) 708-0907",
  // email_address: "dianapulatovaa@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "diana_pulatovaa"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, blogSection, contactInfo , twitterDetails};
