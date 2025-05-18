import "./App.css";
import Header from "./components/header/Header";
import Navbard from "./components/navbard/Navbard";
import Main from "./components/main/Main";
import GalleryTeam from "./components/gallery/GalleryTeam";
import Footer from "./components/footer/Footer";
import Interests from "./components/gallery/Interests";

const team = [
  {
    name: "Silvia",
    role: "Product Owner",
    image: "./images/bird.jpg",
  },
  {
    name: "Luis",
    role: "UX/UI Designer",
    image: "./images/penguin.jpg",
  },
  {
    name: "Matías",
    role: "Developer",
    image: "./images/zebra.jpg",
  },
];

const interests = ["React", "JavaScript", "APIs", "Diseño UX", "Node.js"];

function App() {
  return (
    <>
      <Header />
      <Navbard />
      <Main />
      <GalleryTeam team={team} />
      <Interests topics={interests} />
      <Footer />
    </>
  );
}

export default App;
