import ProjectInfo from "./ProjectInfo.jsx"
import FormSS from "./../assets/FormSS.png"
import flexboxSS from "./../assets/flexboxSS.png"
import gridSS from "./../assets/gridSS.png"
import { useState } from "react"
import "./pages.css"
import Popup from "./Popup.jsx"

function Portfolio() {
    const [showProjects, setShowProjects] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <>
            {selectedItem && (
                <Popup 
                    name={selectedItem.name}
                    img={selectedItem.img}
                    link={selectedItem.link}
                    tech={selectedItem.tech}
                    summary={selectedItem.summary}
                ></Popup>
            )}
            {!showProjects && (
                <div className="button-container">
                    <button className="portfolioButton" onClick={() => setShowProjects(true)}>View my projects!</button> 
                </div>
            )}
            {showProjects && (
                <div className="projects"> 
                    <ProjectInfo
                        name="Form"
                        img={FormSS}
                        onClick={() => setSelectedItem({
                            name: "Form",
                            img: FormSS,
                            link: "https://github.com/MiniMinaa/Form",
                            tech: "HTML, CSS",
                            summary: "I built a clean, responsive web form using HTML and CSS. I designed the layout, styling, and user experience, focusing on accessibility and consistency. Throughout the project, I improved form structure, solved alignment issues, and ensured the design works well across all devices."
                        })}
                    />
                    <ProjectInfo
                        name="Grid"
                        img={gridSS}                        
                        onClick={() => setSelectedItem({
                            name: "Grid",
                            img: gridSS,
                            link: "https://github.com/MiniMinaa/Form",
                            tech: "HTML, CSS",
                            summary: "I built a layout using CSS Grid. I carefully designed the placement of elements, spacing, and alignment to ensure a clean and consistent visual hierarchy. Throughout the project, I refined the grid structure, solved layout inconsistencies, and optimized it to work seamlessly across different screen sizes and devices. This project helped me deepen my understanding of modern layout techniques and how to create flexible, maintainable designs."
                        })}
                    />
                    <ProjectInfo
                        name="Flexbox"
                        img={flexboxSS}                       
                        onClick={() => setSelectedItem({
                            name: "Flexbox",
                            img: flexboxSS,
                            link: "https://github.com/MiniMinaa/Form",
                            tech: "HTML, CSS",
                            summary: "I built a website using Flexbox, carefully arranging elements to create a clean and consistent layout. I focused on alignment, spacing, and flexible sizing to ensure the design adapts smoothly to different screen sizes. Throughout the project, I solved layout challenges, refined component positioning, and ensured the interface works well across devices, enhancing both usability and visual consistency."
                        })}
                    />
                </div> 
            )}
        </>
    )
}
export default Portfolio