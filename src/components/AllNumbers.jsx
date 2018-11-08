import React from 'react';

const AllNumbers = (props) => {
  const { allNumbers, handleBackToList } = props;
  return (
    <div className="numbers-container">
      <div className="numbers-wrapper">
        <button onClick={handleBackToList} className="all-numbers-trigger">Back to List</button>
        <div className="total-number">
          Total Number Generated: {allNumbers.length}
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
