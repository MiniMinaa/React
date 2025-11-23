import "./projectInfo.css"

function ProjectInfo(props) { 

    return (
        <div className="info" onClick={() => props.onClick(props)}>
            <h1 className="header">{props.name}</h1>
            <img className="img" src={props.img} alt="My project" />            
        </div>
    );
}

export default ProjectInfo
