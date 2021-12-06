import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Page2,
  Page3,
  Page5,
  Page6,
  Demo,
  demoPosts,
  demoPost,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page2" element={<About />} />
      <Route path="/page3" element={<Contact />} />
      <Route path="/page5" element={<Page5 />} />
      <Route path="/page6" element={<Page6 />} />
      <Route path="/page4" element={<Demo />}>
        <Route path="" element={<demoPosts />} />
        <Route path=":postSlug" element={<demoPost />} />
      </Route>
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
