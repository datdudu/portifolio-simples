import './MenuHeaderRouter.css'
import { Link } from "react-router-dom"

function MenuHeaderRouter(){
    return (
        <>
            <ul className="menu-header">
                <li><Link to={'/'}><a id='link' href="#">Home</a></Link></li>
                <li><Link to={'/About'}><a>About Me</a></Link></li>
                <li><Link to={'/Services'}><a>Services</a></Link></li>
                <li><Link to={'/Skills'}><a>Skills</a></Link></li>
                <li><Link to={'/Portfolio'}><a>Portfolio</a></Link></li>
                <li><Link to={'/Contact'}><a>Contact</a></Link></li>
            </ul>
        </>
    )
}
export default MenuHeaderRouter