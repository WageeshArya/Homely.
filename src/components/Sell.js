import React, { useState, useRef, useEffect } from 'react';
import './Sell.scss';
import gsap from 'gsap';
const Sell = () => {

  const allQuotes = [
  {
    quote: 'There has never been better real estate.',
    quoter: 'Estates Insider'
  },
  {
    quote: 'The greatest homes in the greatest of locations.',
    quoter: 'NewHomes'
  },
  {
    quote: 'Truly Homely.',
    quoter: 'Michael Bond'
  },
  {
    quote: 'The best in the business.',
    quoter: 'C & P'
  },
  {
    quote: 'The most professional as well as Homely service.',
    quoter: 'H.H.M.'
  },
  {
    quote: 'You can never go wrong with Homely homes.',
    quoter: 'Business Professionals'
  }
]

  const [startQuote, setStartQuote] = useState(0);
  const [endQuote, setEndQuote] = useState(3)
  const [displayQuotes, setDisplayQuotes] = useState(allQuotes.slice(startQuote, endQuote));

  const prevQuote = () => {
    setStartQuote(startQuote === 0 ? 6 : startQuote - 1);
    setEndQuote(endQuote === 0 ? 6 : endQuote - 1);
    if(endQuote < 3 ) {
      setDisplayQuotes([...allQuotes.slice(startQuote - 1, 6), ...allQuotes.slice(0, endQuote)]);
    }
    else {
      setDisplayQuotes(allQuotes.slice(startQuote, endQuote));
    }
  }

  const nextQuote = () => {
    setStartQuote(startQuote === 6 ? 0 : startQuote + 1);
    setEndQuote(endQuote === 6 ? 0 : endQuote + 1);

    if(startQuote >= 4) {
      setDisplayQuotes([...allQuotes.slice(startQuote, 6), ...allQuotes.slice(0, endQuote + 1)]);
    }
    else {
      setDisplayQuotes(allQuotes.slice(startQuote, endQuote));
    }
  }

  return (
    <section className="sell">
        <div className="sellHeader">
          <div className="sellHeaderText">
            <h3 className="sellh3">Talk to our leading experts</h3>
            <h4 className="sellh4">Get help finding or selling a Homely home from our industry leading experts.</h4>
          </div>
          <div className="homeIcon">
            <img src={require('../icons/home.svg')} alt="home"/>
          </div>
        </div>
        <div className="quotesFullDiv">
          <div>
            <img src={require('../images/sell.jpg')} alt="sell"/>
          </div>
          <div className="quotesDiv">
            <div className="quotesLArrow" onClick={prevQuote}>
              <img src={require('../icons/slide-arrow.svg')} alt="Left arrow"/>
            </div>
            <div className="quotes">
              {
                displayQuotes.map(quote => {
                  return (
                    <div className="quote">
                      <p className="quoteText">{quote.quote}</p>
                      <p className="quoter">-{quote.quoter}</p>
                    </div>
                  )
                })
              }
            </div>
            <div className="quotesRArrow" onClick={nextQuote}>
              <img src={require('../icons/slide-arrow.svg')} alt="Right arrow"/>
            </div>
          </div>
        </div> 
    </section>
  )
}

export default Sell
