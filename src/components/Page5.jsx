import React from "react";

function Page5() {
  return (
    <div className="page5">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Closing Remarks...</h1>
            <p>
                There were many hurdles and obstacles for the duration of this project, with the hardest
              one being to find a way to host the project successfully somewhere for viewing. My decision 
              to work with React for the frontend and Node.JS for the backend was a decision influenced 
              by online sentiments that React and Node.JS were the easier ones to pick up and deploy.
              Despite these online sentiments, I still found it quite difficult to figure out how
              to create several pages on the React app (multiple pages isn't possible with React but was made
              possible through rigorous tries and efforts and the aid of the internet). Although there were many
              sources online to first help me set up and install React and Node.JS working and writing the code 
              proved to be very difficult. 
              
                With the lectures and demos provided by Professor Hamelin I had the 
              basics of HTML + CSS down but JavaScript itself, which the front and back ends primarly employ
              made it difficult for me to write out workable code. 

                Compared to writing and outputting the HTML/CSS code onto ryerson servers setting up
              the pages and hosting it myself was harder. Luckily heroku was very simple to use so I was able
              to link my github to Heroku and deploy my project there. 

                Personally, setting up the frameworks and getting it able to work was the hardest part
              of the project but once you get past that, writing and debugging isn't so bad.
                
                In retrospect, the one thing I would do differently is find a group to work with. Along 
              with the many projects and tests this semester, I found it hard to find time to sit down and 
              fully understand the inner workings of React and Node.JS. Maybe with the assistance of 
              other members I would've been able to show a more advanced example, rather than the asked
              minimum of hosting a demo page with images and text. In all I'd rate the experience working with
              React and Node.JS a 6/10. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page5;

