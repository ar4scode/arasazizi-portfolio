import './App.css'
import Profile from './components/Profile'
import About from './components/About'
import Socials from './components/Socials'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import { useEffect, useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if(darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <>
      <Profile />
      <About />
      <Socials />
      <Projects />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  )
}

export default App
