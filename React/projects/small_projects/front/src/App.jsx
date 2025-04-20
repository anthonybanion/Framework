import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Home from './components/Home'

function App() {
  const user = "Anthony"
  const type = "admin"

  const items = ['Inicio', 'Acerca de', 'Contacto', 'Servicios']
  
  const [section, setSection] = useState('Inicio')
  
  const renderContent = () => {
    switch (section) {
      case 'Home':
        return <div>Inicio Content</div>
      case 'Acerca de':
        return <div>Acerca de Content</div>
      case 'Contacto':
        return <div>Contacto Content</div>
      case 'Servicios':
        return <div>Servicios Content</div>
      default:
        return <div>Default Content</div>
    }
  }
 
  return (
    <div className="d-flex flex-column min-vh-100">
      
      <Header user={user} type={type} />
      <Nav items={items} onSeleccion={setSection} />
    
      <Main className='flex-grow-1 p-3'>
      {renderContent()}
      </Main>
      <Home/>
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
