import React from "react";
import "./credStory.css";

const CredStory = () => {
  return (
    <div className="cred-story flex absolute-center">
      <div className="max-width flex story-wrapper">
        <div className="flex cred-story-heading-wrapper">
          <div className="photo-section-heading cred-experience-heading">
       Who we are
          </div>
        </div>
        <div className="cred-story-detail">
          <div className="photo-section-subheading">
          We at Authscate aim to solve the counterfeiting problem by leveraging the power of blockchain and NFC. 
          </div>
          <div className="cred-story-para">
          Four engineering students conceived the idea during the fall of 2022. Our concept has been appreciated for a while
           
          </div>
          <div className="cred-story-para">
          we’ve been incubated at Netaji Subhas University of Technology’s India Innovation Fund (IIF) incubator. Stay tuned for our upcoming product updates
          </div>
        </div>
      </div>
    </div>
  );
};

export default CredStory;
