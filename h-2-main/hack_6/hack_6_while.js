/**
 * mediante el while for iterar cada una de las letras del string "fooziman"
 * debes anexar los caracteres de string al array result
 * ["f","o","o","z","i","m","a","n"] 
 *
 *
 * output => ["f","o","o","z","i","m","a","n"]
 */

let str = "fooziman";
let result = [];

let limite = str.split("")
let salida = 0

  do{
    console.log(str[salida] && limite)
        
    salida++
    
  }while(salida < limite)

//export result

/*
let output = 0;
let limite = str.length;

while(output < limite){
result.push(str[output])
output++
}
}*/