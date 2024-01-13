import './MenuHeader.css'
import { Link } from 'react-router-dom'

function MenuHeader(){
    return (
        <>
            <ul className="menu-header">
                <li><Link to={'/'}><a>Home</a></Link></li>
                <li><a id='link' href="#AboutSection">About Me</a></li>
                <li><a id='link' href="#ServiceSection">Services</a></li>
                <li><a id='link' href="#SkillSection">Skills</a></li>
                <li><a id='link' href="#PortfolioSection">Portfolio</a></li>
                <li><a id='link' href="#ContactSection">Contact</a></li>
            </ul>
        </>
    )
}
export default MenuHeader