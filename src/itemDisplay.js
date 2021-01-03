import React from 'react';

const itemDisplay = ({ result }) => {
  const image = require('./images/' + result.logo);
  console.log(image);
  return (
    <div className="res-data">
      <img src={image.default} alt="logo" className="logo" />
      <p>{result.company}</p>
    </div>
  );
};

export default itemDisplay;
