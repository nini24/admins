import React, { useState } from 'react';
import './App.css';
import deskHeader from './images/deskHeader.svg';
import { data } from './data';
import Display from './itemDisplay';

const App = () => {
  const [items, setItems] = useState(data);

  return (
    <div className="App">
      <header>
        <img src={deskHeader} alt="header-image" className="deskHeader" />
      </header>
      <div className="item-list">
        {items.map((result, index) => (
          <div className="item-data">
            <Display result={result} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
