import React from 'react';
import ReactDOM from 'react-dom';
import AllNumbers from '../components/AllNumbers';


describe('NewPassword component should', () => {
  it('renders without crashing', () => {

    const props = {
      allNumbers: ['0123456788', '0123456789'],
      jobs: [
        {
          maxNumber: '0123456789',
          minNumber: '0123456788',
          numbers: ['0123456788', '0123456788']
        },
        {
          maxNumber: '0123456789',
          minNumber: '0123456788',
          numbers: ['0123456788', '0123456788']
        }
      ],
      handleBackToList: jest.fn()
    }
    const div = document.createElement('div');
    ReactDOM.render(<AllNumbers {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
