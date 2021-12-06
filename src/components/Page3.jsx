import React from "react";
import "./pages.css";

function Contact() {
  return (
    <div className="page3">
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
            <h1 class="font-weight-light">Setting up your first pages</h1>
            <p>
              First steps...
              <ul>
                <li>Install react-router-dom to create with NPM a package to make your several pages: npm i react-router-dom</li>
                <li>Make several files for your app in this case, I will make pages for my demo, navigation and the home, named Home.jsx, Navigation.jsx
                  and demo.jsx which will be stored in the components folder</li>
                <li> Enter this code in your Navigation.jsx file: </li>
                <img src="https://i.imgur.com/aO7nesx.png"  width="300" 
                      height="100" >
                </img>
                <li>Create an index.js with the following content in your src folder</li>
                <img src="https://i.imgur.com/k7cVzv8.png"  width="600" 
                      height="300" >
                </img>
                <li>Since React uses jsx, writing paragraphs and including images is very similar to HTML</li>
                <li>To configure your pages you can do it in HTML or neatly make a CSS file within the same folder and import it as such:</li>
                <img src="https://i.imgur.com/MGGAVdZ.png"   >
                </img>
                <li>Demo CSS example</li>
                <img src="https://i.imgur.com/yMgjp0M.png"   >
                </img>
                <li>For the index javascript file in the src folder make sure you export your pages you had made such as Home.jsx and Demo.jsx
                </li>
                <img src="https://i.imgur.com/42HZtt9.png"   >
                </img>

                <li>Using the react-router-dom package you will be able to make several pages within a single React app which is not usually possible. 
                  Demo is on designated page 4.
                </li>
            </ul> 
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
