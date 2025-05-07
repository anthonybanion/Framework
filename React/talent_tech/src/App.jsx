import { useState } from "react";
import "./App.css";
import Navegacion from "./pages/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [count, setCount] = useState(0);

  const image =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr7bgS6YAbZxPIHqokEhHKvEaa0uosSzhLQQ&s";

  return (
    <>
      <Header />
    </>
  );
}

export default App;
