const generateText = (dogName, breed) => {
  return `${dogName} is a ${breed}`;
};

const validateText = (text) => {
  if (!text && !!text.trim().length) {
    //removes whitespace from both sides of a string.
    return false;
  }
  if (typeof text === 'number') {
    return false;
  }

  return true;
};

const validateAndReturn = (dogText, breed) => {
  if (!validateText(dogText) || !validateText(breed)) {
    return 'Text not valid';
  }
  return generateText(dogText, breed);
};

module.exports = { generateText, validateText, validateAndReturn };
