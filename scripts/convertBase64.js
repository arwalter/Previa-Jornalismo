//Rodar com nodeJS
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Caminho do arquivo
const filePath = path.join('C:\\Users\\arwalter\\Downloads\\L-GCO.png');

// Ler a imagem e converter para Base64
fs.readFile(filePath, (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }
    
    const base64String = data.toString('base64');
    
    // Copia o texto para a área de transferência
    execSync(`echo ${base64String} | clip`);
    console.log('Base64 copiado para a área de transferência!');
});

