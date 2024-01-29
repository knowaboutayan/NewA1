import "./SectionTitle.css"
import '@fortawesome/fontawesome-free/css/all.css';
const SectionTitle = ({sectionName=null }) => <>
    <div className="sectionTitle">
        <h1>
            
                  {sectionName}
            
        </h1>
    </div>
</>
export default SectionTitle