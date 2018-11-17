import generateNumbers from '../service/generateNumbers';
import handleResponse from '../helpers/handleResponse';
import handleFile from '../service/handleFile';

const phoneNumber = {
  generate: async (req, res) => {
    handleFile.readlargestNumber((err, number) => {
      const largestNumber = number.toString();
      if (err) {
        return handleResponse(res, 500, 'Error reading previous largest number', []);
      } else {
        const lastNumber = (largestNumber !== '') ? largestNumber : 100000000;
        generateNumbers(lastNumber, (numbers) => {
          handleFile.writeNumbers(numbers, (err, data, filePath, name) => {
            if (err) {
              return handleResponse(res, 500, 'Error writing Numbers', []);
            }
            handleFile.writeLargestNumber(numbers[numbers.length - 1], (err, data) => {
              if (!err) {
                return handleResponse(res, 201, 'Numbers Created', {
                  numbers,
                  filePath,
                  size: handleFile.getFileSize(filePath),
                  minNumber: numbers[0],
                  maxNumber: numbers[numbers.length - 1],
                  name: `${name.split('_')[0]}${name.split('_')[3]}`
                });
              }
            })
          });
        });
      }
    });
  },

  read: (req, res) => {
    handleFile.readNumbersFolder((err, items) => {
      if (err || items.length === 0) {
        return handleResponse(res, 500, 'Error loading completed Jobs', []);
      } else {
        return handleResponse(res, 200, 'Completed Job loaded sucessfully', items);
      }
    })
    return res;
  },

  readAll: (req, res) => {
    handleFile.readAll((err, numbers) => {
      if (!err) {
        return handleResponse(res, 200, 'Numbers loaded sucessfully', {
          numbers: numbers.toString().split(',')
        });
      }
      return handleResponse(res, 500, 'Error loading Numbers', []);
    });
  }

}

export default phoneNumber;
