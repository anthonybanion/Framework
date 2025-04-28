import { useState } from 'react'
import './App.css'
import Input from './components/atomic_design/atoms/input/Input'
import InputRB from './components/atomic_design/atoms/input/InputRB'
import Label from './components/atomic_design/atoms/label/Label'
import MyCard from './components/atomic_design/molecules/card/MyCard'

function App() {

  const path = "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  const [count, setCount] = useState(0)

  return (
    <>
      <Label text="Email" htmlFor="email" extraClasses="form-label" />
      <Input type="email" placeholder="Correo" extraClasses="form-control-lg mb-3" />
      <InputRB type="text" placeholder="Enter a text" extraClasses="form-control-lg mb-3" />
      <MyCard title="My Card Title" content="This is the content of the card." image={path} />
    </>
  )
}

export default App
