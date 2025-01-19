import React, { useState } from "react";
import "./ComicProducts.css";
import ComicFooter from "./ComicFooter";

const products = [
  { id: 1, name: "The boy of Ninja", image: "/img6.webp" },
  { id: 2, name: "Avengers/Captain America", image: "/img7.jpg" },
  { id: 3, name: "Avatar", image: "/img7.webp" },
  { id: 4, name: "MANGA JUJUTSU KAISEN", image: "/img8.webp" },
  { id: 5, name: "SPY X FAMILY ", image: "/img9.jpg" },
  { id: 6, name: "Akira ", image: "/img10.jpg" },
  { id: 7, name: "Avatar", image: "/img7.webp" },
  { id: 8, name: "MANGA JUJUTSU KAISEN", image: "/img8.webp" },
  { id: 9, name: "Akira", image: "/img10.jpg" }
];

const ComicProducts = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="comic-container">
      <h1 className="comic-tit"> Superhero Gear </h1>
      <div className="comic-grid">
        {products.map((product) => (
          <div key={product.id} className="comic-card">
            <div className="comic-msg">Add Me</div>
            <img src={product.image} alt={product.name} className="comic-image" />
            <p className="comic-name">{product.name}</p>
            <button className="comic-btn" onClick={() => addToCart(product)}>
              Add to Cart 
            </button>
          </div>
        ))}
      </div>
      <ComicFooter/>
    </div>
  );
};

export default ComicProducts;
