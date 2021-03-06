/**
 * Given a run-length encoded string as input, reconstructs and returns
 * the original, uncompressed string.
 *
 * @example
 * runLengthDecode('3A4B1C'); // => 'AAABBBBC'
 * runLengthEncode('1M1i2s1i2s1i2p1i'); // => 'Mississippi'
 *
 * @param {string} input - A run-length encoded string
 * @returns {string} The original, uncompressed string
 */

function runLengthDecode(input) {
  // This is your job. :)
  // Remember, if the code is stumping you, take a step back and
  // make sure you can do it by hand.
  let RLDString = '';
  let characterCount = '';

  for (let i = 0; i <= input.length; i += 1) {
    if (isNaN(input[i])) {
      // console.log(isNaN(input[i]));
      for (let j = 1; j <= parseInt(characterCount); j += 1) {
        RLDString += input[i];
      }
    } else {
      characterCount += input[i];
    }
  }
  console.log(RLDString);
  return RLDString;
}

let runLengthEncode = require('../runLengthEncode/runLengthEncode');

if (require.main === module) {
  console.log('Running sanity checks for runLengthDecode:');

  // Add your own test inputs
  let testInputs = ['A', 'AB', 'Mississippi', 'WWWWWWAAAAAAWWWWWWAAAAAABBBBBB'];

  for (let input of testInputs) {
    console.log(runLengthDecode(runLengthEncode(input)) === input);
  }
}

module.exports = runLengthDecode;
