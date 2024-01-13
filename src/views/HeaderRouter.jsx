import LogoRied from '../components/Header/logo/LogoRied.jsx'
import MenuHeaderRouter from '../components/Header/menu/MenuHeaderRouter/MenuHeaderRouter.jsx'
import ButtonGeneric from '../components/GeneralComponents/ButtonGeneric/ButtonGeneric.jsx'
import '../components/Header/Header.css'
function HeaderRouter(){
    return (
        <>  
            <div className='header'>
                <LogoRied />
                <MenuHeaderRouter />
                <ButtonGeneric extra_style="background-white" label="Hire me" link={'./Contact'}/>
            </div>            
        </>
    )
}

export default HeaderRouter