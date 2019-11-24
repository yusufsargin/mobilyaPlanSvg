const express = require('express');
const router = express.Router();
const PDFDocument = require('pdfkit');

router.get('/', function (req, res, next) {
    let doc = new PDFDocument({
        margin: 50
    });

    for(let i = 0 ; i<10;i++){
        doc.text('Merhaba1')
            .moveDown(0.5)
            .text('merhaba2')
            .moveDown(0.5);
    }

    res.setHeader('Content-disposition', 'attachment; filename="' + 'Deneme.pdf' + '"');
    res.setHeader('Content-type', 'application/pdf');
    doc.end();
    doc.pipe(res);
});

module.exports = router;