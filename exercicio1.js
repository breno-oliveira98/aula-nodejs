// function parOuImpar(n) {
//     if(n % 2 == 0) {
//         return n + " É Par"
//     } else {
//         return n + " É Impar"
//     }
    
// }

// console.log(parOuImpar(2));

function valorCobrado(largura, altura) {
    const valorMetroQuadrado = 10
    const valorCobrado = (largura * altura) * valorMetroQuadrado;
    return valorCobrado;
}

console.log(valorCobrado(10, 2.5));
