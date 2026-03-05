const fs = require('fs');
const PDFParser = require("pdf2json");

const pdfParser = new PDFParser(this, 1);

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFileSync("resume.txt", pdfParser.getRawTextContent());
    console.log("Success! Resume extracted.");
});

pdfParser.loadPDF("D:\\Download New\\Tito_Tamaro___CV (3).pdf");
