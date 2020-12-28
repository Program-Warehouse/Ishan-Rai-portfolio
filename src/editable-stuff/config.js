// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Ishan",
  middleName: "",
  lastName: "Rai",
  message: "Learning and growing with a vision to bring some change, I'm currently pursuing Bachelor's in Business Administration. I own a varied skill set from management to technical. I’ve also been an active and observing student at my university, participating at various events and clubs. Currently working at multiple start-ups, leading them to grow and compete in the market. I have a result-driven and strategic-minded working style.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/ishan-gg",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/ishanrai111/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/raiishan22",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/ishanrai111",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/ishanrai111",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/person.png"),
  imageSize: 375,
  message:
    "Learning and growing with a vision to bring some change, I'm currently pursuing Bachelor's in Business Administration. I own a varied skill set from management to technical. I’ve also been an active and observing student at my university, participating at various events and clubs. Currently working at multiple start-ups, leading them to grow and compete in the market. I have a result-driven and strategic-minded working style.",
  resume: require("../editable-stuff/person.png"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "ishan-gg", 
  reposLength: 0,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  images: [
    { 
      img: require("../editable-stuff/person.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/person.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Graphic Designing", value: 70 },
    { name: "Digital Marketing", value: 80 },
    { name: "Microsoft Word", value: 75 },
    { name: "Microsoft Excel", value: 75 },
    { name: "Microsoft PowerPoint", value: 75 },
    { name: "WordPress", value: 65 },
  ],
  softSkills: [
    { name: "Team Leadership", value: 80 },
    { name: "Business Administration", value: 80 },
    { name: "Business Communication", value: 80 },
    { name: "Creative Problem Solving", value: 70 },
    { name: "Corporate Strategy", value: 70 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I come from a middle-class family in a village, with a vision to change the society towards a growing and learning community. My inspiration is Mr. Elon Musk, and looking up to him I want to give humanity a big leap of progress.",
  email: "ishanrai111@gmail.com",
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch };
