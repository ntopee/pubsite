var requireOption = require('../common').requireOption;

/**
 * Update res.tpl.person if we have the data for it
 */
module.exports = function (objectrepository) {
    var pubModel = requireOption(objectrepository, 'pubModel');

    return function (req, res, next) {
        if(typeof res.locals.pub === 'undefined') res.locals.pub=new pubModel();

        res.locals.pub.name = req.body.name;
        res.locals.pub.address = req.body.address;
        res.locals.pub.open=req.body.open;

        console.log('updatepub');
        return next();
    };

};