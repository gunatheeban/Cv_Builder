import { createContext, useEffect, useRef, useState } from "react";
import MenuTop from "./cv_editor_components/MenuTop";
import { StyleSheet } from "@react-pdf/renderer";

import html2canvas from "html2canvas";
import Editor from "./cv_editor_components/Editor";
import Preview from "./cv_editor_components/Preview";
import TemplateBlock from "./cv_editor_components/TemplateBlock";

export const PaginationContext = createContext({
  page: 0,
  setPage: (page: number) => {
    0;
  },
});

export const CvDataContext = createContext({
  data: {
    name: "",
    title: "",
    email: "",
    phone: "",
    address: "",
    about: "",
    experiences: [
      {
        title: "",
        company: "",
        location: "",
        from: "",
        to: "",
        present: true,
        description: "",
      },
    ],
    educations: [
      {
        school: "",
        degree: "",
        major: "",
        from: "",
        to: "",
        present: false,
      },
    ],
    skills: [{ name: "", level: 0 }],
    projects: [
      {
        name: "E-Commerce Platform",
        description:
          "Developed a scalable e-commerce platform using React and Node.js, enabling seamless online shopping experiences.",
      },
      {
        name: "Portfolio Website",
        description:
          "Created a personal portfolio website to showcase projects and skills using React and Tailwind CSS.",
      },
      {
        name: "Task Management App",
        description:
          "Built a task management application with React and Redux, allowing users to organize and prioritize tasks effectively.",
      },
      {
        name: "Weather Dashboard",
        description:
          "Implemented a weather dashboard using React and OpenWeather API to display real-time weather updates.",
      },
      {
        name: "Chat Application",
        description:
          "Developed a real-time chat application using React, Socket.IO, and Node.js for seamless communication.",
      },
      {
        name: "Expense Tracker",
        description:
          "Built an expense tracking app with React and Firebase, allowing users to manage their finances effectively.",
      },
      {
        name: "Blog Platform",
        description:
          "Created a blogging platform using React and GraphQL, enabling users to write, edit, and share articles.",
      },
      {
        name: "Fitness Tracker",
        description:
          "Designed a fitness tracking app using React Native, helping users monitor their workouts and health goals.",
      },
      {
        name: "Online Learning Platform",
        description:
          "Implemented an online learning platform with React and Django, providing courses and quizzes for students.",
      },
    ],
    certifications: ["", ""],
    languages: [""],
    hobbies: [""],
    references: [
      {
        name: "",
        title: "",
        company: "",
        email: "", // optional
        phone: "", // optional
      },
    ],
    socials: [
      {
        icon: "",
        name: "",
        link: "",
      },
    ],
    template: "simple",
    theme: 1,
    bgColor: "#ffffff",
    pageSettings: {
      marginLeft: "0",
      marginTop: "0",
      marginRight: "0",
      marginBottom: "0",
      fontFamily: "",
    },
  },
  setData: (data: any) => {},
});

