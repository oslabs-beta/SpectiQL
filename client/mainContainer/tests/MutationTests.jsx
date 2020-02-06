const validMutation = (props) => {
  const newTest = `describe('${props.testSuiteName}', () => {
    it('${props.testDescription}', () => {
    const validMutationTest = \`\n${props.writeMutation}\`
    tester.test(true, validMutationTest, ${props.writeInput})
  })`
  return newTest;
}

const invalidMutation = (props) => {
  const newTest = `describe('${props.testSuiteName}', () => {
    it('${props.testDescription}', () => {
    const inValidMutationTest = \`\n${props.writeMutation}\`
    tester.test(false, validMutationTest, ${props.writeInput})
  })`
  return newTest;
}

export {
  validMutation,
  invalidMutation
}