/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * contar el total de items que inicien con el caracter "b"
 *  
 * 
 * output => 2   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = 0;


let arr2 = arr.filter((arr) => arr.startsWith('b'))


console.log(arr2.length)

//export result
module.exports = result;