// ==========================================
//
// Displays a gallery of team members.
//
// File: GalleryTeam.jsx
// Author: Anthony Bañon
// Created: 2025-05-18
// Last Updated: 2025-05-18
// ==========================================

import "./galleryTeam.css";

function GalleryTeam({ team }) {
  /*
   * This function renders a section containing a gallery of team members.
   *
   * @param {Array} team - The list of team members.
   * @returns {JSX.Element} The rendered gallery section.
   */

  return (
    <section className="mySection">
      {team.map((person, index) => (
        <div key={index} className="myCard">
          <div>
            <img
              src={person.image}
              alt={`Imagen ${index + 1}`}
              className="myImage"
            />
          </div>
          <div className="myText">
            <h3 className="myH3">{person.name}</h3>
            <p className="myP">{person.role}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
export default GalleryTeam;
