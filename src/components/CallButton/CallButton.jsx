import React from 'react';

const divStyle = {
  // color: "white",
  backgroundColor: 'DodgerBlue',
  padding: '5px',
  // fontFamily: "Arial",
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  // bottom: "0"
  // zIndex: "1",
};
const textStyle = {
  color: 'white',
};

export const CallButton = () => {
  return (
    <div>
      <a style={textStyle} href="tel:+34 686478847">
        <div className="zindex" style={divStyle}>
          Click to call me
        </div>
      </a>
    </div>
  );
};
