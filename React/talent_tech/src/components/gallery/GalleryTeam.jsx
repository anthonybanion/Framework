import "./galleryTeam.css";

function GalleryTeam({ team }) {
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
