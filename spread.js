// Spread with arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const combined = arr1.concat(arr2);
console.log("Combined: " + combined);

// Spread with objects 
const obj1 = { name: "Sulaimon", level: "200" };
const obj2 = { course: "BU-COS 209" };
const student = Object.assign({}, obj1, obj2);
console.log("Student: " + JSON.stringify(student));
