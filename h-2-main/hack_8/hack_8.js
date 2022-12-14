/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];


let arr2 = arr.map(val => val[0] + val[1].replace("a","@") + val.slice(2))

let arr3 = arr2
arr3.splice(3,1,"QUX")

console.log(arr3.splice(1,3))

//export result
module.exports = result;