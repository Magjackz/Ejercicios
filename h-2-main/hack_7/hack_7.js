/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

let arr2 = arr.map(val => val[0].toUpperCase()+ val.slice(1))

console.log(arr2)
//export result
module.exports = result;