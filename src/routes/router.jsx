import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Banner from '../views/Banner'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/banner',
                element: <Banner />
            }
        ]
    }
])

export default router