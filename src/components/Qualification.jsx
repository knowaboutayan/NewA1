import { Link } from "react-router-dom"
import QualificationCard from "./subComponents/QulificationCard"
import SectionTitle from "./subComponents/SectionTitle"

const Qualifiction = () => {
    return (<>
    <SectionTitle sectionName={"Qualification"} />
        <div className="flex flexRowDirection flexWrap centerAlign" style={{justifyContent:"space-around"}}>
            <QualificationCard qualification={"Bachelor Of Science in MATHEMATICS"} boardOrUnivercity={"Vidyasagar University"} instituteName={"Midnapore College (Autonomous)"} passingYear={2023} cgpa={8.78} />
            <QualificationCard qualification={"Higher Secondary / 12th"} boardOrUnivercity={"West Bengal Council Of Higher Secondary Education"} instituteName={"Jhargram Kumud Kumari Institution"} passingYear={2020} obtainParcentage={93} />
            <QualificationCard qualification={"Secondary / 10th"} boardOrUnivercity={"West Bengal Board Of Secondary Education"} instituteName={"Jhargram Kumud Kumari Institution"} passingYear={2018} obtainParcentage={83.5} />
        </div>
        <div>
           <Link to="https://drive.google.com/file/d/1QoG3yQ0jR77YxJbJFFqxrEUg4lBFvFCz/view?usp=sharing" target="_blank"> <button>Resume</button></Link>
        </div>
    </>
    )
}
export default Qualifiction