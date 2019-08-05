import React, { Component } from 'react';

export default class Section1Left extends Component {
     render() {
          return (
               <div className="container m-5">
                    <div className="d-flex justify-content-start">
                         <img src="/images/ironhack-logo.svg" />
                    </div>
                    <h1 className="display-2 font-weight-bold text-white mt-5">Say hello to ReactJS</h1>
                    <p className="">You will learn a Frontend framework from scratch, to become a Ninja Developer</p>
                    <label className="btn">Awesome!</label>
               </div>
          )
     }
}
