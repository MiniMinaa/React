import ProjectInfo from "./components/ProjectInfo"
import FormSS from "./assets/FormSS.png"
import ResponsiveNavigationSS from "./assets/responsive-navigation-SS.png"
import bootstrapSS from "./assets/bootstrap-SS.png"
import "./normalize.css"

function App() {
    return (
        <>
            <ProjectInfo 
                name="Form" 
                img={FormSS}
                link="https://github.com/MiniMinaa/Form"
                list=<> 
                    <li>HTML</li> 
                    <li>CSS</li>
                </> 
                summary="I built a clean, responsive web form using HTML and CSS. I designed the layout, styling, and user experience, focusing on accessibility and consistency. Throughout the project, I improved form structure, solved alignment issues, and ensured the design works well across all devices."
                ></ProjectInfo>
            <ProjectInfo 
                name="Responsive Navigation" 
                img={ResponsiveNavigationSS}
                link="https://github.com/MiniMinaa/Form"
                list=<> 
                    <li>HTML</li> 
                    <li>CSS</li>
                </> 
                summary="I built a clean, responsive nav menu using HTML and CSS. I designed the layout, styling, and user experience, focusing on clarity and accessibility. Throughout the project, I refined menu structure, solved alignment issues, and ensured the navigation works smoothly across all devices."
            ></ProjectInfo>
            <ProjectInfo
                name="Bootstrap" 
                img={bootstrapSS}
                link="https://github.com/MiniMinaa/Form"
                list=<> 
                    <li>HTML</li> 
                    <li>CSS</li>
                </> 
                summary="I built a responsive interface using Bootstrap, designing the layout, components, and styling for a consistent user experience. Throughout the project, I explored Bootstrap’s grid and utilities, solved layout issues, and ensured the design works well across all devices."
            ></ProjectInfo>
        </>
    )
}

export default App
