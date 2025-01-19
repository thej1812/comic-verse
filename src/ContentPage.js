import { useEffect } from "react";
import gsap from "gsap";
import "./ContentPage.css"
import CardPage from "./CardPage";


const ContentPage = () => {

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".imageBoard",
        pin: true,
        start: "top top",
        end: "+=300%",
        scrub: 1,
      },
      defaults: { ease: "none" },
    });

    tl.to("body", { delay: 0, backgroundColor: "red", color: "black" }, "start")
      .to(".upper-container h1", { scale: 5, opacity: 0 }, "start")
      .to("#scaleableImg1", { scale: 10, x: -1500 }, "start")
      .to("#scaleableImg2", { scale: 10, x: -2500 }, "start")
      .to("#scaleableImg3", { scale: 10, x: -2000 }, "start")
      .to("#scaleableImg4", { scale: 10, x: 3000 }, "start")
      .to("#scaleableImg5", { scale: 10, x: 2000 }, "start")
      .to(".cardImage", { delay: 0.1, scale: 5 }, "start")
      .to(".cardImage", { delay: 0.4, opacity: 1 }, "start")
      .to(".scaleableImg", { opacity: 0 });

    return () => {
      tl.kill(); 
    };
  }, []);
  return (
    <div >
      <div className="upper-container" >  
        
      </div>
            
        <h2 className="comic-title">ALL TIME POPULAR</h2>
        <div className="imageBoard">
  <div className="cardImage">
 
    <div className="comic-box">
      <img src="https://cdn.cosmos.so/90ee75ee-8b02-4d39-b311-5def4c9da02a?format=jpeg" alt="Image1" />
      <button className="comic-butto">ADD TO CHART</button>
    </div>
    <div className="comic-box">
      <img src="https://cdn.cosmos.so/0312a5af-bcbd-4ffe-96b5-603db2f2bddb?format=jpeg" alt="Image2" />
      <button className="comic-butto">ADD TO CHART</button>
    </div>
    <div className="comic-box">
      <img src="https://cdn.cosmos.so/a3f82009-853e-43c0-ab8e-bd5d756725e6?format=jpeg" alt="Image3" />
      <button className="comic-butto">ADD TO CHART</button>
    </div>
  </div>
</div>
<CardPage/>
</div>

  );
};

export default ContentPage;