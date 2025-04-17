import React from 'react';
function Gallery() {
const images = [
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ta7ghbnm2tAvDDW0uGBeQDKElLFotR5YLA&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREAwY69J9v8z71EIw5wPtpXMk7459UXJBKzg&s",
"https://media.istockphoto.com/id/1445196818/es/foto/grupo-de-lindas-mascotas-sobre-fondo-blanco-dise%C3%B1o-de-banner.jpg?s=612x612&w=0&k=20&c=JTUk_9yiSEj1ahD4K68d13oiTsp1ks9PmCxK1bPzxKI="
];
return (
    <section style={{ display: "flex", gap: "10px", justifyContent:
    "center", marginTop: "20px" }}>
        {images.map((src, index) => (
            <img key={index} src={src} alt={`Imagen ${index + 1}`}
            style={{ width: "150px", height: "150px" }} />
        ))}
    </section>
);
}
export default Gallery;