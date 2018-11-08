import React from 'react';

const JobTable = (props) => {
  const { jobs } = props;
  return (
    <div className="job-table">
      <h5>Completed Jobs</h5>
      <table className="job-list">
        <thead>
          <tr>
            <td className="date header">File Name</td>
            <td className="first-number header">Min Number</td>
            <td className="last-number header">Max Number</td>
            <td className="size header">File Size</td>
          </tr>
        </thead>
        <tbody>
          {
            (jobs.length === 0) && <tr>No Job Yet</tr>
          }
          {
            jobs.map((job, index) => {
              return (
                <tr key={index}>
                  <td className="date">{job.name}</td>
                  <td className="first-number">{job.minNumber}</td>
                  <td className="last-number">{job.maxNumber}</td>
                  <td className="size">{job.size}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default JobTable;
