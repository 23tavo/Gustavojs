const obtenerMenor = (numeros) =>{ //numeros es el parametro,el argumento
    let menor = Infinity;// es una varible reservada del lenguaje infinity
    for (let i = 0; i<numeros.length; i++){// length longitud
        if(numeros [i] <= menor){
            menor = numeros[i];
        }  //numero menor
    }
    return (menor);
}
console.log(obtenerMenor([3,8,6,9,1]));


const sumaNumeros = (numero) =>{
    let final = "";
    for (let i = 0;i <numero.length; i++){
       final = parseInt(final + numero[i])
    }
    return (final);
}
console.log(sumaNumeros([2,5,2,5]));

const contieneIndice = (numero,numeros) =>{
    for(let i=0;i<numeros.length; i++){
        if(numeros[i] === numero){//estrictamente igual
            return true;
        }
    }
    return false;
}
console.log(contieneIndice(34,[5,6,9,3,8,34]));//true
console.log(contieneIndice(4,[5,6,9,3,8,34]));//false

const separar = (string) =>{
     const arrayEmoji = string.sort().reverse();//sort es para ordenar,reverse para tomar el primer elemento y asi mostrar
     return arrayEmoji;

}
console.log(separar(['💀','👺','💀','👺','💀','👺','💀']));

const estanJuntos = (personajes) =>{
    const frodo =personajes.indexOf('Frodo');
    const sam =personajes.indexOf('Sam');
    return sam - frodo === 1||  sam - frodo === -1;//busca la posiscion
}

console.log(estanJuntos(['Sam','Frodo','Legolas']));
console.log(estanJuntos(['Legolas','Sam','Frodoh']));
console.log(estanJuntos(['Sam','Legolas','Frodo']));


const obtenerIndice = (valor,arr) =>{
   const indice = arr.indexOf(valor); 
   return indice;
}
console.log(obtenerIndice(5,[58,57,5,12]));
console.log(obtenerIndice(1,[5,57,5,12]));

const repetir = (valor,num) =>{
    let array = [];
    for(let i=0;i<num;i++){
       array.push(valor);
    }
    return (array);
}
console.log(repetir('gustavo',3));
console.log(repetir('cesar',6));
console.log(repetir('mono',4));
