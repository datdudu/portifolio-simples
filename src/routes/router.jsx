import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../views/Home'
import About from '../views/About/About'
import Service from '../views/Service/Service'
import Skill from '../views/Skills/Skills'
import Portfolio from '../views/Portfolio/Portfolio'
import Contact from '../views/Contact/Contact'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path:'/',
                element: <Home />
            },
            {
                path:'/About',
                element: <About />
            },
            {
                path:'/Services',
                element: <Service />
            },
            {
                path:'/Skills',
                element: <Skill />
            },
            {
                path:'/Portfolio',
                element: <Portfolio />
            },
            {
                path:'/Contact',
                element: <Contact />
            },
        ]
    }
])

export default router