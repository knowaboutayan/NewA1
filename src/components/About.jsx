
import SectionTitle from "./subComponents/SectionTitle";
import '@fortawesome/fontawesome-free/css/all.css';
import "./About.css"
const color = "color:red"
const About = () => <>
    <SectionTitle sectionName={"About"} />
    <div className="about flex flexRowDirextion flexWrap ">    <div >
        <article>

<main>Hello there!</main> I'm <big><b>Ayan Pradhan</b></big>, a passionate student pursuing Mathematics Honours while delving deep into the realms of technology. With a profound interest in both mathematics and technology, I find joy in exploring the intricate connections between the two domains.

My journey into the world of technology has been exhilarating, especially in the realm of web development. I've honed my skills in various web technologies, including ReactJS, CSS, and HTML, allowing me to craft engaging and dynamic web experiences.

As a mathematics enthusiast, I thrive on solving complex problems and approaching challenges with analytical thinking. I believe that the problem-solving skills inherent in mathematics beautifully complement the creativity and logic required in web development.

Beyond coding and equations, I am driven by a relentless curiosity to learn and grow. I constantly seek new opportunities to expand my knowledge and skills, whether it's exploring the latest developments in technology or diving into the depths of mathematical theory.

In my journey as a student and a tech enthusiast, I aspire to leverage my skills to create meaningful contributions that resonate with users and make a positive impact in the digital world.

Join me as I embark on this exciting journey of exploration, innovation, and growth!

</article>    </div>

        <div id="socialMedia" className="flex flexRowDirection centerAlign">
            
            <i className="fab fa-linkedin" style={{ color }} />
            <i className="fab fa-github" style={{ color }} />
            <i className="fab fa-whatsapp" style={{ color }} />
            <i className="fab fa-instagram" style={{ color }} />
            <i className="fab fa-facebook" style={{ color }} />
        </div>
    </div>

</>
export default About
