import ProjectCard from "./subComponents/ProjectCard";
import SectionTitle from "./subComponents/SectionTitle";
import { useEffect, useId, useState } from "react";

import "./Projects.css"
import '@fortawesome/fontawesome-free/css/all.css';
import { Outlet } from "react-router-dom";


const Projects = () => {
    const projectDetails = [{
        projectName: "Weather Application",
        projectDescription: "The Weather Application is a comprehensive tool that provides users with real-time weather updates and forecasts spanning over 5 days. Users can conveniently track weather conditions for their desired locations, ensuring they stay informed and prepared for changes in atmospheric conditions. With the added feature of voice search functionality, users can interact with the application hands-free, enhancing accessibility and user experience.",
        technology: ["fab fa-react", "fab fa-css3"],
        codeLink: "https://wearher-app-tau.vercel.app/",
        viewLink: "https://wearher-app-tau.vercel.app/"
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
        projectName: "Matrix Operations",
        projectDescription: "The Matrix Operations project provides a versatile platform for performing various matrix operations, including addition, subtraction, and multiplication. It serves as a valuable tool for mathematicians, engineers, and students alike, enabling them to manipulate matrices efficiently and analyze complex data sets. With an intuitive interface and robust functionality, users can input matrices of any size and perform calculations with ease. The Matrix Operations project enhances productivity and facilitates deeper insights into mathematical concepts, empowering users to tackle sophisticated problems with confidence.",
        technology: ["fab fa-html5", "fab fa-css3", "fab fa-js"],
        codeLink: "https://github.com/knowaboutayan/Matrix-Operations",
        viewLink: "https://matrix-operations-dusky.vercel.app/"
    },
    {
        projectName: "Keyboard Test",
        projectDescription: "The Keyboard Test application offers users a comprehensive platform to evaluate the performance and functionality of their keyboards in real-time. With detailed keypress information and interactive displays, users can assess key responsiveness, rollover capabilities, and overall typing experience. This tool is invaluable for individuals seeking to optimize their typing efficiency, troubleshoot keyboard issues, or evaluate keyboard performance under various conditions. Whether for professional use, gaming, or personal computing, the Keyboard Test application provides insights and diagnostics to enhance the user's keyboard experience and productivity.",
        technology: ["fab fa-html5", "fab fa-css3", "fab fa-js"],
        codeLink: "https://github.com/knowaboutayan/keyboard-tester",
        viewLink: "https://keyboard-tester-lime.vercel.app/"
    },

    ];

    const [index, setIndex] = useState(0);

    const clicked = (e) => {
        setIndex(e)
    }
    
    return (
        <>   <SectionTitle sectionName={"Project"} />
            <div className="flex flexRowDirection flexWrap projectBox">
                <div id="projectList" className="flex flexColumnDirection">
                    {
                        projectDetails.map((project) => <><p  className={`flex centerAlign ${index===projectDetails.indexOf(project)?"activeProject":"p"}`} onClick={() => clicked(projectDetails.indexOf(project))} key={project.projectName}>{project.projectName}</p></>)
                    }
                </div>
                <div id="projectDetails" >
                    {(index <= 4 && index >= 0) ? <ProjectCard projectDetails={projectDetails[index]} /> : null}
                </div>
            </div>
        </>

    )
}
export default Projects;