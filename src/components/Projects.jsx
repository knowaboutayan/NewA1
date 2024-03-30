import ProjectCard from "./subComponents/ProjectCard";
import SectionTitle from "./subComponents/SectionTitle";
import { useEffect, useId, useState } from "react";

import "./Projects.css"
import '@fortawesome/fontawesome-free/css/all.css';
import { Outlet } from "react-router-dom";


const Projects = () => {
    const projectDetails = [ 
        projectName: "Hostel Management",
        projectDescription: "🚀 This ReactJS-based Hostel Management App, powered by Appetite backend, offers a user-friendly interface for hostel management. Users register securely, while admins track daily expenses and member deposits. Automated calculations ensure accurate financial management, enhancing operational efficiency.
        technology: ["fab fa-react", "fab fa-css3"],
        viewLink: "hostel-management-lilac.vercel.app",

    },

{
        projectName: "Quiz Application ",
        projectDescription: "🚀 Introducing Quizify: Your Gateway to Knowledge and Fun! Explore diverse quizzes, challenge yourself, and unlock new horizons. Join us on the journey of exploration and learning! ",
        technology: ["fab fa-react", "fab fa-css3"],
        viewLink: "https://quiz-app-five-theta.vercel.app/",

    },
{
        projectName: "Weather Application",
        projectDescription: "The Weather Application is a comprehensive tool that provides users with real-time weather updates and forecasts spanning over 5 days. Users can conveniently track weather conditions for their desired locations, ensuring they stay informed and prepared for changes in atmospheric conditions. With the added feature of voice search functionality, users can interact with the application hands-free, enhancing accessibility and user experience.",
        technology: ["fab fa-react", "fab fa-css3"],
        codeLink: "https://wearher-app-tau.vercel.app/",
        viewLink: "https://wearher-app-tau.vercel.app/"
    },
    {
        projectName: "Image Resizer & Background Remover",
        projectDescription: "Our Python-based project combines image background removal and size reduction seamlessly using popular packages like Pillow and OpenCV. Users can effortlessly remove backgrounds with precision algorithms, enhancing image versatility for various applications. Additionally, the tool allows resizing images to desired dimensions while maintaining aspect ratios, optimizing them for different platforms. With a user-friendly interface and efficient processing, our project streamlines image editing tasks, saving time and effort. Whether for graphic design, e-commerce, or personal use, our solution empowers users to achieve professional-quality results with ease, making it an essential tool for diverse image editing needs.",
        technology: ["fab fa-python"],
        codeLink: "https://github.com/knowaboutayan/image-compressor-and-converter",

    },
    {
        projectName: "Password Generator",
        projectDescription: "The Password Generator is a robust solution designed to enhance digital security by generating strong and secure passwords. With sophisticated algorithms, it creates passwords that meet stringent security requirements, including complexity and randomness. This tool empowers users to safeguard their online accounts against unauthorized access and cyber threats. The Password Generator simplifies the process of creating and managing passwords, promoting better security practices and ensuring peace of mind for users in an increasingly digital landscape.",
        technology: ["fab fa-react", "fab fa-css3"],
        codeLink: "https://github.com/knowaboutayan/password-generator",
        viewLink: "https://password-generator-ochre-pi.vercel.app"
    },
    {
        projectName: "Currency Converter",
        projectDescription: "The Currency Converter is an invaluable resource for individuals and businesses alike, offering real-time currency conversion rates and facilitating seamless transactions across different currencies. Users can effortlessly convert between currencies with precision and accuracy, leveraging up-to-date exchange rates to make informed financial decisions. Whether for travel, commerce, or investment purposes, the Currency Converter streamlines the currency conversion process, eliminating complexities and uncertainties associated with international transactions.",
        technology: ["fab fa-react", "fab fa-css3"],
        codeLink: "https://github.com/knowaboutayan/currency-converter2",
        viewLink: "https://currency-converter2-nine.vercel.app/"
    },
    {
        projectName: "Keyboard Test",
        projectDescription: "The Keyboard Test application offers users a comprehensive platform to evaluate the performance and functionality of their keyboards in real-time. With detailed keypress information and interactive displays, users can assess key responsiveness, rollover capabilities, and overall typing experience. This tool is invaluable for individuals seeking to optimize their typing efficiency, troubleshoot keyboard issues, or evaluate keyboard performance under various conditions. Whether for professional use, gaming, or personal computing, the Keyboard Test application provides insights and diagnostics to enhance the user's keyboard experience and productivity.",
        technology: ["fab fa-html5", "fab fa-css3", "fab fa-js"],
        codeLink: "https://github.com/knowaboutayan/keyboard-tester",
        viewLink: "https://keyboard-tester-lime.vercel.app/"
    },
    {
        projectName: "Matrix Operations",
        projectDescription: "The Matrix Operations project provides a versatile platform for performing various matrix operations, including addition, subtraction, and multiplication. It serves as a valuable tool for mathematicians, engineers, and students alike, enabling them to manipulate matrices efficiently and analyze complex data sets. With an intuitive interface and robust functionality, users can input matrices of any size and perform calculations with ease. The Matrix Operations project enhances productivity and facilitates deeper insights into mathematical concepts, empowering users to tackle sophisticated problems with confidence.",
        technology: ["fab fa-html5", "fab fa-css3", "fab fa-js"],
        codeLink: "https://github.com/knowaboutayan/Matrix-Operations",
        viewLink: "https://matrix-operations-dusky.vercel.app/"
    }


    ];

    const [index, setIndex] = useState(0);
    const autoSwitch= () => {
        setIndex((index + 1) % projectDetails.length);

    }
    let setInt = setTimeout(autoSwitch, 5000);

    const clicked = (e) => {
        clearTimeout(setInt)
        setIndex(e % projectDetails.length)
    }




    return (
        <>   <SectionTitle sectionName={"Project"} />
            <div className="flex flexRowDirection flexWrap projectBox">
                <div id="projectList" className="flex flexColumnDirection">
                    {
                        projectDetails.map((project) => <><p className={`flex centerAlign ${index === projectDetails.indexOf(project) ? "activeProject" : "p"}`} onClick={() => clicked(projectDetails.indexOf(project))} key={project.projectName}>{project.projectName}</p></>)
                    }
                </div>
                <div id="projectDetails" >
                    {(index < projectDetails.length && index >= 0) ? <ProjectCard projectDetails={projectDetails[index]} /> : <article><h2>Loading...</h2></article>}
                </div>
            </div>
        </>

    )
}
export default Projects;