function compareJSON(json1, json2) {
    const keys1 = Object.keys(json1);
    const keys2 = Object.keys(json2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (let key of keys1) {
      if (!json2.hasOwnProperty(key) || json1[key] !== json2[key]) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage
  const json1 = {
    "name": "John",
    "age": 30,
    "city": "New York"
  };
   
  const json2 = {
    "city": "New York",
    "name": "John",
    "age": 30
  };
  console.log(compareJSON(json1, json2)); // Output: true  