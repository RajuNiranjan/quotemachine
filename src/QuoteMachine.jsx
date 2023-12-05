import React, { useState, useEffect } from "react";
// import "./styles.css";

const QuoteMachine = () => {
  const [quote, setQuote] = useState({});

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const tweetQuote = () => {
    const tweetText = encodeURIComponent(
      `"${quote.content}" - ${quote.author}`
    );
    window.open(`https://twitter.com/intent/tweet?text=${tweetText}`, "_blank");
  };

  return (
    <div className="bg-blue-500 h-screen w-full text-white relative">
      <div
        id="quote-box"
        className="container bg-blue-400 m-auto absolute top-52 left-52 translate-x-[-50px] h-52 p-5 rounded-md">
        <p id="text">{quote.content}</p>
        <p id="author">-{quote.author}</p>
        <button
          id="new-quote"
          onClick={fetchQuote}
          className="bg-blue-700 px-2 rounded mt-5 mr-5">
          New Quote
        </button>
        <a
          id="tweet-quote"
          href="#"
          onClick={tweetQuote}
          target="_blank"
          className="bg-blue-700 px-2 rounded">
          Tweet Quote
        </a>
      </div>
    </div>
  );
};

export default QuoteMachine;
