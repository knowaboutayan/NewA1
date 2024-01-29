import { Link, NavLink } from "react-router-dom"
import Logo from "../../images/logo2.png"
import "../css/header.css"
import ContactPopup from "./subComponents/ContactPopup"
import { useState } from "react"
const Header = () => {
    const [showPopup,setShowPopup]=useState(false)
    const showPop=()=>{
        setShowPopup(!showPopup)
        
    }

    return (
        <>
            <nav >
                <div><img src={Logo} id="logo" alt="logo" style={{ maxWidth: "300px" }} /></div>
                <div className="menu">
                    <NavLink className="link" to="">Home</NavLink>
                    <NavLink className="link" to="about">

                        About

                    </NavLink>
                    <NavLink className="link" to="projects">

                        Project

                    </NavLink>

                    <NavLink className="link" to="contact">

                        Contact
                    </NavLink>
                </div>
                <div style={{}}><span>|</span><button to="contactform" onClick={showPop}><i className="fas fa-envelope"></i>Hire Me</button></div>
            </nav>
            <div>
                
            {
                (showPopup)?<ContactPopup closePopup={showPop}/>:null
            }
            </div>
        </>)
}

export default Header;
