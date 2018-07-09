import React, { Component } from 'react';
import './App.css';

const quotes = {
  quote1: {
    author: 'Winston S. Churchill',
    quote: 'Success is not final; failure is not fatal: It is the courage to continue that counts.',
    image: 'https://images.unsplash.com/photo-1465447142348-e9952c393450?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=82b38be65f964fc0bb65e4e61c233e31&auto=format&fit=crop&w=1568&q=80',
   },
  quote2: {
    author: 'Herman Melville',
    quote: 'It is better to fail in originality than to succeed in imitation.',
    image: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=214d4b3c50b289db475238a0c19c5ef5&auto=format&fit=crop&w=1496&q=80',
  },
  quote3: {
    author: 'Colin R. Davis',
    quote: 'The road to success and the road to failure are almost exactly the same.',
    image: 'https://images.unsplash.com/photo-1519170891011-1b4a9451439a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=644692e97f5da13111f673a06fedf395&auto=format&fit=crop&w=1575&q=80',
  },
    quote4: {
    author: 'Albert Einstein',
    quote: 'Try not to become a man of success. Rather become a man of value',
    image: 'https://images.unsplash.com/photo-1519816867408-c00b693d6c2c?ixlib=rb-0.3.5&s=edadab148ec818a82cb526055b13db70&auto=format&fit=crop&w=1400&q=80',
  },
  quote5: {
    author: 'Tony Hsieh',
    quote: 'Stop chasing the money and start chasing the passion.',
    image: 'https://images.unsplash.com/photo-1477289356685-84931feb3f12?ixlib=rb-0.3.5&s=9a9da6612744cd23efbef2f4e7fd05a8&auto=format&fit=crop&w=1489&q=80',
  },
  quote6: {
    author: 'Thomas J. Watson',
    quote: 'Would you like me to give you a formula for success? It\'s quite simple, really: Double your rate of failure. You are thinking of failure as the enemy of success. But it isn\'t at all. You can be discouraged by failure or you can learn from it, so go ahead and make mistakes. Make all you can. Because remember that\'s where you will find success.',
    image: 'https://images.unsplash.com/photo-1523977843538-0650e8cb2e7d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a43d0d3984b7a6e57716c15ee6fe5797&auto=format&fit=crop&w=1500&q=80',
  },
  quote7: {
    author: 'Anonymous',
    quote: 'The ones who are crazy enough to think they can change the world, are the ones that do.',
    image: 'https://images.unsplash.com/photo-1462726625343-6a2ab0b9f020?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=60ab3191e03aaa4efae03a88087591f0&auto=format&fit=crop&w=1500&q=80',
  },
  quote8: {
    author: 'Steve Jobs',
    quote: 'If you really look closely, most overnight successes took a long time.',
    image: 'https://images.unsplash.com/photo-1462331321792-cc44368b8894?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=437a5119533256113ad7f3c2e68ad174&auto=format&fit=crop&w=1422&q=80',
  },
  quote9: {
    author: 'Walt Disney',
    quote: 'The way to get started is to quit talking and begin doing.',
    image: 'https://images.unsplash.com/photo-1506789658653-e5729a1ee31d?ixlib=rb-0.3.5&s=0e7313ad040b78156d0fe68517c98195&auto=format&fit=crop&w=1491&q=80',
  },
  quote10: {
    author: 'Thomas Edison',
    quote: 'I never did anything worth doing by accident, nor did any of my inventions come indirectly through accident, except the phonograph. No, when I have fully decided that a result is worth getting, I go about it, and make trial after trial, until it comes.',
    image: 'https://images.unsplash.com/photo-1465322625814-2c183694898c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=210f4dde7debe21e3325e5b7bcf19ca3&auto=format&fit=crop&w=1491&q=80',
  }

  }



class App extends Component {
  constructor() {
    super()
    this.state = {
      quotes
    }
}

componentWillMount() {
    this.generateQuote()
  }
  
  generateQuote(e) {
    const keyArray = Object.keys(quotes)
    const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)]
    if(this.state.quote === quotes[randomKey].quote) {
      this.generateQuote()
      return
    }
    this.setState(quotes[randomKey])
  }

  render() {
    return(
      <div>
        <img src={this.state.image} alt='backGround' />
        <div className="container" >
          <p className="quote">
            { this.state.quote }
          </p>
          <p className="author">
            - { this.state.author }
          </p>
        </div>
        <button onClick={ e => this.generateQuote(e) }>
          QUOTE
        </button>
        <p className="claw">Photos Are From Unsplash.com</p>
         <p className="footer">Made with <i className="fas fa-heart" /> by Anwar</p>
        </div>

    )
  }


}


export default App;