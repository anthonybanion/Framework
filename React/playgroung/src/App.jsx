import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavList from './components/nav/NavList'


function App() {
  const [count, setCount] = useState(0)

  const items = ['Home', 'About', 'Contacts', 'Services']
  const [section, setSection] = useState('Home')
  const renderContent = () => {
    switch (section) {
      case 'Home':
        return <div>Home Content</div>
      case 'About':
        return <div>About Content</div>
      case 'Contacts':
        return <div>Contacts Content</div>
      case 'Services':
        return <div>Services Content</div>
      default:
        return <div>Default Content</div>
    }
  }

  return (
    <>
     <NavList items={items} onSeleccion={setSection} />
    </>
  )
}

export default App
