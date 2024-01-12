import '../menu/MenuHeader.css'
import { Link } from 'react-router-dom'

function MenuHeader(){
    if(false)
    {   
        return (
            <>
                <ul className="menu-header">
                    <li><Link to={'/'}><a id='link' href="#">Home</a></Link></li>
                    <li><Link to={'/About'}></Link><a>About Me</a></li>
                    <li><Link to={'/Services'}></Link><a>Services</a></li>
                    <li><Link to={'/Skills'}></Link><a>Skills</a></li>
                    <li><Link to={'/Portfolio'}></Link><a>Portfolio</a></li>
                    <li><Link to={'/Contact'}></Link><a>Contact</a></li>
                </ul>
            </>
        )
    } else {
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
}
export default MenuHeader