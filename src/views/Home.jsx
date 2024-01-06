import Banner from './Banner'
import About from './About.jsx'
import Service from './Service.jsx'
import Skill from './Skill.jsx'
import { Outlet } from 'react-router-dom'

function Home()
{
    return(
        <>
            <Banner />
            <About />
            <Service />
            <Skill />
        </>
    )
}

export default Home