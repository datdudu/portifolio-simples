import LogoRied from '../components/Header/logo/LogoRied.jsx'
import MenuHeader from '../components/Header/menu/MenuHeader.jsx'
import ButtonGeneric from '../components/GeneralComponents/ButtonGeneric/ButtonGeneric.jsx'
import '../components/Header/Header.css'
function Header(){
    return (
        <>  
            <div className='header'>
                <LogoRied />
                <MenuHeader />
                <ButtonGeneric extra_style="background-white" label="Hire me" link={'./Contact'}/>
            </div>            
        </>
    )
}

export default Header