import React, { Component } from 'react';
import axios from 'axios';
import toastr from 'toastr';
import JobTable from './JobTable';
import AllNumbers from './AllNumbers';
import SingleJob from './SingleJob';
import '../css/App.css';

toastr.options.timeOut = 10000;
toastr.options.extendedTimeOut = 10000;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      allNumbers: [],
      job: {
        numbers: []
      }
    }
    this.handleGenerateNumber = this.handleGenerateNumber.bind(this);
    this.getAllNumbers = this.getAllNumbers.bind(this);
    this.handleBackToList = this.handleBackToList.bind(this);
    this.loadJobs = this.loadJobs.bind(this);
  }

  componentDidMount() {
    this.loadJobs();
  }

  handleGenerateNumber() {
    axios.post('http://localhost:9000/numbers')
      .then((response) => {
        this.setState({
          allNumbers: [],
          jobs: [...this.state.jobs, response.data.data],
          job: {
            ...response.data.data
          }
        });
      })
      .catch((err) => {
        toastr.error('Error generating Numbers');
      })
  }

  getAllNumbers() {
    axios.get('http://localhost:9000/all_numbers')
      .then((response) => {
        this.setState({
          allNumbers: response.data.data.numbers,
          backToList: false
        });
      })
      .catch((err) => {
        toastr.error('Error Fetching all Numbers');
      })
  }

  handleBackToList() {
    this.setState({
      allNumbers: [],
      job: {
        numbers: []
      }
    });
  }
  
  loadJobs() {
    axios.get('http://localhost:9000/numbers')
      .then((response) => {
        this.setState({
          jobs: response.data.data
        });
      })
      .catch((err) => {
        toastr.error('Error Fetching Numbers List');
      });
  }

  render() {
    const { jobs, allNumbers, job } = this.state; 
    return (
      <div className="App">
        <div className="container">
          <div className="details">
            <h3 className="name">pNg</h3>
            <h4 className="description">
              Phone Number Generator. <br />
              We are cut out to generate Phone Numbers for you.
            </h4>
            <button type="button" className="job-trigger" onClick={this.handleGenerateNumber}>
              Create Phone Numbers
            </button>
            <button type="button" onClick={this.getAllNumbers} className="all-numbers-trigger">
              Get all Numbers
            </button>
          </div>
          <div className="jobs">
            {
              (job.numbers.length !== 0)
                ? <SingleJob job={job} handleBackToList={this.handleBackToList} />
                : (allNumbers && allNumbers.length !== 0)
                ? <AllNumbers allNumbers={allNumbers} jobs={jobs} handleBackToList={this.handleBackToList} />
                : <JobTable jobs={jobs} />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
