import React, { Component } from 'react';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="details">
            <h3 className="name">pNg</h3>
            <h4 className="description">
              Phone Number Generator. <br />
              We are cut out to generate Phone Numbers for you.
            </h4>
            <button className="job-trigger">
              Create Phone Numbers
            </button>
          </div>
          <div className="jobs">
            <h5>Completed Jobs</h5>
            <div className="job-wrapper">
              <div className="job">
                <div className="details">
                  <span className="date">Date</span>
                  <span className="first-number">First Number</span>
                  <span className="last-number">Last Number</span>
                  <span>File Size</span>
                </div>
                <div className="action">
                  Actions
                </div>
              </div>
              <div className="job">
                <div className="details">
                  <span className="date">Date</span>
                  <span className="first-number">90909090909</span>
                  <span className="last-number">09090909090</span>
                  <span className="last-number">2.5Mb</span>
                </div>
                <div className="action">
                  <button className="cancel">x</button>
                  <button className="download">&#8595;</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
