import { useEffect, useState } from "react"
import ContactForm from "./ContactForm"
import "./ContactPopup.css"
import SectionTitle from "./SectionTitle"

const ContactPopup = ({ closePopup = {} }) => {
    let popUpState = false;
    const[animationName,setanimationName]=useState("popUpCome 1s ease-in 0.2s 1  forwards")
    const anima =()=>useEffect( () => {
        if (!popUpState) {
            popUpState = !popUpState;
            setanimationName("popUpCome 1s ease-in 0.2s 1  forwards")
          }
          else{
            popUpState = !popUpState
            setanimationName(" popUpCome 1s ease-in 0.2s 1 reverse forwards")
          }


        
    },[popUpState])


    return (
        <>
            <div className="popUp" style={{ animation: `${animationName}` }}>

                <div className="flex" style={{ justifyContent: "flex-end" }}>

                    <h2 className="flex flexRowDirection" style={{ margin: 0 }}> <i onClick={closePopup} className="fa fa-close" /></h2>
                </div>

                <div className="flex flex1">
                    <div className="flex flexRowDirection flexWrap  flex1" style={{ justifyContent: "space-between" }}>

                        <ContactForm />
                    </div>

                </div>
            </div>
        </>
    )
}
export default ContactPopup