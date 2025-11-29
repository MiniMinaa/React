import ProjectInfo from "./ProjectInfo.jsx"
import FormSS from "./../assets/FormSS.png"
import flexboxSS from "./../assets/flexboxSS.png"
import gridSS from "./../assets/gridSS.png"
import { useState } from "react"
import "./pages.css"
import Popup from "./Popup.jsx"

function Portfolio() {
    const [showProjects, setShowProjects] = useState(false);
    const [popup, setPopup] = useState(false);
    const [popupData, setPopupData] = useState({});
    const [search, setSearch] = useState("");
    const projects = [
        {
            name: "Form",
            img: FormSS,
        },
        {
            name: "Grid",
            img: gridSS,
        },
        {
            name: "Flexbox",
            img: flexboxSS,
        }
    ]

    const popupDataText = [
       {
            name: "Form",
            img: FormSS,
            link: "https://github.com/MiniMinaa/",
            tech: "HTML, CSS",
            summary: "I built a clean, responsive web form using HTML and CSS. I designed the layout, styling, and user experience, focusing on accessibility and consistency. Throughout the project, I improved form structure, solved alignment issues, and ensured the design works well across all devices."
       },
       {
            name: "Grid",
            img: gridSS,
            link: "https://github.com/MiniMinaa/",
            tech: "HTML, CSS",
            summary: "I built a layout using CSS Grid. I carefully designed the placement of elements, spacing, and alignment to ensure a clean and consistent visual hierarchy. Throughout the project, I refined the grid structure, solved layout inconsistencies, and optimized it to work seamlessly across different screen sizes and devices. This project helped me deepen my understanding of modern layout techniques and how to create flexible, maintainable designs."
       },
       {
            name: "Flexbox",
            img: flexboxSS,
            link: "https://github.com/MiniMinaa/",
            tech: "HTML, CSS",
            summary: "I built a website using Flexbox, carefully arranging elements to create a clean and consistent layout. I focused on alignment, spacing, and flexible sizing to ensure the design adapts smoothly to different screen sizes. Throughout the project, I solved layout challenges, refined component positioning, and ensured the interface works well across devices, enhancing both usability and visual consistency."
        }
    ]

    return (
        <>
            {showProjects && (
                <div className="search-container">
                    <input className="searchbar"
                        type="text"
                        placeholder="Search project..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            )}
            {showProjects && (
                <div className="projects">
                    {projects.filter((project) => (project.name.toLowerCase().includes(search)))

                    .map((project, index) => (
                        <ProjectInfo
                            key={project.name}
                            name={project.name}
                            img={project.img}
                            onClick={() => {
                                const data = popupDataText.find(p => p.name === project.name);
                                setPopupData(data);
                                setPopup(true);
                            }}
                        />
                    ))}
                </div>
            )}
            {!showProjects && (
                <div className="button-container">
                    <button className="portfolioButton" onClick={() => setShowProjects(true)}>View my projects!</button>
                </div>
            )}
            {popup && (
                <Popup
                    name={popupData.name}
                    img={popupData.img}
                    link={popupData.link}
                    tech={popupData.tech}
                    summary={popupData.summary}
                    onClose={() => setPopup(false)}
                />
            )}
        </>
    )
}
export default Portfolio