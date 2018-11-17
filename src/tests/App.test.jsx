import React from 'react';
import { mount, configure } from 'enzyme';
import mockAxios from 'axios';
import Adapter from 'enzyme-adapter-react-16';
import App from '../components/App';

configure({ adapter: new Adapter() })

it('renders without crashing', async () => {
  const getAllNumbers = jest.spyOn(App.prototype, 'getAllNumbers');
  const handleGenerateNumber = jest.spyOn(App.prototype, 'handleGenerateNumber');
  const handleBackToList = jest.spyOn(App.prototype, 'handleBackToList');
  
  const wrapper = mount(<App />);
  const instance = wrapper.instance();
  const getAllNumbersTrigger = wrapper.find(".all-numbers-trigger");
  const generateNumberTrigger = wrapper.find(".job-trigger");

  const loadJobs = jest.spyOn(instance, 'loadJobs');
  
  await instance.componentDidMount();
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
  wrapper.setState({
    job: {
      numbers: ['0190909099', '0109090909']
    }
  });
  expect(wrapper.find('.back-btn').length).toBe(1);
  expect(wrapper.find('.numbers-container').length).toBe(1);
  wrapper.find('.back-btn').simulate('click');
  expect(handleBackToList).toHaveBeenCalled();
  wrapper.setState({
    jobs: [{
      name: 'job 1',
      minNumber: '080111111',
      maxNumber: '080909090',
      size: '0.000mb'
    }]
  });
  expect(wrapper.find('.job-list').length).toBe(1);
});

it('renders without crashing', async () => {
  mockAxios.get.mockImplementationOnce(() => Promise.reject([]));
  mockAxios.post.mockImplementationOnce(() => Promise.reject([]));

  const handleGenerateNumber = jest.spyOn(App.prototype, 'handleGenerateNumber');
  
  const wrapper = mount(<App />);
  const instance = wrapper.instance();
  const generateNumberTrigger = wrapper.find(".job-trigger");

  const loadJobs = jest.spyOn(instance, 'loadJobs');
  
  await instance.componentDidMount();
  generateNumberTrigger.simulate('click');
  wrapper.update();
  instance.forceUpdate();

  expect(loadJobs).toHaveBeenCalled();
  expect(handleGenerateNumber).toHaveBeenCalled();
});

