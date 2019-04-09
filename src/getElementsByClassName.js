// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here

  var output = [];

  var helper = function (element) {
    if (element.classList !== undefined) {
      for (var i = 0; i < element.classList.length; i++) {
        if (element.classList[i] === className) {
          output.push(element);
        }
      }
      if (element.childNodes !== undefined) {
        for (var i = 0; i < element.childNodes.length; i++) {
          helper(element.childNodes[i]);
        }
      }
    }
  }

  helper(document.body);

  return output;
};

