/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];

let numero = [9,7,5,3];
 
    let restaNumero = numero.map(function(x)  {
    return x - 2; 
});

console.log(restaNumero);
//export result
module.exports = result;