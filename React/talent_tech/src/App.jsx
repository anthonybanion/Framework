import { useState } from 'react'
import './App.css'
import HelloWorld from './components/head/HelloWorld'
import UserList from './components/lists/UserList'
import Button from './components/button/Button'
import ProductList from './components/lists/ProductList' 
import Card from './components/card/Card'

function App() {
  const [count, setCount] = useState(0)
  const name = "Anthony Bañon"
  const users = ['Ana', 'Luis', 'Pedro', 'María'];
  const products = [ 'Product 1', 'Product 2', 'Product 3', 'Product 4'];
  const image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr7bgS6YAbZxPIHqokEhHKvEaa0uosSzhLQQ&s"

  return (
    <>
     <HelloWorld name={name}></HelloWorld>
     <UserList users={users}></UserList>
      <Button text="Click Me" color="blue"></Button>
      <Button text="Click Me" color="red"></Button>
      <Button text="Click Me" color="green"></Button>
      <Button text="Click Me" color="yellow"></Button>
      <ProductList products={products}></ProductList>
      <Card 
          title="Sample Title" 
          description="This is a sample description." 
          image={image} 
          buttonText="Learn More" 
          buttonColor="blue">
      </Card>
    </>
  )
}

export default App
