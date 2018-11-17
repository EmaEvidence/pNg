const getNumbers = 'http://localhost:9000/all_numbers';
const generateNumbers = 'http://localhost:9000/numbers';
const loadJobs = 'http://localhost:9000/numbers';

const axios = {
  get: jest.fn((url) => {
    switch (url) {
      case getNumbers:
        return Promise.resolve({
          data: {
            data: {
              allNumbers: ['0190909099', '0109090909']
            }
          }
        });
      case loadJobs: 
      return Promise.resolve({
        data: {
          data: [{
            name: 'job 1',
            minNumber: '080111111',
            maxNumber: '080909090',
            size: '0.000mb'
          }]
        }
      })

      default:
        return {};
    }
  }),
  post: jest.fn((url) => {
    switch (url) {
      case generateNumbers:
        return Promise.resolve({
          data: {
            data: {
              numbers: ['0190909099', '0109090909'],
              name: 'job 1',
              minNumber: '080111111',
              maxNumber: '080909090',
              size: '0.000mb'
            }
          }
        });
      default:
        return {};
    }
  })
};

export default axios;