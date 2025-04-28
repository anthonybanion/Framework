import { useState } from 'react'
import './App.css'
import CardRB from './components/atomic_design/molecules/card/CardRB'

function App() {

  const path = "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  const [count, setCount] = useState(0)

  return (
    <>
        <CardRB title="My Card" content="This is a card"  />
     
    </>
  )
}

export default App
