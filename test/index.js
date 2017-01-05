'use strict'

const assert = require('assert');
const indexOf = require('../lib/indexOf');


describe('indexOf()', function() {
  describe('As function', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, indexOf(4, [1,2,3]));
    });
    it('should return 3 checking the value of the string', function() {
      assert.equal(2, indexOf(3, ['1','2',3,4, 'hola']));
    });
    it('should return 4 finding the beginning of the substring', function() {
      assert.equal(4, indexOf('caracola', 'holacaracola'));
    });
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, indexOf(4, [1,2,3]));
    });
    it('should return -1 because the value is empty', function() {
      assert.equal(-1, indexOf(undefined, [1,2,3]));
    });
    it('should return -1 because indexOf is case sensitive', function() {
      assert.equal(-1, indexOf('Hola', 'h'));
    });
  });

  describe('Overriding the prototype', function() {
    Array.prototype.indexOf = indexOf;
    String.prototype.indexOf = indexOf;
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
    it('should return 3 checking the value of the string', function() {
      assert.equal(2, ['1','2',3,4, 'hola'].indexOf(3));
    });
    it('should return 4 finding the beginning of the substring', function() {
      assert.equal(4, 'holacaracola'.indexOf('caracola'));
    });
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
    it('should return -1 because the value is empty', function() {
      assert.equal(-1, [1,2,3].indexOf());
    });
    it('should return -1 because indexOf is case sensitive', function() {
      assert.equal(-1, 'Hola'.indexOf('h'));
    });
  });
});