'use strict'

function indexOf (searchValue, value) {
  if (!value) value = this;
  if (!value || value.length <= 0 || !searchValue) return -1;
  for (var i = 0; i < value.length; i++) {
    if (value[i] == searchValue || value.slice(i, i + searchValue.length) == searchValue) {
      return i;
    }
  }
  return -1;
}

module.exports = indexOf
