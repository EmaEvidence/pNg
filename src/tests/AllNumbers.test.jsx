import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AllNumbers from '../components/AllNumbers';

configure({ adapter: new Adapter() })

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

    const wrapper = mount(<AllNumbers {...props} />);

    expect(wrapper.find('.numbers-container').length).toBe(1);
    expect(wrapper.find('.numbers-wrapper').length).toBe(1);
    expect(wrapper.find('.back-btn').length).toBe(1);
    expect(wrapper.find('.total-number').length).toBe(1);
    expect(wrapper.find('.numbers').length).toBe(1);
    expect(wrapper.find('.numbers').text()).toEqual('0123456788,0123456789');
  });
});
