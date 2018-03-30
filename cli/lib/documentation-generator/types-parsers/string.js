const { testsParser } = require('./tests-parser');
const commonParser = require('./common');

module.exports = (validation) => {
  const type = validation._type;
  const rules = validation._tests.map(testsParser);
  const commonRules = commonParser(validation);

  return {
    ...commonRules,
    type,
    rules,
  };
};
