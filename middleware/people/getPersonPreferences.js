var requireOption = require('../common').requireOption;

/**
 * Get the preferred pubs for the person of the personid param
 *  - if there is no such person, redirect to /people
 *  - if there is one or more, put it on res.tpl.preferredList
 */
module.exports = function (objectrepository) {

    var personModel = requireOption(objectrepository, 'personModel');

    return function (req, res, next) {
        console.log('getpersonpreferences');
        return next();
    };

};