import '../menu/MenuHeader.css'
import { Link } from 'react-router-dom'
function MenuHeader(){
    return (
        <>
            <ul className="menu-header">
                <li><Link to='/banner'><a href="#">Home</a></Link></li>
                <li><Link to='/about'><a href="#">About Me</a></Link></li>
                <li><Link to='/services'><a href="#">Services</a></Link></li>
                <li><Link to='/skill'><a href="#">Skills</a></Link></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </>
    )
}

export default MenuHeader