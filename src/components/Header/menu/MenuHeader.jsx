import '../menu/MenuHeader.css'
import { Link } from 'react-router-dom'
function MenuHeader(){
    return (
        <>
            <ul className="menu-header">
                <li><Link to='/banner'><a href="#">Home</a></Link></li>
                <li><a href="#">About Me</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </>
    )
}

export default MenuHeader