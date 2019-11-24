const indexRouter = require('./index');
const usersRouter = require('./users');
const hesapla = require('./hesaplama');

module.exports = function (app) {
    app.use('/', indexRouter);
    app.use('/users', usersRouter);
    app.use('/hesapla',hesapla);
};