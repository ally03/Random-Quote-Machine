import React, { Component } from "react";
import "./App.css";
import RandomQuote from "./RandomQuote";

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <div id="quote-box" className="App-middle">
          <RandomQuote />
          <div>
            <button id="tweet-quote">tweet-quote</button>
            <button id="tweet-quotee">facebook-quote</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
