// Import CSS file
import './QualificationCard.css';

// Rest of your component code...

const QualificationCard = ({ icon = null, qualification = null, boardOrUnivercity = null, passingYear = null, instituteName = null, grade = null, obtainParcentage = null, cgpa = null }) => <>
    <div className="qualificationBox flex flexWrap">        <div id="icon">
        {icon}
    </div>
        <div>
            <h2>{qualification}</h2>
            <h3>{boardOrUnivercity}</h3>
            <h3>{instituteName}</h3>
            <h4>{passingYear}|{obtainParcentage || cgpa}</h4>
        </div>
    </div>
</>
export default QualificationCard;