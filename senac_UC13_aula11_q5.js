function jogoAdivinhacao() {
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let tentativa;

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
