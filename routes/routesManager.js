const indexRouter = require('./index');
const usersRouter = require('./users');
const hesapla = require('./hesaplama');
const pdfGenerate = require('./pdfGenerate');

module.exports = function (app) {
    app.use('/', indexRouter);
    app.use('/users', usersRouter);
    app.use('/hesapla', hesapla);
    app.use('/pdf', pdfGenerate);
};