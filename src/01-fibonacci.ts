

function gerarFibonacci(quantidade: number): number[] {
    if(quantidade < 0) {
        throw new Error("A quantidade não pode ser negativa");
    }

    if(!Number.isInteger(quantidade)){
        throw new Error("A quantidade tem que ser um número inteiro");
    }

    if(quantidade === 0) {
        return [];
    } 
    
    if(quantidade === 1) {
        return [0];
    } 
    const sequencia: number[] = [0, 1];

    for(let i = 2; i < quantidade; i++) {
      const soma = sequencia[i - 1]! + sequencia[i - 2]!;
      sequencia.push(soma);
    }

    return sequencia;
}
const quantidade = 10;
const resultado = gerarFibonacci(quantidade);

console.log(`Fibonacci com ${quantidade} elementos:`);
console.log(resultado);
