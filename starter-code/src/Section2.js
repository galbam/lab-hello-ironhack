import React, { Component } from 'react';
import Card from "./Card";

export default class Section2 extends Component {
     render() {
          return (
               <div className="container">
                    <div className="row">
                         <div className="col">
                              <Card imageUrl="/images/icon1.png" title="Declarative" description="React makes it painless to create interactive UI." />
                         </div>
                         <div className="col">
                              <Card imageUrl="/images/icon2.png" title="Components" description="Build encapsulated components that manage their state." />
                         </div>
                         <div className="col">
                              <Card imageUrl="/images/icon3.png" title="Single-Way" description="A set of immutable values are passed to the components." />
                         </div>
                         <div className="col">
                              <Card imageUrl="/images/icon4.png" title="JSX" description="Statically-typed, designed to run on modern" />
                         </div>
                    </div>
               </div>
          )
     }
}
