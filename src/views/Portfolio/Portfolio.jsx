import './Portfolio.css'
import PortfolioTitle from '../../components/Portfolio/PortfolioTitle/PortfolioTitle'
import PortfolioProjects from '../../components/Portfolio/PortfolioProjects/PortfolioProjects'

function Portfolio(){
    return (
        <>
            <div className='portfolio'>
                <PortfolioTitle />
                <PortfolioProjects />
            </div>
        </>
    )
}

export default Portfolio