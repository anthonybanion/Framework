// ==========================================
//
// the NavbarPage component which serves as
// the main page of the application.
//
// File: NavbarPage.jsx
// Author: Anthony Bañon
// Created: 2025-05-18
// Last Updated: 2025-05-24
// ==========================================

import Header from "../../components/header/Header";
import BootstrapNav from "../../components/navbar/BootstrapNav";
import Main from "../../components/main/Main";
import GalleryTeam from "../../components/gallery/GalleryTeam";
import Footer from "../../components/footer/Footer";
import Interests from "../../components/gallery/Interests";
import { useState } from "react";

const team = [
  {
    name: "Silvia",
    role: "Product Owner",
    image: "http://picsum.photos/200/300?random=1",
  },
  {
    name: "Luis",
    role: "UX/UI Designer",
    image: "http://picsum.photos/200/300?random=2",
  },
  {
    name: "Matías",
    role: "Developer",
    image: "http://picsum.photos/200/300?random=3",
  },
];
const navItems = [
  { id: 1, label: "Main" },
  { id: 2, label: "Gallery" },
  { id: 3, label: "Interests" },
];

const interests = ["React", "JavaScript", "APIs", "Diseño UX", "Node.js"];

function NavbarPage() {
  const [seccion, setSeccion] = useState("Main");
  const direct = () => {
    switch (seccion) {
      case "Main":
        return <Main />;
      case "Gallery":
        return <GalleryTeam team={team} />;
      case "Interests":
        return <Interests topics={interests} />;
      default:
        return <Main />;
    }
  };

  return (
    <>
      <Header />
      <BootstrapNav items={navItems} onSelection={setSeccion} />
      {direct()}
      <Footer />
    </>
  );
}

export default NavbarPage;
