import { MdAssignment, MdSpeakerNotes } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { FaTools, FaUserGraduate, FaVideo } from "react-icons/fa";
import { FaLaptopCode, FaGithubSquare, FaTwitterSquare } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { RiPencilRuler2Fill } from "react-icons/ri";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";
import { renderToString } from "react-dom/server";

export const aboutText = [
  "Frontend Freaks empowers individuals to master frontend development through free resources and guidance for a successful journey.",

  "Join us today to unleash your potential, sharpen your coding prowess, and create stunning user experiences as a frontend master.",
];

export const aboutFounderText = [
  "Vishal Rajput, a frontend developer from India, is the driving force behind Frontend Freaks. With a diverse background of working with six startups, Vishal brings a wealth of practical experience to the table.",
  "As a dedicated mentor, Vishal has helped over 3000 students master frontend development, build real-world projects, and make contributions to open source. He takes immense pride in guiding more than 70 students to secure their first jobs in frontend development.",
  "Vishal's friendly and lighthearted approach sets him apart, making him a valuable asset to the Frontend Freaks community. Join us and benefit from Vishal's expertise as you unleash your frontend superpowers.",
  "Join us at Frontend Freaks and let Vishal Rajput guide you on your own path to success in frontend development. Get ready to unleash your frontend superpowers with the guidance of an exceptional mentor!",
];

export const founderSocialLinks = [
  {
    href: "https://twitter.com/Vishalraj_1",
    icon: <AiFillTwitterCircle size={45} className="hover:text-[#687eff]" />,
  },
  {
    href: "https://www.linkedin.com/in/vishalraj1/",
    icon: <AiFillLinkedin size={45} className="hover:text-[#687eff]" />,
  },
  {
    href: "https://www.youtube.com/c/VishalRajput_1",
    icon: <AiFillYoutube size={50} className="hover:text-[#687eff]" />,
  },
  {
    href: "https://github.com/Vishal-raj-1",
    icon: <AiFillGithub size={45} className="hover:text-[#687eff]" />,
  },
];

export const aboutSocialLinks = [
  {
    href: "https://twitter.com/frontendfreaks",
    name: "Twitter",
  },
  {
    href: "https://www.linkedin.com/company/frontendfreaks/",
    name: "LinkedIn",
  },
  {
    href: "https://www.youtube.com/@Vishalraj_1",
    name: "Youtube",
  },
];

export const accordionQuestions = [
  {
    id: "01",
    question: " What is Frontend Freaks?",
    answer:
      "Frontend Freaks is a vibrant community founded by Vishal Rajput, dedicated to helping individuals in frontend development. We provide resources to learn frontend basics, work on practical projects, and stay up-to-date with the latest industry trends.",
    open: false,
  },
  {
    id: "02",
    question: "What is Frontend Developer Mentorship? ",
    answer:
      "Frontend Developer Mentorship is our program at Frontend Freaks Community designed to guide newcomers in learning frontend development, building real-world projects, and assisting them in securing internships and jobs.",
    open: false,
  },
  {
    id: "03",
    question: " Is Frontend Developer Mentorship paid?",
    answer:
      "No, our mentorship programs and resources are completely free of cost. At Frontend Freaks, we believe in making quality education accessible to everyone.",
    open: false,
  },
  {
    id: "04",
    question: " When can I join?",
    answer:
      "You can join our community at any time! Our courses and resources are self-paced, allowing you to learn at your own convenience. ",
    open: true,
  },
  {
    id: "05",
    question: " What types of mentorship do you provide?",
    answer:
      "We offer three batches of mentorship. The first batch is perfect for beginners, covering HTML, CSS, and JavaScript fundamentals through exciting projects. The second batch focuses on mastering ReactJS and building real-world projects. The third batch provides guidance on job hunting, application strategies, and securing referrals.",
    open: false,
  },
  {
    id: "06",
    question: "Not sure which batch to join?",
    answer:
      "If you're confident in your HTML, CSS, and JavaScript skills, join batch 2 to learn ReactJS. Otherwise, start with batch 1 to establish a solid foundation before diving into ReactJS. If you already have impressive skills and projects, join batch 3 to focus on job applications. Otherwise, joining batch 2 to build real-world projects would be beneficial.",
    open: false,
  },
];

export const featuresData = [
  {
    icon: <FaUserGraduate size={40} color="#687eff" />,
    title: "Guidance",
    description:
      "Get guidance in your career and life with the best mentors and experts across the world.",
  },
  {
    icon: <FaVideo size={40} color="#687eff" />,
    title: "Curated Videos",
    description:
      "Discover through detailed tutorials: algorithm analysis, implementation, and optimization.",
  },
  {
    icon: <MdAssignment size={40} color="#687eff" />,
    title: "Assignments",
    description:
      "Assignments and questions are provided to understand the concepts well.",
  },
  {
    icon: <FaTools size={40} color="#687eff" />,
    title: "Learn By Doing",
    description:
      "Learn things by building awesome projects and doing open source contributions.",
  },
  {
    icon: <MdSpeakerNotes size={40} color="#687eff" />,
    title: "Notes",
    description:
      "Get cheatsheet and source code for all lectures to focus on learning and practicing.",
  },
  {
    icon: <BsPeopleFill size={40} color="#687eff" />,
    title: "Grow with Community",
    description:
      "Compete with your friends, practice with them & enter live sessions to grow daily.",
  },
];

export const batchData = [
  {
    icon: <RiPencilRuler2Fill size={50} color="#687eff" />,
    title: "Learn",
    linkTo: "learn",
  },
  {
    icon: <FaLaptopCode size={50} color="#687eff" />,
    title: "Build",
    linkTo: "build",
  },
  {
    icon: <GiReceiveMoney size={50} color="#687eff" />,
    title: "Hire",
    linkTo: "hire",
  },
];

const iconString = renderToString(
  <FaLaptopCode size={40} className="text-white" />
);
const iconURL = `data:image/svg+xml,${encodeURIComponent(iconString)}`;
console.log(iconURL);
