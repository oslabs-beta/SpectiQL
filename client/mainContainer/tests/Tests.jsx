

import React from "react";

const validArgumentTest = props => {
  // console.log(props);
  const newTest = `describe('${props.testSuiteName}', () => {
    it('${props.testDescription}', () => {
    const validArgTest = \`${props.writeQuery}\`
    tester.test(true, validArgTest)
  })`
  console.log(newTest);
  return newTest
};

export default validArgumentTest;

