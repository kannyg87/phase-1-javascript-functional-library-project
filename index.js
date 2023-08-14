function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else if (typeof collection === 'object' && collection !== null) {
    for (const key in collection) {
      if (collection.hasOwnProperty(key)) {
        callback(collection[key]);
      }
    }
  }
  return collection;
}

function myMap(collection, callback) {
  const result = [];

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      result.push(callback(collection[i], i));
    }
  } else if (typeof collection === 'object' && collection !== null) {
    for (const key in collection) {
      if (collection.hasOwnProperty(key)) {
        result.push(callback(collection[key], key));
      }
    }
  }
  return result;
}

function myReduce(collection, callback, acc) {
  let startIdx = 0;

  if (typeof acc === 'undefined') {
    acc = collection[startIdx];
    startIdx = 1;
  }

  if (Array.isArray(collection)) {
    for (let i = startIdx; i < collection.length; i++) {
      acc = callback(acc, collection[i], collection);
    }
  } else if (typeof collection === 'object' && collection !== null) {
    for (const key in collection) {
      if (collection.hasOwnProperty(key)) {
        acc = callback(acc, collection[key], key, collection);
      }
    }
  }

  return acc;
}


function myFind(collection, predicate) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
  } else if (typeof collection === 'object' && collection !== null) {
    for (const key in collection) {
      if (collection.hasOwnProperty(key) && predicate(collection[key])) {
        return collection[key];
      }
    }
  }
  return undefined;
}


function myFilter(collection, predicate) {
  const result =[]
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        result.push(collection[i]);
      }
    }
  } else if (typeof collection === 'object' && collection !== null) {
    for (const key in collection) {
      if (collection.hasOwnProperty(key) && predicate(collection[key])) {
        result.push(collection[key]);
      }
    }
  }
  return result;
}
// Object.keys(myObj).length;

function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length
  } else if (typeof collection === 'object' && collection !== null) {
    return Object.keys(collection).length;
  }
  return result;
}

function myFirst(array, n) {
  if (typeof n === 'undefined') {
    return array[0];
  } else {
    return array.slice(0, n);
  }
}

function myLast(array, n) {
  if (typeof n === 'undefined') {
    return array[array.length - 1];
  } else {
    return array.slice(-n);
  }
}

function myKeys(object){
  return Object.keys(object);
}

function myValues(object){
  return Object.values(object);
}

