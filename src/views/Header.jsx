import LogoRied from '../components/Header/logo/LogoRied.jsx'
import MenuHeader from '../components/Header/menu/Menu_Header.jsx'
import ButtonGeneric from '../components/General-Components/Button-Generic/button_generic.jsx'
import '../components/Header/Header.css'
function Header(){
    return (
        <>  
            <div className='header'>
                <LogoRied />
                <MenuHeader />
                <ButtonGeneric extra_style="background-white" label="Hire me"/>
            </div>            
        </>
    )
}

export default Header