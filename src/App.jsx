import './App.css'
import Header from './views/Header.jsx'
import About from './views/About.jsx'
import { Outlet } from 'react-router-dom'
function App() {

  return (
    <>
      <Header />
      <Outlet />
      <About />
    </>
  )
}

export default App
