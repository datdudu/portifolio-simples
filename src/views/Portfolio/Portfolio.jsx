import './Portfolio.css'
import PortfolioTitle from '../../components/Portfolio/PortfolioTitle/PortfolioTitle'
import PortfolioProjects from '../../components/Portfolio/PortfolioProjects/PortfolioProjects'
import HeaderRouter from '../HeaderRouter'

function Portfolio(){
    return (
        <>
            <HeaderRouter />
            <div className='portfolio'>
                <PortfolioTitle />
                <PortfolioProjects />
            </div>
        </>
    )
}

export default Portfolio