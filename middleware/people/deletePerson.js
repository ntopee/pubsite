var requireOption = require('../common').requireOption;

/**
 * Delete the Person object, if its already loaded
 */
module.exports = function (objectrepository) {
    var personModel = requireOption(objectrepository, 'personModel');
    return function (req, res, next) {
        if(typeof res.locals.person === 'undefined'){
            return next();
        }

        res.locals.person.remove(function (err) {
            if (err) {
                return next(err);
            }
            //redirect to all people
            res.redirect('/people/list');
        });
        console.log('deletepersonMW');
    };

};