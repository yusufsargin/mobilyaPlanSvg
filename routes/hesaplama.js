const express = require('express');
const router = express.Router();
const hesapYap = require('../control/hesapla');

router.post('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(hesapYap.hesaplama(req.body['modül'], req.body.oda1, req.body['yeni_modül'],
        req.body['modül_numarası'], req.body['duvar_eni_1'], req.body['duvar_yüksekliği_1'], req.body['sol_boy'])));
});
router.get('/', function (req, res, next) {
    res.send('Bu Bir Hesaplama Fonksiyonudur Lütfen Post Atın.');
});

module.exports = router;