const validQuery = (props) =>{
  // console.log(props);
  const newTest = `describe('${props.testSuiteName}', () => {
    it('${props.testDescription}', () => {
    const validQueryTest = \`\n${props.writeTest}\`
    tester.test(true, validQueryTest)
  })`;
  return newTest;
};

const invalidQuery = props => {
  const newTest = `describe('${props.testSuiteName}', () => {
    it('${props.testDescription}', () => {
    const invalidQueryTest = \`${props.writeTest}\`
    tester.test(false, invalidQueryTest)
  })`;
  return newTest;
};

const validArgField = props => {
  const newTest = `describe('${props.testSuiteName}', () => {
    it('${props.testDescription}', () => {
    const validArgFieldTest = \`${props.writeTest}\`
    tester.test(true, validArgFieldTest)
  })`;
  return newTest;
};

const invalidArgField = props => {
  const newTest = `describe('${props.testSuiteName}', () => {
    it('${props.testDescription}', () => {
    const invalidArgFieldTest = \`${props.writeTest}\`
    tester.test(false, invalidArgFieldTest)
  })`;
  return newTest;
};

const validArgDataType = props => {
  const newTest = `describe('${props.testSuiteName}', () => {
    it('${props.testDescription}', () => {
    const validArgValueTypeTest = \`${props.writeTest}\`
    tester.test(true, validArgValueTypeTest)
  })`;
  return newTest;
};

const invalidArgDataType = props => {
  const newTest = `describe('${props.testSuiteName}', () => {
    it('${props.testDescription}', () => {
    const invalidArgValueTypeTest = \`${props.writeTest}\`
    tester.test(false, invalidArgValueTypeTest)
  })`;
  return newTest;
};
const validMutationInput = (props) => {
  const newTest = `describe('${props.testSuiteName}', () => {
    it('${props.testDescription}', () => {
    const validMutationTest = \`\n${props.writeTest}\`
    tester.test(true, validMutationTest, ${props.writeInput})
  })`
  return newTest;
}

const invalidMutationInput = (props) => {
  const newTest = `describe('${props.testSuiteName}', () => {
    it('${props.testDescription}', () => {
    const invalidMutationTest = \`\n${props.writeTest}\`
    tester.test(false, validMutationTest, ${props.writeInput})
  })`
  return newTest;
}

const validMutationDataType = (props) => {
  const newTest = `describe('${props.testSuiteName}', () => {
    it('${props.testDescription}', () => {
    const validMutationDataType = \`\n${props.writeTest}\`
    tester.test(true, validMutationDataType, ${props.writeInput})
  })`
  return newTest;
}

const invalidMutationDataType= (props) => {
  const newTest = `describe('${props.testSuiteName}', () => {
    it('${props.testDescription}', () =>{
      let error;
      try{
        const invalidMutationDataType = \`\n${props.writeTest}\`
        tester.mock(invalidMutationDataType, ${props.writeInput})
      } catch(err){
        error=err;
      }
      expect(error).toBeInstanceOf(Error);
    })
  })
  `
  return newTest;
}


export  {
    validQuery,
    invalidQuery,
    validArgField,
    invalidArgField,
    validArgDataType,
    invalidArgDataType,
    validMutationInput,
    invalidMutationInput,
    validMutationDataType,
    invalidMutationDataType
};
