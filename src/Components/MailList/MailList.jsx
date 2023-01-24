import React from "react";
import "./MailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailtitle">Save Time, Save Money</h1>
      <div className="maildesc">
        Sign Up and We Will Bring The Best Deals to You
      </div>
      <div className="mailinputcontainer">
        <input type="text" className="mailinput" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
