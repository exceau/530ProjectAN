import React from "react";
import { Link } from "react-router-dom";


function demoPosts() {
  const [play, setPlay] = React.useState(false);
  const url = play
    ? `https://www.youtube.com/embed/TAlKhARUcoY`
    : `https://www.youtube.com/embed/TAlKhARUcoY`;
  return (
    <div className="home">
      <div class="container">
        <Link to="/page4/post">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="https://cdn2.unrealengine.com/egs-genshinimpact-mihoyolimited-g1a-01-1920x1080-5c9acf36d478.jpg?h=720&resize=1&w=1280"
                alt=""
              />
            </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">Lore of Genshin</h1>
              <p>
              A pair of twins who travel across the stars and visit different worlds arrive in the land of Teyvat,
               but find that the nation of Khaenri'ah is under cataclysmic siege. Attempting to leave to avoid the carnage,
                the twins are separated by an unknown god, who takes one and seals away the other. Five hundred years later,
                 the sealed twin, referred to as the "Traveler", awakens and meets Paimon. 
                 The pair travel to nearby Mondstadt to start their search for the Traveler's missing twin. Click to continue!
              </p>
              <iframe
                width="560"
                height="315"
                src={url}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                ></iframe>
                
            </div>
            
          </div>
        </Link>
      </div>
    </div>
  );
}

export default demoPosts;
