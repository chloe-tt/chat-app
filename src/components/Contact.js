import React from 'react';
import './Contact.css'
import { checkPropTypes } from 'prop-types';


function Contact(prop) {
  return (

<div className="Contact">
    <div className="avatar"> 
    <img src={props.avatar} alt={props.name} />
       </div>
    <div className="container">
        <div className="name">
            <h2>{props.name}</h2>
        </div>
        <div className="status">
            <div className={props.status? "status-online" : "status-offline"}></div>
            <div className="status-text">
                <p>{props.online}</p>
            </div>
        </div>
    </div>
</div>

  );
}

export default Contact;

