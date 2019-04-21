var requireOption = require('../common').requireOption;

/**
 * Get the person for the personid param
 *  - if there is no such person, redirect to /people
 *  - if there is one, put it on res.locals.person
 */
module.exports = function (objectrepository) {

    var personModel = requireOption(objectrepository, 'personModel');

    return function (req, res, next) {

        personModel.findOne({
            _id: req.params.personid
        }).populate('_pubs').exec(function (err, result) {
            if ((err) || (!result)) {
                return res.redirect('/people/list');
            }

            res.locals.person = result;
            console.log('getpersonMW');
            return next();
        });
    };
};