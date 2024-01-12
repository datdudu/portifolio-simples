import './ButtonGeneric.css'
import { Link } from 'react-router-dom'
import MenuHeader from '../../Header/menu/MenuHeader'


function ButtonGeneric({extra_style, label, link}){
    
    return (
        <>
            <Link to={link}><button className={`button-generic ${extra_style}`}>{label}</button></Link>
        </>
    )
}
export default ButtonGeneric
