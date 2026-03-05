import fs from 'fs';
import pdf from 'pdf-parse/lib/pdf-parse.js';

const path = 'D:\\Download New\\Tito_Tamaro___CV (3).pdf';
const dataBuffer = fs.readFileSync(path);

pdf(dataBuffer).then(function (data) {
    console.log(data.text);
}).catch(function (error) {
    console.error("Error reading PDF", error);
});
