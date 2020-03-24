
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="Contact">
        <img className="avatar"
        src="https://randomuser.me/api/portraits/men/20.jpg"
        alt="Jake Love picture"
        />
        <div className ="UserData">
            <h4>Jake Love</h4>
       
            <div classeName="status">
                <div className="status-online">
                </div>
                <div>
                    <div className="status-online">
                    </div>
                    <p>Online</p>
                </div>
            </div>
      
        </div> 
    </div>

  );
}

export default Contact;