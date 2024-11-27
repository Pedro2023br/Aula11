function calcularMediaAlunos() {
    const alunos = [
        [8, 7.5, 9],
        [6, 5, 8],
        [10, 9, 9.5]
    ];

    for (let i = 0; i < alunos.length; i++) {
        const notas = alunos[i];
        let soma = 0;

        for (let j = 0; j < notas.length; j++) {
            soma += notas[j];
        }

        const media = soma / notas.length;
        console.log(`Aluno ${i + 1}: Média = ${media.toFixed(2)}`);
    }
}

calcularMediaAlunos();
