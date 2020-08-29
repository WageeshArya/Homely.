import React, { useState, useRef, useEffect } from 'react';
import './Sell.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const Sell = () => {
  let sellHeader = useRef(null);
  let homeIcon = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to(sellHeader.current, {
      opacity: 1,
      duration: 1,
      ease: 'power4.inOut',
      scrollTrigger: {
        trigger: sellHeader.current,
        start: 'top center',
        end: 'bottom bottom-=400',
        toggleActions: 'play none none reverse'
      }
    })
    gsap.from(homeIcon.current, {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: 'power4.inOut',
      scrollTrigger: {
        trigger: homeIcon.current,
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
      }
    })
  }, []);

  const allQuotes = [
  {
    id: 1,
    quote: 'There has never been better real estate.',
    quoter: 'Estates Insider'
  },
  {
    id: 2,
    quote: 'The greatest homes in the greatest of locations.',
    quoter: 'NewHomes'
  },
  {
    id: 3,
    quote: 'Truly Homely.',
    quoter: 'Michael Bond'
  },
  {
    id: 4,
    quote: 'The best in the business.',
    quoter: 'C & P'
  },
  {
    id: 5,
    quote: 'The most professional as well as Homely service.',
    quoter: 'H.H.M.'
  },
  {
    id: 6,
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

    console.log(document.querySelectorAll(".quote"));
  }

  return (
    <section className="sell">
        <div className="sellHeader">
          <div className="sellHeaderText" ref={sellHeader}>
            <h3 className="sellh3">Talk to our leading experts</h3>
            <h4 className="sellh4">Get help finding or selling a Homely home from our industry leading experts.</h4>
          </div>
          <div className="homeIcon">
            <svg id="icon" width="253" height="263" viewBox="0 0 253 263" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path ref={homeIcon} d="M249.653 115.481L132.628 2.49262C129.219 -0.830507 123.781 -0.830507 120.372 2.49262L3.35138 115.477C1.62861 117.139 0.655823 119.431 0.655823 121.825C0.655823 126.698 4.60651 130.649 9.47925 130.649H25.0306V254.177C25.0306 259.05 28.9807 263 33.854 263H95.618C100.491 263 104.441 259.05 104.441 254.177V183.589H148.559V254.177C148.559 259.05 152.509 263 157.382 263H219.146C224.019 263 227.969 259.05 227.969 254.177V130.649H243.521C245.913 130.649 248.202 129.677 249.865 127.957C253.251 124.453 253.156 118.868 249.653 115.481ZM227.969 121.825C223.096 121.825 219.146 125.775 219.146 130.649V254.177H157.382V183.589C157.382 178.716 153.432 174.766 148.559 174.766H104.441C99.5681 174.766 95.618 178.716 95.618 183.589V254.177H33.854V130.649C33.854 125.775 29.9038 121.825 25.0306 121.825H9.47925L126.5 8.84108L243.565 121.825H227.969Z" fill="black"/>
            </svg>

          </div>
        </div>
        <div className="quotesFullDiv">
          <div>
            <img src={require('../images/sell.jpg')} alt="sell"/>
          </div>
          <div className="quotesDiv">
            <p className="testimonials"><em>—</em>Testimonials<em>—</em></p>
            <div className="quoteBoxes">
              <div className="quotesLArrow" >
                <img src={require('../icons/slide-arrow.svg')} alt="Left arrow" onClick={prevQuote}/>
              </div>
              <div className="quotes">
                {
                  displayQuotes.map(quote => {
                    return (
                      <div className="quote" id={`quote-${quote.id}`} key={quote.id}>
                        <p className="quoteText">"{quote.quote}"</p>
                        <p className="quoter"> <em>—</em> {quote.quoter}</p>
                      </div>
                    )
                  })
                }
              </div>
              <div className="quotesRArrow">
                <img src={require('../icons/slide-arrow.svg')} alt="Right arrow" onClick={nextQuote}/>
              </div>
            </div>
            
          </div>
        </div> 
    </section>
  )
}

export default Sell
