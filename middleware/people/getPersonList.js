var requireOption = require('../common').requireOption;

/**
 * Get the person list and put it on res.tpl.personList
 */
module.exports = function (objectrepository) {

    var personModel = requireOption(objectrepository, 'personModel');

    return function (req, res, next) {
        console.log('getPersonlistMW');
        return next();
    };

};