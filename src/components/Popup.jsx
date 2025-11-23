import "./pages.css"

function Popup(props) {
    const { name, img, summary, tech, link } = props;

    return (
        <div className="popup-container">
            <h1 className="pheader">{name}</h1>
            <img className="pimg" src={img} alt="My project" />            
            <p className="psummary">{summary}</p>
            <p className="ptech">{tech}</p>
            <a className="plink" href={link}>Link to my GitHub repository</a>                
        </div>
    )
}
export default Popup;