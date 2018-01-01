const url = require('url')

/**
 * Returns if a url does not have a protocol, while still representing a path.
 * @param {string} tUrl - the url to test
 *
 * @example
 * const isProtoless = require('url-is-protoless')
 * console.log(isProtoless('./assets/icon.png')) // true
 * console.log(isProtoless('http://example.com/assets/icon.png')) // false
 * console.log(isProtoless('//example.com/assets/icon.png')) // true
 *
 * @returns {boolean} whether the url is without a protocol
 */
function isProtoless (tUrl) {
  const parsed = url.parse(tUrl)
  return !parsed.protocol && !!parsed.pathname
}

module.exports = isProtoless
