'use strict';


var AppModel = require('../models/app');


module.exports = function (router) {

    var model = new AppModel();

    router.get('/', function (req, res) {
        
        res.render('app', model);
        
    });

};
