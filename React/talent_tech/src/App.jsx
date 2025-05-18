import "./App.css";
import Header from "./components/header/Header";
import Navbard from "./components/navbard/Navbard";
import Main from "./components/main/Main";
import GalleryTeam from "./components/gallery/GalleryTeam";
import Footer from "./components/footer/Footer";
import ProjectCard from "./components/card/ProjectCard";

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

function App() {
  return (
    <>
      <Header />
      <Navbard />
      <Main />
      <GalleryTeam team={team} />
      <ProjectCard
        title="Project 1"
        image="./images/penguin.jpg"
        description="Description for Project 1"
        buttonText="Learn More"
      />
      <Footer />
    </>
  );
}

export default App;
