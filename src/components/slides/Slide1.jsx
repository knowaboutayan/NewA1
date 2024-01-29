import "../slides/Slide1.css"
import "../../index.css"
const Slide1 = () => <>
    
    
    <div className="flex flexRowDirection flexWrap slide1">
    
        <div className="flex flexColumnDirection" id="details">
           
            <h2 className="autoMargin" >
                HI, I am <big>Ayan Pradhan</big>
            </h2>

            <article className="autoMargin" >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum suscipit nam qui saepe deleniti, illo rem nobis accusamus tempora? Ipsum, odio hic minus ipsa ullam possimus in nihil ipsam quidem alias a odit quod explicabo fuga porro temporibus esse tempore, vitae dolores iure? Vitae, odio?
            </article>
            <button>Know More</button>
        </div>

        <div id="imageBox" className="flex centerAlign">
            <img src="https://img.freepik.com/free-vector/handsome-man_1308-85984.jpg?w=740&t=st=1706465553~exp=1706466153~hmac=1ede81ad9254f5d75f49cc07632e5a3be5273a708493dd600e75f6327fb6c42b" style={{width:"300px"}} alt="ddd"></img>
        </div>
    </div>
    <div></div>
</>
export default Slide1