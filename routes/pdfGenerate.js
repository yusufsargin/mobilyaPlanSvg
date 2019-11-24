const express = require('express');
const router = express.Router();
const PDFDocument = require('pdfkit');

router.post('/', function (req, res, next) {
    const kesimListesi = req.body.kesmeListesi;

    let doc = new PDFDocument({
        margin: 50
    });

    kesimListesi.map(function (item) {
        doc.text(item)
            .moveDown(2);
    });

    res.setHeader('Content-disposition', 'attachment; filename="' + 'Deneme.pdf' + '"');
    res.setHeader('Content-type', 'application/pdf');
    doc.end();
    doc.pipe(res);
});

module.exports = router;