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
    <div class="color-bar">
      <button class="uiverse">
      <div class="rapper">
        <span>DIFFJOB</span>
        <div class="circle circle-12"></div>
        <div class="circle circle-11"></div>
        <div class="circle circle-10"></div>
        <div class="circle circle-9"></div>
        <div class="circle circle-8"></div>
        <div class="circle circle-7"></div>
        <div class="circle circle-6"></div>
        <div class="circle circle-5"></div>
        <div class="circle circle-4"></div>
        <div class="circle circle-3"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-1"></div>
      </div>
      </button>
      <button class="challengesButton">Challenge</button>
      <button class="eventButton">Event</button>
      <button class="jobButton">Job</button>

    </div>
    <div class="group">
    <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
        <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
        </g>
    </svg>
      <input placeholder="Search" type="search" class="input"></input>
    </div>

    
    <div class="text">
      <h1>EVENT(s) ONGOING</h1>
    </div>
    <div class="card">
    <div class="card-details">
      <p class="text-title">Hackathon EthKL</p>
      <p class="text-body">Competition for HACKERS</p>
    </div>
      <button class="card-button">Apply Now</button>
    </div>
    <div class="card2">
    <div class="card-details2">
      <p class="text-title2">Hackathon EthKL</p>
      <p class="text-body2">Competition for HACKERS</p>
    </div>
      <button class="card-button2">Apply Now</button>
    </div>

    <div class="text2">
      <h1>EVENT(s) UPCOMING</h1>
    </div>
    <div class="card3">
    <div class="card-details3">
      <p class="text-title3">Hackathon EthKL</p>
      <p class="text-body3">Competition for HACKERS</p>
    </div>
      <button class="card-button3">Apply Now</button>
    </div>
    <div class="card4">
    <div class="card-details4">
      <p class="text-title4">Hackathon EthKL</p>
      <p class="text-body4">Competition for HACKERS</p>
    </div>
      <button class="card-button4">Apply Now</button>
    </div>

    </body>
  );
}

export default App;
