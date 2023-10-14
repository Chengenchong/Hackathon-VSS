import { ethers } from 'ethers';
import { useState } from 'react';
import logo from './logo.png';
import './button.css';
import './index.css';
import React, { Component } from 'react';

function App() {
  const [name, setName] = useState();
  const [symbol, setSymbol] = useState();
  const [balance, setBalance] = useState();

  const reqBal = async () => {
    // connect wallet
    const wallet = new ethers.BrowserProvider(window.ethereum);
    const block = await wallet.getBlockNumber();
    console.log(block);

    // get connected address
    const address = await wallet.getSigner();
    console.log(address.address);

    // create contract
    const token = new ethers.Contract('');
  };

  return (
    <body>
      <header>
        <div className="header-content">
          <h1 style={{ marginTop: '80px' }}>Welcome to DiffJob</h1>
        </div>
        <div className="logo-container" style={{ marginTop: '-70px' }}>
          <img src={logo} alt="Rotating Image" className="rotating-image" />
        </div>
      </header>
      <div className="content">
        <p>This is the main content. You can add more content here.</p>
        <p>Hello World!</p>
        <button onClick={() => reqBal()}>Request Balance</button>
      </div>
    </body>
  );
}

export default App;
