import React from 'react';
import ReactDOM from 'react-dom';
import JobTable from '../components/JobTable';

it('renders without crashing', () => {
  const props = {
    jobs: [
      {
        numbers: ['0123456788', '0123456789'],
        maxNumber: '0123456789',
        minNumber: '0123456788',
        size: 0.121121,
        name: '0123456788_0123456789_.txt'
      },
      {
        numbers: ['0123456788', '0123456789'],
        maxNumber: '0123456789',
        minNumber: '0123456788',
        size: 0.121121,
        name: '0123456788_0123456789_.txt'
      },
      {
        numbers: ['0123456788', '0123456789'],
        maxNumber: '0123456789',
        minNumber: '0123456788',
        size: 0.121121,
        name: '0123456788_0123456789_.txt'
      }
    ]
  }
  const div = document.createElement('div');
  ReactDOM.render(<JobTable {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