export default function CvGenerator() {
  const [previewImage, setPreviewImage] = useState("");
  const previewRef = useRef<HTMLDivElement | null>(null);
  const cvRef = useRef<HTMLDivElement | null>(null);

  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    name: "John Doe",
    title: "Software Engineer",
    email: "john@gmail.com",
    phone: "123456789",
    address: "123 Main St, City, State",
    about:
      "A software engineer with 5 years of experience in software development. Skilled in building scalable web applications, collaborating with cross-functional teams, and delivering high-quality software solutions. Passionate about learning new technologies and improving development processes.",
    experiences: [
      {
        title: "Software Engineer",
        company: "ABC Inc",
        location: "City, State",
        from: new Date().toISOString(),
        to: new Date().toISOString(),
        present: true,
        description: "Developed software applications for clients",
      },
      {
        title: "Software Engineer",
        company: "ABC Inc",
        location: "City, State",
        from: new Date().toISOString(),
        to: new Date().toISOString(),
        present: true,
        description: "Developed software applications for clients",
      },
      {
        title: "Software Engineer",
        company: "ABC Inc",
        location: "City, State",
        from: new Date().toISOString(),
        to: new Date().toISOString(),
        present: true,
        description: "Developed software applications for clients",
      },
    ],
    educations: [
      {
        school: "XYZ University",
        degree: "Bachelor of Science",
        major: "Computer Science",
        from: new Date().toISOString(),
        to: new Date().toISOString(),
        present: false,
      },
      {
        school: "XYZ University",
        degree: "Bachelor of Science",
        major: "Computer Science",
        from: new Date().toISOString(),
        to: new Date().toISOString(),
        present: false,
      },
    ],
    skills: [
      { name: "JavaScript", level: 5 },
      { name: "React", level: 4 },
      { name: "Node.js", level: 4 },
      { name: "Python", level: 3 },
      { name: "Java", level: 3 },
      { name: "AWS", level: 4 },
      { name: "Google Cloud", level: 4 },
    ],
    projects: [
      {
        name: "E-Commerce Platform",
        description:
          "Developed a scalable e-commerce platform using React and Node.js, enabling seamless online shopping experiences.",
      },
      {
        name: "Portfolio Website",
        description:
          "Created a personal portfolio website to showcase projects and skills using React and Tailwind CSS.",
      },
      {
        name: "Task Management App",
        description:
          "Built a task management application with React and Redux, allowing users to organize and prioritize tasks effectively.",
      },
      {
        name: "Weather Dashboard",
        description:
          "Implemented a weather dashboard using React and OpenWeather API to display real-time weather updates.",
      },
      {
        name: "Chat Application",
        description:
          "Developed a real-time chat application using React, Socket.IO, and Node.js for seamless communication.",
      },
      {
        name: "Expense Tracker",
        description:
          "Built an expense tracking app with React and Firebase, allowing users to manage their finances effectively.",
      },
      {
        name: "Blog Platform",
        description:
          "Created a blogging platform using React and GraphQL, enabling users to write, edit, and share articles.",
      },
      {
        name: "Fitness Tracker",
        description:
          "Designed a fitness tracking app using React Native, helping users monitor their workouts and health goals.",
      },
      {
        name: "Online Learning Platform",
        description:
          "Implemented an online learning platform with React and Django, providing courses and quizzes for students.",
      },
    ],
    certifications: [
      "AWS Certified Developer",
      "Google Cloud Professional Cloud Architect",
    ],
    languages: ["English", "Spanish"],
    hobbies: ["Traveling", "Photography"],
    references: [
      {
        name: "Jane Doe",
        title: "Software Engineer",
        company: "DEF Inc",
        email: "", // optional
        phone: "", // optional
      },
      {
        name: "Jane Doe",
        title: "Software Engineer",
        company: "DEF Inc",
        email: "", // optional
        phone: "", // optional
      },
    ],
    socials: [
      {
        icon: "linkedin",
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/johndoe",
      },
      {
        icon: "github",
        name: "GitHub",
        link: "",
      },
    ],
    template: "simple",
    theme: 1,
    bgColor: "#ffffff",
    pageSettings: {
      marginLeft: "1",
      marginTop: "1",
      marginRight: "1",
      marginBottom: "1",
      fontFamily: "",
    },
  });
  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      padding: 20,
    },
    section: {
      marginBottom: 20,
    },
    heading: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 10,
    },
    paragraph: {
      fontSize: 12,
      marginBottom: 5,
    },
    image: {
      width: 100,
      height: 100,
      marginBottom: 10,
    },
  });

  const generatePreview = async () => {
    if (previewRef.current) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const canvas = await html2canvas(previewRef.current);
      const imageUrl = canvas.toDataURL("image/png");
      setPreviewImage(imageUrl);
    } else {
      console.log("not there");
    }
  };

  useEffect(() => {
    generatePreview();
  }, [data]);

  return (
    <CvDataContext.Provider value={{ data, setData }}>
      <div className="flex flex-col md:flex-row h-full p-5 ">
        <div className="w-full md:w-1/2 h-full p-4 ">
          <PaginationContext.Provider value={{ page, setPage }}>
            <Editor />
          </PaginationContext.Provider>
        </div>
        <div className="w-full md:w-1/2 h-full p-4 mr-14">
          <TemplateBlock previewRef={previewRef} data={data} cvRef={cvRef} />
          <MenuTop previewRef={cvRef} />
          <Preview previewImage={previewImage} />
        </div>
      </div>
    </CvDataContext.Provider>
  );
}
