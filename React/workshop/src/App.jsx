import { useState } from 'react'
import './App.css'
import Button from './components/atomic_design/atoms/button/Button'
import ButtonRB from './components/atomic_design/atoms/button/ButtonRB'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Button color="primary" text="Send"></Button>
     <ButtonRB color="secondary" text="Button"></ButtonRB>
    </>
  )
}

export default App
