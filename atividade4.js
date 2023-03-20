function numerosRandons (){
    var numero = Math.floor(Math.random()*20) + 1; 
    if (numero === 13 || numero || 7 || numero === 9){
        console.log("Caiu na primeira condicao");
    }else{
        console.log("o numero gerado e igual a :"+ numero);
    }
}
numerosRandons()
console.log(numerosRandons)
