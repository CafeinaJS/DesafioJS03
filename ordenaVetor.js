const numeros = [20, 100, 45, 11, 19, 25, 211, 9, 219];
const numInt = new Int16Array([20, 100, 45, 11, 19, 25, 211, 9, 219]);

function ordenaDecrescente(vetor) {
    vetor.sort((a, b) => (b - a));
    return vetor;
}

function ordenaNumerosDecrescente(vetor){
    vetor.sort();
    vetor.reverse();
    return vetor;
}

console.log(ordenaDecrescente(numeros).join(", "));
console.log(ordenaNumerosDecrescente(numInt).join(", "));