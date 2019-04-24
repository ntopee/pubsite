const requireOption = require('../common').requireOption;

/**
 * Get the task for the pubid param
 *  - if there is no such pub, redirect to /pubs
 *  - if there is one, put it on res.locals.pub
 */
module.exports = function (objectrepository) {

    const pubModel = requireOption(objectrepository, 'pubModel');

    return function (req, res, next) {
        pubModel.findOne({
            _id: req.params.pubid
        }, function(err, result){
            if ((err) || (!result)) {
                return res.redirect('/pubs');
            }
            res.locals.pub = result;
            return next();
        });
    };
};