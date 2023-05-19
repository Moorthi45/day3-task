function compareJSON(obj1 , obj2) {
    const keys1 = Object.keys(obj1 );
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (let key of keys1) {
      if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
        return false;
      }
    }
  
    return true;
  }
  
  
  const obj1 = {
    "name": "person 1",
    "age": 5,
    
  };
   
  const obj2 = {
       "age": 5,
    "name": "person 1"
    
  };
  console.log(compareJSON(obj1, obj2)); 
