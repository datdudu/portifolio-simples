import AboutHome from '../components/Home/AboutHome/AboutHome.jsx'
import BannerHome from '../components/Home/BannerHome/BannerHome.jsx'
import PortfolioHome from '../components/Home/PortfolioHome/PortfolioHome.jsx'
import ServiceHome from '../components/Home/ServiceHome/ServiceHome.jsx'
import SkillHome from '../components/Home/SkillHome/SkillHome.jsx'
import ContactHome from '../components/Home/ContactHome/ContactHome.jsx'

function Home()
{
    return(
        <>
            <BannerHome />
            <AboutHome />
            <ServiceHome />
            <SkillHome />
            <PortfolioHome />
            <ContactHome />
        </>
    )
}

export default Home