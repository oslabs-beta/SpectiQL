const extension = ({ context }) => {
  const runTimeResult = Date.now() - context.startTime
  return {
    runTime: runTimeResult
  }
}

module.exports = extension
