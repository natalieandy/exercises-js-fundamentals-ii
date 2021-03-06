/**
 * Given a string that doesn't contain any numbers, returns a run-length
 * encoded copy of the input string.
 *
 * We're exluding numbers to avoid ambiguity. A string like '112211' would
 * be encoded as encoded as '212221', which could also mean twenty-one 2s
 * followed by twenty-two 1s.
 *
 * There are ways around this, but focus first on getting a version that
 * works strings that doesn't contain numbers.
 *
 *
 * @example
 * runLengthEncode('A'); // => '1A'
 * runLengthEncode('AB'); // => '1A1B'
 * runLengthEncode('Mississippi'); // => '1M1i2s1i2s1i2p1i'
 * runLengthEncode('WWWWWWAAAAAAWWWWWWAAAAAABBBBBB'); // => '6W6A6W6A6B'
 *
 * @param {string} input - A string that doesn't contain numbers
 * @returns {string} A run-length encoded copy of the input string
 */

function runLengthEncode(input) {
  // This is your job. :)
  // Remember, if the code is stumping you, take a step back and
  // make sure you can do it by hand.
  let RLEString = '';
  let counter = 1;

  for (let i = 0; i <= input.length; i += 1) {
    let currentLetter = input[i];
    let nextLetter = input[i + 1];
    if (nextLetter === currentLetter) {
      counter += 1;
      // console.log(counter);
    } else {
      RLEString += counter + currentLetter;
      counter = 1;
    }
  }
  // console.log(RLEString);
  return RLEString;
}

if (require.main === module) {
  console.log('Running sanity checks for runLengthEncode:');

  console.log(runLengthEncode('A') === '1A');
  console.log(runLengthEncode('AB') === '1A1B');
  console.log(runLengthEncode('Mississippi') === '1M1i2s1i2s1i2p1i');

  console.log(runLengthEncode('WWWWWWAAAAAAWWWWWWAAAAAABBBBBB') === '6W6A6W6A6B');
}

module.exports = runLengthEncode;
