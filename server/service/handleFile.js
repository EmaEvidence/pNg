import fs from 'fs';
import getFileDetails from '../helpers/getFileDetails';

const handleFile = {
  readNumbersFolder: (done) => {
    fs.readdir(`${__dirname}/numbers/completedJobs`, (err, items) => {
      const newItems = items.map((item) => {
        return getFileDetails(item, `${__dirname}/numbers/completedJobs/${item}`);
      });
      done(err, newItems);
    });
  },
  
  writeNumbers: (numbers, done) => {
    const name = Date.now();
    fs.writeFile(`${__dirname}/numbers/completedJobs/${name}_${numbers[0]}_${numbers[numbers.length - 1]}_.txt`,
      numbers, (err, data) => {
        done(err, data,
          `${__dirname}/numbers/completedJobs/${name}_${numbers[0]}_${numbers[numbers.length - 1]}_.txt`);
    });
  },

  writeLargestNumber: (number, done) => {
    fs.writeFile(`${__dirname}/numbers/maxNumber.txt`, number, (err, data) => {
      done(err, data, `${__dirname}/numbers/maxNumber.txt`);
    });
  },

  readlargestNumber: (done) => {
    fs.readFile(`${__dirname}/numbers/maxNumber.txt`, (err, number) => {
      done(err, number);
    });
  },

  getFileSize: (path) => {
    return `${fs.statSync(path).size / 1000000.0}Mb`
  }
}

export default handleFile;