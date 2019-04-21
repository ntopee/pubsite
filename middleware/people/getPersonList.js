var requireOption = require('../common').requireOption;

/**
 * Get the person list and put it on res.locals.personList
 */
module.exports = function (objectrepository) {

    var personModel = requireOption(objectrepository, 'personModel');

    return function (req, res, next) {
        personModel.find({}).populate('_pubs').exec( function (err, results) {
            if (err) {
                return next(err);
            }
            res.locals.personList = results;
            return next();
        });
    };
};