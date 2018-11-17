import React from 'react';
import ReactDOM from 'react-dom';
import SingleJob from '../components/SingleJob';

it('renders without crashing', () => {
  const props = {
    job: {
      numbers: ['0123456788', '0123456789'],
      maxNumber: '0123456789',
      minNumber: '0123456788',
      size: 0.121121
    },
    handleBackToList: jest.fn()
  }
  const div = document.createElement('div');
  ReactDOM.render(<SingleJob {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
