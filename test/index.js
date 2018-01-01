/* global describe, it */
require('should')

const isProtoless = require('../src')

describe('module', () => {
  it('should return false for relative urls', () => {
    isProtoless('./assets/icon.png').should.eql(true)
  })

  it('should return false for // urls', () => {
    isProtoless('//example.com/assets/icon.png').should.eql(true)
  })

  it('should return true for absolute urls', () => {
    isProtoless('http://example.com/assets/icon.png').should.eql(false)
  })
})
