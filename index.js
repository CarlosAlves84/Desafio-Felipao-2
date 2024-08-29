function calcularRank(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    
    // Inicializa a variável de nível
    let nivel = '';
    
    // Estrutura de decisão para determinar o nível com base nas vitórias
    if (vitorias < 10) {
        nivel = 'Ferro';
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = 'Bronze';
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = 'Prata';
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = 'Ouro';
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = 'Diamante';
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = 'Lendário';
    } else if (vitorias >= 101) {
        nivel = 'Imortal';
    }
    
    // Retorna a mensagem concatenada com o saldo de vitórias e o nível
    return "O Herói tem um saldo de " + saldoVitorias + " vitórias e está no nível " + nivel + ".";
}

// Teste da função
console.log(calcularRank(85, 20));  // Exemplo de saída: "O Herói tem um saldo de 65 vitórias e está no nível Diamante."
