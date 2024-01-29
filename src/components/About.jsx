import QualificationCard from "./subComponents/QulificationCard";
import SectionTitle from "./subComponents/SectionTitle";
import '@fortawesome/fontawesome-free/css/all.css';
import "./About.css"
const color = "color:red"
const About = () => <>
    <SectionTitle sectionName={"About"} />
    <div className="about flex flexRowDirextion flexWrap ">    <div >
        <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore atque eligendi, esse molestias veniam explicabo. Expedita soluta ipsam animi illo veritatis. Eaque facere fuga asperiores quasi dolorum quibusdam fugit corporis. Est, eum! Magnam sint fugit optio possimus temporibus consequatur! Illo dolores facilis hic quidem provident, natus possimus impedit, accusantium earum voluptatibus laudantium dignissimos veniam.</article>
    </div>

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