import './PortfolioProjects.css'
import PortfolioProjectPhoto from './PortfolioProjectPhoto/PortfolioProjectPhoto.jsx'
import DestopSide from '../../../assets/desktop_side.png'
import FarAwayDesktop from '../../../assets/far_away_desktop.png'
import DesktopTopView from '../../../assets/desktop_top_view.png'
import KeyboardTable from '../../../assets/keyboard_table.png'
import KeyboardDesktop from '../../../assets/keyboard_desktop.png'
import TableDesktop from '../../../assets/table_desktop.png'
function PortfolioProjects(){
    return(
        <>
            <div className='portfolio-projects'>
                <PortfolioProjectPhoto img={TableDesktop}/>
                <PortfolioProjectPhoto img={DestopSide}/>
                <PortfolioProjectPhoto img={DesktopTopView}/>
                <PortfolioProjectPhoto img={FarAwayDesktop}/>
                <PortfolioProjectPhoto img={KeyboardDesktop}/>
                <PortfolioProjectPhoto img={KeyboardTable}/>
                <PortfolioProjectPhoto img={TableDesktop}/>
                <PortfolioProjectPhoto img={KeyboardTable}/>
            </div>
        </>
    )
}

export default PortfolioProjects