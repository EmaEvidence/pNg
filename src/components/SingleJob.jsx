import React from 'react';

const SingleJob = (props) => {
  const { handleBackToList, job } = props;
  return (
    <div className="numbers-container">
      <div className="numbers-wrapper">
        <button onClick={handleBackToList} className="all-numbers-trigger">Back to List</button>
        <div className="total-number">
          <span>Total Numbers Generated in the last job: {job.numbers.length}</span>
          <div>
            <span>Min-Number: {job.minNumber}. </span>
            <span>Max-Number: {job.maxNumber}. </span>
            <span>Size: {job.size}. </span>
          </div>
        </div>
        <div className="numbers">
          {
            job.numbers.join()
          }
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
