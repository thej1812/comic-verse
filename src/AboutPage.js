import React from "react";
import "./AboutPage.css"; 
import ContentPage from "./ContentPage";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
     const navigate = useNavigate();
  return (
    <div className="comic-container">
         <nav className="comic-nav">
      <h1 className="comic-logo">ComicVerse</h1>
      <ul className="comic-menu">
      <li onClick={() => navigate("/")}>Home</li>
          <li  onClick={() => navigate("/about")}>About</li>
          <li onClick={() => navigate("/about")}>Shop</li>
          <li onClick={() => navigate("/about")}>Contact</li>
          <li onClick={() => navigate("/about")}>Cart</li>
        </ul>
      <button className="comic-cta" onClick={() => navigate("/comic")}>Sign Up</button>
    </nav>
      <div className="comic-header">
        <h1> Welcome to ComicVerse! </h1>
        <p className="comic-subtitle">Your ultimate destination for legendary comics!</p>
      </div>

      <div className="comic-content">
        <div className="comic-panel">
          <p className="speech-bubble">"We bring your favorite superheroes to life!"</p>
          <img src="https://cdn.cosmos.so/90ee75ee-8b02-4d39-b311-5def4c9da02a?format=jpeg" alt="Comic Scene" />
        </div>

        <div className="comic-panel">
          <img src="https://cdn.cosmos.so/a3f82009-853e-43c0-ab8e-bd5d756725e6?format=jpeg" alt="Comic Action" />
          <p className="speech-bubble right">"From classic tales to modern legends, we’ve got it all!"</p>
        </div>
      </div>

      <div className="comic-footer">
        <h2>Join Our Comic Universe! </h2>
        <p>Start your adventure today—explore, collect, and relive the greatest comic stories of all time!</p>
        <button className="comic-button">Swipe down </button>
      </div>
      <ContentPage/>
    </div>
  );
};

export default AboutPage;