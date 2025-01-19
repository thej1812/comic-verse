import React, { useState } from "react";
import "./ComicAuth.css";
import { useNavigate } from "react-router-dom";

const ComicAuth = () => {
   const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="comic-contain">
      <div className="comic-b">
        <h1>{isSignUp ? " Sign Up to Join the Heroes!" : " Welcome Back, Hero!"}</h1>
        
        <form>
          {isSignUp && <input type="text" placeholder=" Hero Name" />}
          <input type="email" placeholder=" Super Email" />
          <input type="password" placeholder=" Secret Password" />

          <button  onClick={() => navigate("/about")} type="submit">
            {isSignUp ? " Join the League!" : " Enter the Lair"}
          </button>
        </form>

        <p onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? "Already a hero? Click here to sign in! " : "New here? Sign up to become a hero! "}
        </p>
      </div>
    </div>
  );
};

export default ComicAuth;
