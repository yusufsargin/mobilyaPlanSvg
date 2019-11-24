const express = require('express');
const router = express.Router();
const PDFDocument = require('pdfkit');

router.get('/', function (req, res, next) {
    const kesimListesi = req.query.kesmeListesi;

    let doc = new PDFDocument({
        margin: 50
    });

    for (let i = 0; i < 10; i++) {
        doc.text(kesimListesi[i])
            .moveDown(2);
    }

    res.setHeader('Content-disposition', 'attachment; filename="' + 'Deneme.pdf' + '"');
    res.setHeader('Content-type', 'application/pdf');
    doc.end();
    doc.pipe(res);
});

module.exports = router;