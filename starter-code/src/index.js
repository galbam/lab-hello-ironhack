// import React from "react";
// import ReactDOM from "react-dom";
// import "./style.css";


// function Header(){
//      return (
//      <div className="top">
//           <div className="section">
//                <div className="columns ">
//                     <div className="column">
//                          <div>
//                               <img src="../images/ironhack-logo.svg" />
//                               <h2 className="is-size-1">Say hello to React</h2>
//                               <p>You will learn a Frontend framework from scratch, to become a  Ninja Developer.</p>
//                               <button className="button">Awesome!</button>
//                          </div>
//                     </div>
//                     <div className="column topImage">
//                          <div className="">
//                               <img src="../images/menu-top.svg" />
//                          </div>
//                     </div>
//                </div>
//           </div>
//      </div>
//      );
// }

// function Section1(){
//      return (
//           <div className="section ">
//                <div className="columns">
//                     <div className="column">
//                          <img className="image is-128x128" src="../images/icon1.png" />
//                          <h2 className="is-size-5">Declarative</h2>
//                          <p className="is-size-7">React make it painless.</p>
//                     </div>
//                     <div className="column">
//                          <img className="image is-128x128" src="../images/icon2.png" />
//                          <h2 className="is-size-5">Components</h2>
//                          <p className="is-size-7">Build encapsulated components.</p>
//                     </div>
//                     <div className="column">
//                          <img className="image is-128x128" src="../images/icon3.png" />
//                          <h2 className="is-size-5">Single-Way</h2>
//                          <p className="is-size-7">A set of immutable values ae passed.</p>
//                     </div>
//                     <div className="column">
//                          <img className="image is-128x128" src="../images/icon4.png" />
//                          <h2 className="is-size-5">JSX</h2>
//                          <p className="is-size-7">Statically-typed designed to run on modern browsers.</p>
//                     </div>
//                </div>
//           </div>
//      );
// }



// const element = ( 
// <div>
//      <Header />
//      <Section1 />
// </div>
// );


// ReactDOM.render(element, document.getElementById("root"));




import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const element = (
     <div>
          <div className="intro">  
               <div className="navbar">
                    <img src='images/ironhack-logo.svg' />
                    <img src='images/menu-top.svg' />
               </div>

               <div className="intro-text">
                    <h1>Say hello to ReactJS</h1>
                    <p>You will learn Frontend framework from scratch to become a Ninka Developer</p>
                    <div>
                         <button className="button">Awesome!</button>
                    </div>
               </div>
          </div>

          <div className="details">
               <div className="card">
                    <img src="images/icon1.png" />
                    <h3>Declarative</h3>
                    <h5>React makes it painless to create interactive UIs</h5>
               </div>
               <div className="card">
                    <img src="images/icon2.png" />
                    <h3>Declarative</h3>
                    <h5>React makes it painless to create interactive UIs</h5>
               </div>
               <div className="card">
                    <img src="images/icon3.png" />
                    <h3>Declarative</h3>
                    <h5>React makes it painless to create interactive UIs</h5>
               </div>
               <div className="card">
                    <img src="images/icon1.png" />
                    <h3>Declarative</h3>
                    <h5>React makes it painless to create interactive UIs</h5>
               </div>
          </div>
     </div>
)

ReactDOM.render(element, document.getElementById("root"));