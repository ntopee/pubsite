var requireOption = require('../common').requireOption;

/**
 * Get the task for the pubid param
 *  - if there is no such pub, redirect to /pubs
 *  - if there is one, put it on res.locals.pub
 */
module.exports = function (objectrepository) {

    var pubModel = requireOption(objectrepository, 'pubModel');

    return function (req, res, next) {

        pubModel.findOne({
            _id: req.params.pubid
        }, function(err, result){
            if ((err) || (!result)) {
                return res.redirect('/pubs');
            }
            res.locals.pub = result;
            console.log('getpubMW');
            return next();
        });
    };


};