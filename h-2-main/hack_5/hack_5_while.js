/**
 * mediante el loop while agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];

let z = 7;

while(z>=1){
    result.push(z)
    z-=2;
}
console.log(result)
//export result
module.exports = result;