import React, { useEffect } from "react";
import { useParams } from "react-router";
import "./demo.css";

function demoPost() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  return (
    <div className="home1">
      <div class="container">
        <h1 className="mt-5">An Epic Fantasy Adventure</h1>
        <h6 className="mb-5">Your World To Discover, {postSlug}</h6>
        <p>
          Experience an immersive single-player campaign. As a traveler from another 
          world, you will embark on a journey to reunite with your long-lost sibling 
          and unravel the mysteries of Teyvat, and yourself.
        </p>
        <img src="https://uploadstatic-sea.mihoyo.com/contentweb/20200924/2020092417575534557.jpg"  width="500" 
                height="300" >
        </img>
        <p>
          Fly across the open world, swim through crystal-clear waters, and climb 
          towering mountains. Stray off the beaten path to discover all the hidden 
          secrets of a world full of wonder and mystery.
        </p>
        <img src="https://uploadstatic-sea.mihoyo.com/contentweb/20200924/2020092417575221927.jpg"  width="500" 
                height="300" >
        </img>
        <p>
          Not just another mindless hack and slash. Manipulating the various elements 
          is the key to defeating powerful enemies and solving challenging puzzles.
          Choose who fights by your side. Build your party from over 20+ characters (with more to come)
           — each with unique abilities, personalities, and combat styles.
        </p>
        <img src="https://uploadstatic-sea.mihoyo.com/contentweb/20200924/2020092417575221063.jpg"  width="500" 
                height="300" >
        </img>
      </div>
    </div>
  );
}

export default demoPost;
