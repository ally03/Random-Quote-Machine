import React, { Component } from "react";
import "./App.css";

const quoteShuffle = [
  {
    id: 1,
    quote:
      "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.",
    author: "-Dr. Suess"
  },
  {
    id: 2,
    quote:
      "I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best.",
    author: "-Marilyn Monroe"
  },
  {
    id: 3,
    quote: "Get busy living or get busy dyin",
    author: "-Stephen King"
  },
  {
    id: 4,
    quote:
      "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
    author: "-Mark Caine"
  },
  {
    id: 5,
    quote:
      "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us",
    author: "-Helen Keller"
  },
  {
    id: 6,
    quote:
      "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do",
    author: "-Mark Twain"
  }
];

class RamdomQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renObjData: quoteShuffle[Math.floor(Math.random() * quoteShuffle.length)]
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      renObjData: quoteShuffle[Math.floor(Math.random() * quoteShuffle.length)]
    });
  }

  render() {
    console.log(this.state.renObjData);
    let { quote, author, id } = this.state.renObjData;
    // function renObjData(quote, author) {
    //   quoteShuffle[Math.floor(Math.random() * quoteShuffle.length)];
    // }
    // console.log(quoteShuffle);
    // const renObjData =
    //   quoteShuffle[Math.floor(Math.random() * quoteShuffle.length)];
    // console.log(renObjData);

    // const renObjData = quoteShuffle.map(function(quoteShuffle, ida, idx) {
    //   return [
    //     <p key={ida}>{quoteShuffle.quote}</p>,
    //     <p key={idx}>{quoteShuffle.author}</p>
    //   ];
    // });
    return (
      <div>
        <h1>{quote}</h1>
        <span id="author" className="author">
          {author}
        </span>
        <div>
          <button
            className="App-newQuote"
            id="new-quote"
            onClick={this.handleClick}
          >
            new quote
          </button>
        </div>
      </div>
    );
  }
}

export default RamdomQuote;
