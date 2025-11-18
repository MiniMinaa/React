import "./projectInfo.css"

function ProjectInfo(props) {

    return (
        <div className="info">
            <img className="img" src={props.img} alt="My project" />
            <h1 className="header">{props.name}</h1>
            <p className="summary">{props.summary}</p>
            <ul className="list">{props.list}</ul>
            <a className="link" href={props.link}>Link to my GitHub repository</a>
        </div>
    )
}

export default ProjectInfo
