import React from 'react';

const AllNumbers = (props) => {
  const { allNumbers, handleBackToList, jobs } = props;
  return (
    <div className="numbers-container">
      <div className="numbers-wrapper">
        <button onClick={handleBackToList} className="all-numbers-trigger">Back to List</button>
        <div className="total-number">
          Total Numbers Generated in {jobs.length} job(s): {allNumbers.length}
        </div>
        <div className="numbers">
          {
            allNumbers.join()
          }
        </div>
      </div>
    </div>
  );
};

export default AllNumbers;
