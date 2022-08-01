// enum stores constants; duplicate value is not allowed here.

// enum types: numeric, string, heterogenous

// numeric enum

enum RequestType {
  readData,
  saveData,
  deleteData,
}

console.log(RequestType);
console.log(RequestType.readData);

// string enum
enum RequestType2 {
  readData = `READ_DATA`,
  deleteData = `DELETE_DATA`,
}

// console.log(RequestType2.deleteData);
console.log(RequestType2[`deleteData`]);

// heterogenous enum
enum RequestType3 {
  readData = `READ_DATA`,
  deleteData = `DELETE_DATA`,
  id = 101,
}

console.log(RequestType3);
