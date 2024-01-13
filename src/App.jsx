import './App.css'
import Footer from './views/Footer.jsx'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
