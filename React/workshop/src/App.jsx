import { useState } from 'react'
import './App.css'
import Nav from './components/atomic_design/molecules/navbar/Nav'
import NavbarBooststrap from './components/atomic_design/molecules/navbar/NavbarBooststrap'

function App() {

  function onSelection(item) {
    console.log(item)
  }

  const items = [
    { id: 1, label: 'Home', link: '/' },
    { id: 2, label: 'About', link: '/about' },
    { id: 3, label: 'Contact', link: '/contact' },
    { id: 4, label: 'Services', link: '/services' },
    { id: 5, label: 'Blog', link: '/blog' },
  ]

  const path = "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  const [count, setCount] = useState(0)

  return (
    <>
        
       
        <NavbarBooststrap items={items} onSeleccion={onSelection} />
     
    </>
  )
}

export default App
