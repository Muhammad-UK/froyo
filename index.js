const strFlavor = prompt(
  "Please enter a list of comma-separated froyo flavors: "
);

// making use of a property we havent seen from class '.split', from what I understand, it 'splits' a single string into multiple within an array
let arrFlavor = strFlavor.split(",");
//const objFlavors = {};

function objected(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = 1 + obj[arr[i]] || 1; // this code works, but I do not completely understand how it does, mostly, how is the value of each key is being adjusted in this syntax?
  }
  return obj;
}

console.log(objected(arrFlavor));
console.log(strFlavor);
console.log(arrFlavor);
