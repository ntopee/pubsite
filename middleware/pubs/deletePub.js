var requireOption = require('../common').requireOption;
/**
 * Delete the Pub object, if its already loaded
 */
module.exports = function (objectrepository) {

    var pubModel = requireOption(objectrepository, 'pubModel');
    return function (req, res, next) {
        if(typeof res.locals.pub === 'undefined'){
            return next();
        }

        res.locals.pub.remove(function (err) {
            if (err) {
                return next(err);
            }
            //redirect to all pubs
            res.redirect('/pubs');
        });
        console.log('deletepubMW');
    };

};