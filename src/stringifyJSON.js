var stringifyJSON = function(obj) {
  // your code goes here
  
  if (obj === null) {
    return 'null';
  }

  if (Array.isArray(obj)) {
    if (obj.length) {
      var results = [];
      for (var i = 0; i < obj.length; i++) {
        results.push(stringifyJSON(obj[i]));
      }
      return '[' + results.join(',') + ']';
    } else {
      return '[]';
    }
  }
  
  if (typeof obj === "object") {
    
    if (Object.keys(obj)) {
      var results = [];
      for (var keys in obj) {
        if (typeof obj[keys] === "undefined" || typeof obj[keys] === "function") {
          return '{}';
        }
        var property = stringifyJSON(keys) + ':' + stringifyJSON(obj[keys]);
        results.push(property);
      }
      return '{' + results.join(',') + '}';
    }
    if (obj !== null) {
      return '{}';
    }
  }
  
  if (typeof obj === "string") {
    return '"' + obj + '"';
  } else {
    return '' + obj;
  }
  
};

stringifyJSON([]);