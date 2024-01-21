function formatLyrics() {
    // Obter a letra da música da primeira caixa de texto
    let inputTextarea = document.getElementById('inputText');
    let lyrics = inputTextarea.value.trim();

    // Verificar se a caixa de texto está vazia
    if (lyrics === '') {
        inputTextarea.classList.add('error');
        showAlert('Por favor, insira a letra da música.');
        return;
    } else {
        inputTextarea.classList.remove('error');
    }

    try {
        // Dividir a letra em linhas
        let lines = lyrics.split('\n');

        // Variável para armazenar a letra formatada
        let formattedLyrics = '';

        // Percorrer as linhas
        for (let i = 0; i < lines.length; i += 2) {
            // Adicionar duas linhas à letra formatada
            formattedLyrics += lines[i] + '\n';
            if (i + 1 < lines.length) {
                formattedLyrics += lines[i + 1] + '\n';
            }

            // Se o número total de linhas for ímpar, deixar a última linha sozinha
            if (i + 2 === lines.length - 1) {
                formattedLyrics += lines[i + 2] + '\n';
            }

            // Adicionar uma linha em branco, exceto após a última linha
            if (i + 2 < lines.length) {
                formattedLyrics += '\n';
            }
        }
        document.getElementById('outputText').value = formattedLyrics;
    } catch (error) {
        showAlert('Ocorreu um erro ao formatar a letra: ' + error.message);
    }
}

function showAlert(message) {
    document.getElementById('alertMessage').innerText = message;
    document.getElementById('alertModal').style.display = 'block';
}

function closeAlert() {
    document.getElementById('alertModal').style.display = 'none';
}
function clearText() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
}

function copyResult() {
    let outputText = document.getElementById('outputText');
    outputText.select(); // Seleciona o texto
    document.execCommand('copy'); // Executa o comando de cópia

    // Deseleciona o texto se necessário
    outputText.setSelectionRange(0, 0);

    // Mostra uma mensagem ao usuário
    showAlert('Texto copiado!');
}

document.getElementById('inputText').addEventListener('input', function () {
    this.classList.remove('error');
});
