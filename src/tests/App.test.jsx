import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../components/App';

configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const getAllNumbers = jest.spyOn(App.prototype, 'getAllNumbers');
  const handleGenerateNumber = jest.spyOn(App.prototype, 'handleGenerateNumber');
  
  const wrapper = mount(<App />);
  const instance = wrapper.instance();
  const getAllNumbersTrigger = wrapper.find(".all-numbers-trigger");
  const generateNumberTrigger = wrapper.find(".job-trigger");

  const loadJobs = jest.spyOn(instance, 'loadJobs');
  
  instance.componentDidMount();
  generateNumberTrigger.simulate('click');
  wrapper.update();
  instance.forceUpdate();

  expect(wrapper.find('.all-numbers-trigger').length).toBe(1);
  expect(wrapper.find('.job-trigger').length).toBe(1);
  expect(wrapper.find('.App').length).toBe(1);
  expect(wrapper.find('.container').length).toBe(1);
  expect(wrapper.find('.name').length).toBe(1);
  expect(wrapper.find('.description').length).toBe(1);
  expect(wrapper.find('.jobs').length).toBe(1);

  expect(loadJobs).toHaveBeenCalled();
  expect(handleGenerateNumber).toHaveBeenCalled();

  getAllNumbersTrigger.simulate('click');
  expect(getAllNumbers).toHaveBeenCalled();
  wrapper.update();
  instance.forceUpdate();
});

