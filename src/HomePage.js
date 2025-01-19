import React, { useState } from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [popupIndex, setPopupIndex] = useState(null);

  
  const messages = [
    "Welcome to ComicVerse",
    "Surprise!",
    "Haha click again!"
  ];

  const handleClick = () => {
  
    const randomIndex = Math.floor(Math.random() * messages.length);
    setPopupIndex(randomIndex);
  };

  return (
    <div className="homepage">
      <nav className="comic-nav">
        <h1 className="comic-logo">ComicVerse</h1>
        <ul className="comic-menu">
          <li onClick={() => navigate("/")}>Home</li>
          <li  onClick={() => navigate("/about")}>About</li>
          <li onClick={() => navigate("/about")}>Shop</li>
          <li onClick={() => navigate("/about")}>Contact</li>
        </ul>
        <button className="comic-cta" onClick={() => navigate("/comic")}>Sign Up</button>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <h2>ComicVerse</h2>
          <img
            className="anime"
            src="/file3.png"
            alt="Comic Character"
            onClick={handleClick}
          />

          {popupIndex !== null && (
            <div className={`comic-popup popup-${popupIndex}`}>
              <p>{messages[popupIndex]}</p>
            </div>
          )}
        </div>

        <div className="hero-boxes">
          <div className="box left-box">
            <p>Step inside and unlock your hidden potential! Who knows? You might just be the next hero!</p>
          </div>
          <div className="center-btn">
            <button onClick={() => navigate("/about")}>CLICK US</button>
          </div>
          <div className="box right-box">
            <p>This box contains extreme levels of coolness. Click at your own risk!</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
