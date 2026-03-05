import fs from 'fs';
import pdf from 'pdf-parse/lib/pdf-parse.js';

const dataBuffer = fs.readFileSync('D:\\Download New\\Tito_Tamaro___CV (3).pdf');

pdf(dataBuffer).then(function (data) {
    fs.writeFileSync('resume.txt', data.text);
}).catch(function (error) {
    console.error("Error reading PDF", error);
});
