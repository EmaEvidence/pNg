const generateNumbers = (lastnumber, done) => {
  const parsedNumber = parseInt(lastnumber, 10);
  const numbers = new Set();
  let count = 0;
  while (numbers.size < 9999 || count > 100000) {
    const number = Math.round(Math.random()
      * ((parsedNumber + 100000) - parsedNumber) + parsedNumber);
    if (number.toString().length === 9) {
      numbers.add(`0${number}`);
    }
    count +=1
  }
  done(Array.from(numbers).sort());
}

export default generateNumbers;
