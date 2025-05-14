import "./App.css";
import Header from "./components/header/Header";
import Navbard from "./components/navbard/Navbard";
import Main from "./components/main/Main";
import Gallery from "./components/gallery/Gallery";
import Footer from "./components/footer/Footer";

const images = [
  "./public/images/bird.jpg",
  "./public/images/penguin.jpg",
  "./public/images/zebra.jpg",
];

function App() {
  return (
    <>
      <Header />
      <Navbard />
      <Main />
      <Gallery images={images} />
      <Footer />
    </>
  );
}

export default App;
