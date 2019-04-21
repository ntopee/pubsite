var requireOption = require('../common').requireOption;

/**
 * Get the preferred pubs for the persons in req.locals.people
 * create a list of the common preferred Pubs
 */
module.exports = function (objectrepository) {

    var personModel = requireOption(objectrepository, 'personModel');
    var pubModel = requireOption(objectrepository, 'pubModel');

    return function (req, res, next) {
        pubModel.find({}, function(err, result){
            if (err) {
                return next(err);
            }
            //todo send only relevant pubs
            res.locals.commonPrefList = result;
            console.log('getpublistMW');
            return next();
        });
    };

};