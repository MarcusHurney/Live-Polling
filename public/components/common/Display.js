import React from 'react';

const Display = (props) => {
  // display will only show its children if the "if" property is true
  if (props.if) {
    return <div>{props.children}</div>;
  }
  return null;
};

export default Display;
