import './App.css'
import Header from './views/Header.jsx'
import Home from './views/Home.jsx'
import Footer from './views/Footer.jsx'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
