import './PortfolioHome.css'
import PortfolioTitle from '../../Portfolio/PortfolioTitle/PortfolioTitle'
import PortfolioProjects from '../../Portfolio/PortfolioProjects/PortfolioProjects'

function PortfolioHome(){
    return (
        <>
            <div id='PortfolioSection' className='portfolio'>
                <PortfolioTitle />
                <PortfolioProjects />
            </div>
        </>
    )
}

export default PortfolioHome