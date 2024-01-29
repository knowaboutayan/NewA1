
import About from "./About"
import Contact from "./Contact"
import Projects from "./Projects"
import Skill from "./Skill"
import SlideConainer from "./SlideContainer"
import Qualifiction from "./Qualification"


const Home = () => {

    return (
        <>
            <SlideConainer />
            <About />
            <Qualifiction/>
            <Skill />
            <Projects />
            <Contact />
        </>
    )
}
export default Home