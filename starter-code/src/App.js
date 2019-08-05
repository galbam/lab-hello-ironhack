import React, { Component } from 'react';
import Section1Right from "./Section1Right";
import Section1Left from "./Section1Left";
import Section2 from "./Section2";
import "./style.css";

export default class App extends Component {
     render() {
          return (
               <div className="container">
                    <div className="row top">
                         <div className="col">
                         <Section1Left />
                         </div>
                         
                         <div className="col topImage">
                         <Section1Right />
                         </div>
                    </div>
                    <Section2 />
               </div>
          )
     }
}
