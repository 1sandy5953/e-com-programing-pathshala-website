import React from "react";
import ImageSlider, { Slide } from "react-auto-image-slider";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          {/* <img
            className="card-img img-fluid opacity-75"
            src="https://assets.ajio.com/cms/AJIO/WEB/16022023-UHP-D-JIT-P4-brands-min40.jpg"
            alt="Card"
            height={500}
          /> */
    <ImageSlider effectDelay={500} autoPlayDelay={3000} >
      <Slide>
        <img alt="img2" src="https://assets.ajio.com/cms/AJIO/WEB/AMkjuhcgf-UHP-1440x470.gif"  />
      </Slide>
      <Slide>
        <img alt="img2" src="https://assets.ajio.com/cms/AJIO/WEB/17022023-UHP-D-MainBanner-P2-Ethnic-Aksjanasya-Min60extra35.jpg" />
      </Slide>
      <Slide>
        <img alt="img1" src="https://assets.ajio.com/cms/AJIO/WEB/17022023-UHP-D-MainBanner-P5-Soigne-RituKumarMasaba-Starting2499.jpg" />
      </Slide>
    </ImageSlider>
  }  
          <div className="card-img-overlay d-flex align-items-center ">
            <div className="container">
              <h5 className="card-title fs-1 text-black fw-lighter  ">New Season Arrivals</h5>
              <p className="card-text fs-5 d-none d-sm-block  text-white bg-dark">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
