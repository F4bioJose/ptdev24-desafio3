const fs = require('fs');

function readFile() {
    fs.readFile('textFile.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivo:', err);
            return;
        }

        let words = 0;
        if (data !== '') {
            const wordArray = data.trim().split(/\s+/);
            words = wordArray.length;
            console.log("Aguarde a leitura do texto...");
        } else {
            console.log('O arquivo está vazio');
        }

        showWordsCount(words);
    });
}

function showWordsCount(words) {
    console.log("Total de palavras presentes no texto:", words);
}

readFile();
