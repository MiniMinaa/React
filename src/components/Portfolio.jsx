import ProjectInfo from "./ProjectInfo.jsx"
import FormSS from "./../assets/FormSS.png"
import bootstrapSS from "./../assets/bootstrap-SS.png"
import ResponsiveNavigationSS from "./../assets/responsive-navigation-SS.png"
import { useState } from "react"
import "./pages.css"

function Portfolio() {
    const [showProjects, setShowProjects] = useState(false);

    return (
        <>
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
                        link="https://github.com/MiniMinaa/Form"
                        tech="HTML, CSS"
                        summary="I built a clean, responsive web form using HTML and CSS. I designed the layout, styling, and user experience, focusing on accessibility and consistency. Throughout the project, I improved form structure, solved alignment issues, and ensured the design works well across all devices."
                        ></ProjectInfo>
                    <ProjectInfo 
                        name="Responsive Navigation" 
                        img={ResponsiveNavigationSS}
                        link="https://github.com/MiniMinaa/Form"
                        tech="HTML, CSS"
                        summary="I built a clean, responsive nav menu using HTML and CSS. I designed the layout, styling, and user experience, focusing on clarity and accessibility. Throughout the project, I refined menu structure, solved alignment issues, and ensured the navigation works smoothly across all devices."
                    ></ProjectInfo>
                    <ProjectInfo
                        name="Bootstrap" 
                        img={bootstrapSS}
                        link="https://github.com/MiniMinaa/Form"
                        tech="HTML, CSS"
                        summary="I built a responsive interface using Bootstrap, designing the layout, components, and styling for a consistent user experience. Throughout the project, I explored Bootstrap’s grid and utilities, solved layout issues, and ensured the design works well across all devices."
                    ></ProjectInfo>
                </div> 
            )}
        </>
    )
}
export default Portfolio