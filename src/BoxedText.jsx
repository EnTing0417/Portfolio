import React from 'react';
import './BoxedText.css';  // Import the CSS file

const BoxedText = ({ children }) => {
  return (
    <div className="box">
      {children}
    </div>
  );
};

export default BoxedText;
