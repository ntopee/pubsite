var requireOption = require('../common').requireOption;

/**
 * Add a new pub to the pubs list of the person
 */
module.exports = function (objectrepository) {

    var personModel = requireOption(objectrepository, 'personModel');

    return function (req, res, next) {
        if (typeof req.body.pub === 'undefined' || typeof req.params.personid === 'undefined') return next();

        personModel.findOne({
            _id: req.params.personid
        }, function (err, result) {
            if ((err) || (!result)) {
                console.log(err);
            }
            result._pubs.push(req.body.pub);
            res.locals.person=result;
            console.log('addpersonpreference');
            return next();
        });
    };
};