import { ethers } from 'ethers'
import { useState } from "react"
import './button.css'
import React, { Component } from 'react'

function App() {

  const [name, setName] = useState()
  const [symbol, setSymbol] = useState()
  const [balance, setBalance] = useState()

  const reqBal = async () => {

    //connect wallet

    const wallet = new ethers.BrowserProvider(window.ethereum)
    const block = await wallet.getBlockNumber()

    console.log(block)

    //get connected address

    const address = await wallet.getSigner()
    console.log(address.address)

    //create contract

    const token = new ethers.Contract('')

  }

  return (
    <div>
      <p>
        Hello World!
      </p>

      <button onClick={() => reqBal()}>Request Balance</button>
    </div>
  );
}

export default App;
