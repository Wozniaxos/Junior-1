const alphanumericString = string => {
  const odds = [];
  const evens = [];
  const lowerCase = [];
  const upperCase = [];


  for (let i = 0 ; i < string.length ; i++) {
    const sign = string[i];

    if (parseInt(sign)) {
      sign % 2 === 0 ? evens.push(sign) : odds.push(sign)
    } else if (sign.toUpperCase() === sign) {
      upperCase.push(sign);
    } else {
      lowerCase.push(sign);
    }
  }

  return [lowerCase, upperCase, evens, odds].reduce((acc, next) =>
    [...acc, ...next.sort()], []).join('')
}

const stringFormat = (string, ...args) => {
  args.forEach((argument, index) => string = string.replace(`{${index}}`, argument));
  return string;
}

const longestWords = string => {
  return string.split(' ').reduce((acc, next) => {
    const wordAlreadyExists = acc.filter(word => word.toLowerCase() === next.toLowerCase()).length;
    const newWordWithSameMaxLength = !wordAlreadyExists && acc[0].length === next.length;
    const newHighestLengthWord = acc[0].length < next.length;

    if (newWordWithSameMaxLength) {
      return [...acc, next];
    } 
    if (newHighestLengthWord) {
      return [next];
    }
    return acc;
  }, ['']);
}

module.exports = {
  alphanumericString,
  stringFormat,
  longestWords
}