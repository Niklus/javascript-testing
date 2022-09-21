const {
  generateText,
  validateText,
  validateAndReturn,
} = require('../textValidation.js');

// Unit Test: generateText
describe("generateText", () => {
  it('Outputs dogName and breed', () => {
    // Assertions
    expect(generateText('Rex', 'Labrador')).toBe('Rex is a Labrador');
  });

  it("Should return a string", ()=> {
    expect(typeof generateText('Rex', 'Labrador')).toBe('string');
  });
});

// Unit Test: validateText
describe('validateText', () => {
  it('Should output true when given a string input', () => {
    expect(validateText('Rex')).toBe(true);
  });

  it('Should yield false when given a number', () => {
    expect(validateText(5)).toBe(false);
  });

  it("Should return a boolean", ()=> {
    expect(typeof validateText('Rex')).toBe("boolean");
    expect(typeof validateText(5)).toBe("boolean");
  });
});


// Integration Test: validateAndReturn
// This is an Integration test coz it depends on two functions
describe("validateAndReturn", () => {
  it("outputs gogName and breed", () => {
    expect(validateAndReturn('Rex', 'Labrador')).toBe('Rex is a Labrador');
  });

  it("Should return text not valid when given a number", () => {
    expect(validateAndReturn(1, 5)).toBe("Text not valid");
  });

  it("Should return a string", ()=> {
    expect(typeof validateAndReturn('Rex', 'Labrador')).toBe('string');
    expect(typeof validateAndReturn(1, 5)).toBe('string');
  });
});