import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://i.imgur.com/5wIwFBt.png"
              alt=""
            />
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://i.imgur.com/y8iBjf6.png"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">What is React and NodeJS? The Basics</h1>
            <p>
              React is an open source free front-end JavaScript library that allows
              for the development of UI components and is mainly operated by 
              individual communities of developers and companies. It mainly
              deals with communicating with the DOM and uses libraries for routing 
              with client side functionality. In recent years React has seen a large
              boost in use wherein in 2020, based on a survey conducted by StackOverflow it was
              the second most popular frontend framework.
            </p>
            <p>
              Node.js is an open source Javascript runtime environment for the backend that is 
              ran on the V8 engine and executes code to web browsers. It uses JavaScript for 
              command line tools and server-side scripting that outputs dynamic web page content
              before page is sent to the browser. Recent statistics have shown in 2020 that
              around 50% of developers have opted using Node.js
            </p>
            <img src="https://miro.medium.com/max/1400/1*CpDidbInbG4Er_0j_hknFQ.jpeg"  width="500" 
                height="300" >
            </img>
            <p>
              React is primarily used for building web apps and with DOM it is popular amongst
              developers who build native applications since it runs on a browser and on web servers
              such as Apace or with various backends. Unlike React Native that is 
              mostly used by iOS and Android developers  ReactJs simply is for working with browser's DOM.
            </p>

            <p>
              Node.js is used primarly for enterprise development since it is a good option for building
              microservices, and event queues and since it is asynchronous and has non-blocking I/O, 
              and is event-driven this makes it a popular choice for backend development.
            </p>

            <p>
              React and Node.js are popular duos since Node is conveniet for hosting and running a web server
              for React apps, since it uses node package managing, where the node works alongside the NPM 
              registry to install packages through the NPM CLI. Node.js also bundles react apps into a single
              file for easy compilation. Since both React and Node.js are JavaScript this means it can be excecuted 
              both client and server side and React can be deployed in any Node.js environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
