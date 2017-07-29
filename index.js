const NUMBER = 11;
const FACTOR_1 = [1, 2, 3, 4, 5, 6, 7, 0];
const FACTOR_2 = [7, 1, 2, 3, 4, 5, 6, 0];

/**
 * Multiplies number by million
 * @param {Number} n
 */
const getMillions = n => n * 1000000;

/**
 *  Splits number into array of numbers
 * @param {Number} n
 * @returns {Array<Number>}
 */
const splitNumber = n => String(n).split('').map(parseFloat);

/**
 * Returns correct factor for a given code
 * @param {String||Number} code EDRPOU Code
 * @returns {Array<Numbers>}
 */
const getCoFactor = (code) => {
  const value = parseFloat(code);
  return (value < getMillions(30) || value > getMillions(60)) ? FACTOR_1: FACTOR_2;
}

/**
 * Recursive approach to dechifer EDRPOU Code
 * @param {String|Number} code EDRPOU Code
 * @param {Number} x Additional code to dechifer Complex EDRPOU Code
 */
const approach = (code, x = 0) => {
  const factor = getCoFactor(code);
  const result = splitNumber(code)
      .map((n, i) => n * (factor[i] + x))
      .reduce((s, n) => s + n, 0) % NUMBER;

  return (result > 10) ? approach(code, 2) : result;
}

/**
 * Validates the EDRPOU Code
 * In order to validate dechiphered number should be last of EDRPOU Code
 * @param {*} code
 * @returns {Boolean}
 */
const validate = (code) => splitNumber(code).pop() === approach(code);

module.exports = validate;