import SectionTitle from "./subComponents/SectionTitle"
import SkillCard from "./subComponents/SkillCard"

const Skill = () =>{
    const skills = [
        {
            icon: "fab fa-html5",
            name: "HTML5",
            experienceYear: 3,
        },
        {
            icon: "fab fa-css3",
            name: "CSS3",
            experienceYear: 3,
        },
        {
            icon: "fab fa-js",
            name: "JavaScript",
            experienceYear: 3,
        },
        {
            icon: "fas fa-c",
            name: "C",
            experienceYear: 2,
        },
        {
            icon: "fas fa-c-plus-plus",
            name: "C++",
            experienceYear: 2,
        },
        {
            icon: "fab fa-python",
            name: "Python",
            experienceYear: 2,
        },
        {
            icon: "fab fa-react",
            name: "ReactJS",
            experienceYear: 1,
        },
    ];
    
return (
    <>
        <SectionTitle sectionName={"Skill"} />
        <div className="flex flexRowDirection flexWrap skill" style={{justifyContent:"space-around"}}>
        {
            skills.map((eachSkill)=>
                <SkillCard key={eachSkill.name} eachSkill={eachSkill}/>

            )
        }
        </div>

    </>
)
}
export default Skill