import LogoRied from '../components/Header/logo/LogoRied.jsx'
import MenuHeader from '../components/Header/menu/Menu_Header.jsx'
import ButtonHire from '../components/Header/button-hire-me/Button_Hire.jsx'
import '../components/Header/Header.css'
function Header(){
    return (
        <>  
            <div className='header'>
                <LogoRied />
                <MenuHeader />
                <ButtonHire />
            </div>            
        </>
    )
}

export default Header