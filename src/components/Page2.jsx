import React from "react"
import "./pages.css";

function Page2() {
  return (
    
    <div className="page2">
        
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <h1 class="font-weight-light">Installing React and NodeJS</h1>
          <p>
              Installing React on your Computer:
              <ul>
                <li>Open a new terminal, in the terminal create project folder: mkdir ReactProjects and enter that directory: cd ReactProjects </li>
                <li>Install React using create-react-app, to build and run a full React.js application: npx create-react-app my-app</li>
                <li> temporarily install create-react-app and it's associated packages. Once completed, change directories into 
                  your new app ("my-app" or whatever you've chosen to call it): cd my-app.</li>
                <li>Make your first react app: npm start, this will start the Node.js server by launching a new browser window for your app.</li>
                <p>
                  Stop running your React app from the command line:
                  <ul>
                     <li>Enter Ctrl + c to stop running your app</li>
                  </ul> 
                </p>
                <li>Use npm run build to deploy your web app.</li>
                <li>Install ReactJS here: reactjs.org</li>
            </ul> 
              
            </p>
            <p>
              Installing Node on your Computer:
              <ul>
                <li>Ensure your current profile has administrator purposes. </li>
                <li>Install Node.js using this link: https://nodejs.org/en/download/</li>
                <li>If you're installing from browser, in the setup wizard follow the outlined instructions. </li>
                <li>To verify Node.js is installed on your computer type: node -v on the terminal and to check the version enter npm -v</li>
                <li>Restart your system after installation</li>
                <p>
                  Ensuring Node.js is Properly Installed:
                  <ul>
                     <li>Create a javascript test file, test.js: console.log("Node is working"); </li>
                     <li>Afterwards enter : node test.js  </li>
                     <li>The following output should be:  </li>
                     <img src="https://raw.githubusercontent.com/pluralsight/guides/master/images/640f8199-be76-4848-a093-0f9e2825d8a8.png"  width="400" 
                      height="200" >
                     </img>
                  </ul> 
                </p>
                <li>Make sure you have the Node Package module installed to load dependencies: npm install</li>
                <li>That ensures the json file package.json is in root directory where all dependencies defined in this file will be installed</li>
                <li>An example of my json file...</li>
                <img src="https://i.imgur.com/EoQZQsW.png"  width="400" 
                      height="200" >
                </img>
            </ul> 
              
            </p>
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Deploying on Heroku </h1>
            <p>
              First steps:
              <ul>
                <li>Install the Heroku CLI desktop app: https://devcenter.heroku.com/articles/heroku-cli </li>
                <li>To make sure Heroku has successfully installed enter: heroku --version</li>
                <li> In your package.json file enter:</li>
                    <ul> 
                      <li>
                      <img src="https://i.imgur.com/H2b4GlI.png"  width="300" 
                      height="200" >
                      </img>
                      
                      </li>
                      <li> heroku-postbuild is a command Heroku runs before running the start command. 
                        The postbuild command moves into the client folder in the project and runs npm 
                        install and then npm run build</li>
                    </ul>
                <li>Add this to your server file that creates a middleware making use of your already built react app</li>
                <p>
                  Code:
                  <ul>
                     <li><img src="https://i.imgur.com/cmPQPTp.png"  width="300" 
                      height="200" >
                      </img></li>
                      <li>Make sure your React app is in a separate folder from server side of your app, client side of the application should be in named 'client folder'</li>
                  </ul> 
                </p>
                <li>To push to heroku on terminal enter: heroku login</li>
                <li>You can initialize a git repository and commit and deploy to Heroku:</li>
                <li> <img src="https://i.imgur.com/k2WqwTY.png"  width="300" 
                      height="200" >
                      </img>
                </li>
                <li>You can also deploy directly by connecting your github to Heroku</li>
                <li> <img src="https://i.imgur.com/hBzg71U.png"  width="500" 
                      height="300" >
                      </img>
                </li>
                               
            </ul> 
              
            </p>
          </div>
        </div>
      </div>
    </div>
   
  );
}

export default Page2;
