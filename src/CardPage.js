import React, { useEffect } from "react";
import "./CardPage.css"; 
import ComicProducts from "./ComicProducts";

const CardPage = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".comic-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.5 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="comic-containe">
      <h1 className="comic-titl"> Superhero Comic Cards! </h1>
        <h3>hover</h3>
      <div className="card-cont">
      
        {[
          { name: "Goku", img: "/img1.JPG" },
          { name: "Gojo", img: "/img2.JPG" },
          { name: "Zoro", img: "/img3.jpg" },
          { name: "Deku", img: "/img4.jpeg" },
          { name: "Straw Hats", img: "/img5.JPG" },
        ].map((hero, index) => (
          <div key={index} className="comic-card">
            <h2>{hero.name}</h2>
            <p>Epic Adventures Await!</p>
            <img src={hero.img} alt={hero.name} className="hover-image" />
          </div>
        ))}
      </div>
      <ComicProducts/>
    </div>
  );
};

export default CardPage;