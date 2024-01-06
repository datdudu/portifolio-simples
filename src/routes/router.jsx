import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Banner from '../views/Banner'
import About from '../views/About'
import Service from '../views/Service'
import Skill from '../views/Skill'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/banner',
                element: <Banner />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/services',
                element: <Service />
            },
            {
                path: '/skill',
                element: <Skill />
            }
        ]
    }
])

export default router