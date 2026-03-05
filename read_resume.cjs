const fs = require('fs');
const pdf = require('pdf-parse');

const path = 'D:\\Download New\\Tito_Tamaro___CV (3).pdf';
const dataBuffer = fs.readFileSync(path);

pdf(dataBuffer).then(function (data) {
    fs.writeFileSync('resume.txt', data.text);
}).catch(function (error) {
    console.error("Error reading PDF", error);
});
