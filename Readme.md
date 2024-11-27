
# Exercícios de JavaScript - Arrays e Estruturas de Repetição

## Questão 1: Gerenciar Lista de Tarefas
```javascript
/**
 * Gerencia uma lista de tarefas: adiciona tarefas, remove a última e exibe o resultado.
 *
 * @returns {void} Não retorna valor, apenas exibe o array de tarefas no console.
 */
function gerenciarTarefas() {
    // Cria um array vazio chamado tarefas
    const tarefas = [];

    // Adiciona três tarefas ao array
    tarefas.push("Comprar pão");
    tarefas.push("Estudar JavaScript");
    tarefas.push("Fazer exercícios físicos");

    // Remove a última tarefa adicionada
    tarefas.pop();

    // Exibe o array final no console
    console.log(tarefas);
}

gerenciarTarefas();
```

---

## Questão 2: Gerenciar Estoque
```javascript
/**
 * Gerencia um estoque: atualiza um item e exibe o número total de itens.
 *
 * @returns {void} Não retorna valor, apenas exibe informações no console.
 */
function gerenciarEstoque() {
    // Cria um array estoque com 4 itens iniciais
    const estoque = ["Camiseta", "Calça", "Sapato", "Chapéu"];

    // Atualiza o segundo item no array
    estoque[1] = "Bermuda";

    // Exibe o número total de itens no estoque
    console.log(estoque.length);
}

gerenciarEstoque();
```

---

## Questão 3: Calcular Média dos Alunos
```javascript
/**
 * Calcula e exibe a média das notas de cada aluno.
 *
 * @returns {void} Não retorna valor, apenas exibe as médias no console.
 */
function calcularMediaAlunos() {
    // Cria um array onde cada elemento é um array contendo as notas de um aluno
    const alunos = [
        [8, 7.5, 9],
        [6, 5, 8],
        [10, 9, 9.5]
    ];

    // Usa um loop aninhado para calcular a média das notas de cada aluno
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
```

---

## Questão 4: Exibir Palavras em Ordem Reversa
```javascript
/**
 * Exibe as palavras de um array em ordem reversa.
 *
 * @param {string[]} palavras - Array de palavras a ser exibido em ordem reversa.
 * @returns {void} Não retorna valor, apenas exibe as palavras no console.
 */
function exibirPalavrasReverso(palavras) {
    // Usa um loop for reverso para exibir cada palavra
    for (let i = palavras.length - 1; i >= 0; i--) {
        console.log(palavras[i]);
    }
}

exibirPalavrasReverso(["café", "livro", "código", "javascript", "aprendizado"]);
```

---

## Questão 5: Jogo de Adivinhação
```javascript
/**
 * Jogo de adivinhação: o usuário tenta adivinhar um número entre 1 e 10.
 *
 * @returns {void} Não retorna valor, apenas interage com o usuário.
 */
function jogoAdivinhacao() {
    // Gera um número aleatório entre 1 e 10
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let tentativa;

    // Loop para continuar pedindo números até o usuário acertar ou digitar "sair"
    while (true) {
        tentativa = prompt("Adivinhe o número entre 1 e 10 (ou digite 'sair' para encerrar):");

        if (tentativa.toLowerCase() === "sair") {
            console.log("Você saiu do jogo.");
            break;
        }

        tentativa = Number(tentativa);

        if (tentativa === numeroSecreto) {
            console.log("Parabéns! Você acertou o número.");
            break;
        } else {
            console.log("Tente novamente.");
        }
    }
}

jogoAdivinhacao();
```
