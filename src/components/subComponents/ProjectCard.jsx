import '@fortawesome/fontawesome-free/css/all.css';
import "./ProjectCard.css"
const ProjectCard = ({ projectDetails = {} }) => {
    return (
        <div className='project-card'>
            <h2>{projectDetails && projectDetails.projectName}</h2>
            <p className='flex flexWrap centerAlign' style={{minWidth:"300px"}}>{(projectDetails && projectDetails.technology).map((iconName) => <i className={iconName} />)}</p>
            <article style={{ flex: 1 }}><h6>{projectDetails && projectDetails.projectDescription}</h6></article>
            
            <div className='centerAlign flex'>
                {(projectDetails && projectDetails.codeLink) ? <a href={projectDetails && projectDetails.codeLink} target="_blank"><button>code</button></a> : null}

                {(projectDetails && projectDetails.viewLink) ? <a href={projectDetails && projectDetails.viewLink} target="_blank"><button>view</button></a> : null}

            </div>
        </div>
    )
}
export default ProjectCard