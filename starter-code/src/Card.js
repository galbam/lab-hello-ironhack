import React from 'react';

const Card = props =>{
     return (

          <div className="container mt-5">
               <img width="150hv" src={props.imageUrl} />
               <h3 className="font-weight-bold">{props.title}</h3>
               <p>{props.description}</p>
          </div>

     );
};

export default Card;