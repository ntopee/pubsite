const requireOption = require('../common').requireOption;

/**
 * Get the pub list and put it on res.locals.pubList
 */
module.exports = function (objectrepository) {

    const pubModel = requireOption(objectrepository, 'pubModel');

    return function (req, res, next) {
        pubModel.find({}, function(err, result){
            if (err) {
                return next(err);
            }
            res.locals.pubList = result;
            return next();
        });
    };
};