var requireOption = require('../common').requireOption;

/**
 * Save the person on res.locals.person to the db
 */
module.exports = function (objectrepository) {

    var personModel = requireOption(objectrepository, 'personModel');

    return function (req, res, next) {
        if(typeof res.locals.person !== 'undefined') res.locals.person.save(function (err) {
            if (err) {
                return next(err);
            }
            return res.redirect('/people/list');
        });
        console.log('saveperson');
    };

};