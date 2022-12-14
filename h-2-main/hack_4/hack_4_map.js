/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];

let numero = [ -1,1,3,5];
    let sumaNumero = numero.map(function(x)  {
        return x + 2; 
    });
    
console.log(sumaNumero);
//export result
module.exports = result;





/*const Numero = [1];
    const SumaNumero = Numero.map(x => + 2) 
        return x => + 2;
    


console.log(return);
*/