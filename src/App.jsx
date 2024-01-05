import './App.css'
import Header from './views/Header.jsx'
import About from './views/About.jsx'
import Service from './views/Service.jsx'
import { Outlet } from 'react-router-dom'
function App() {

  return (
    <>
      <Header />
      <Outlet />
      <About />
      <Service />
    </>
  )
}

export default App
