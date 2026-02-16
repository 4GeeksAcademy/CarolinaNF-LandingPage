import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
function Home() {

  const cardsData = [
    {
      title: "Vida",
      text: "Bonito, todo me parece bonito...",
      image: "https://img.freepik.com/premium-vector/cute-kawaii-unicorn-doing-silly-sitting-unicorn-playing-slime-rainbow-cloud-cartoon-vector_1114086-7178.jpg"
    },
    {
      title: "Amor",
      text: "Bonita mañana, bonito lugar Bonita la cama, que bien se ve el mar.",
      image: "https://tse4.mm.bing.net/th/id/OIP.aJ6zaORVBDfBC48TvmjmvAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      title: "Salud",
      text: "Bonito es el día que acaba de empezar Bonita la vida, respira, respira, respira.",
      image: "https://img.freepik.com/fotos-premium/dibujo-monton-cristales-coloridos-fondo-blanco-generativo-ai_1034551-19703.jpg"
    },
    {
      title: "Dinero",
      text: "La vida es un chiste con triste final El duro no existe, pero yo le digo Bonito, todo me parece bonito.",
      image: "https://tse1.mm.bing.net/th/id/OIP.JT1zBmUUAJ6QfTVupQ-euAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <Jumbotron />

        <div className="row">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              text={card.text}
              image={card.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;