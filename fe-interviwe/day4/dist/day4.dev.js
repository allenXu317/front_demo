"use strict";

//写一个方法把下划线命名转成大驼峰命名
function modifyTheName(str) {
  var res = "";
  var flag = 0;
  str = str.toLowerCase();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = str[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      c = _step.value;

      if (c == "_") {
        flag = 1;
        continue;
      }

      if (flag > 0) {
        c = c.toUpperCase();
        flag = 0;
      }

      res += c;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return res;
}

test = "ttt_aasDDFSdsad_Sadasd";
res = modifyTheName(test);
console.log(res);