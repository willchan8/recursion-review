// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// var stringifyJSON = function(obj) {
//   // your code goes here
//   if (Array.isArray(obj)) {
//     if (obj.length !== 0) {
//       if (typeof obj[0] === "string") {
//         return '[' + '"' + obj[0] + '"' + ']';
//       } else {
//         return '[' + obj[0] + ']';
//       }
//       // var results = [];

//       // return '[' + results.join(',') + ']';

//     } else {
//       return '[]';
//     }
//   }
  
//   if (typeof obj === "string") {
//     return '"' + obj + '"';
//   } else {
//     return '' + obj;
//   }
  
//   return results;
  
// };

var stringifyJSON = function(obj) {
  // your code goes here
  if (Array.isArray(obj)) {
    if (obj.length !== 0) {
      // for loop (var i etc. etc.)
      var results = [];
      for (var i = 0; i < obj.length; i++) {
        results.push(stringifyJSON(obj[i]));
      }

    return '[' + results.join(',') + ']';

    } else {
      return '[]';
    }
  }
  
  if (typeof obj === "string") {
    return '"' + obj + '"';
  } else {
    return '' + obj;
  }
  
    if (Object.keys(obj).length === 0) {
    return '{}';
  }
  
};

// results.push(stringifyJSON(obj[i]));

// return '[' + results.join(',') + ']';