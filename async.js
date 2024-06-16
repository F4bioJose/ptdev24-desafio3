const fs = require('fs').promises

async function readFile() {
    try {
        const data = await fs.readFile('textFile.txt', 'utf8');
        let words = 0 
        if(data !== ''){
            const wordArray = data.trim().split(/\s+/)
            words = wordArray.length
            console.log("Aguarde a leitura do texto...")
            return words
            
        } else{
            console.log('O arquivo está vazio')
            return 0
        }
    
        
    }
    catch (err) {
        console.log("Erro: Não foi possível realizar a leitura")
        }
    }

async function showWordsCount() {
    try {
        const numWords = await readFile();
        console.log('Total de palavras presentes no texto:', numWords)
    }
    catch(err){
        console.log(err)
    }
}

showWordsCount()
