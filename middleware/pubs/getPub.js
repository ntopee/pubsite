var requireOption = require('../common').requireOption;

/**
 * Get the task for the pubid param
 *  - if there is no such pub, redirect to /pubs
 *  - if there is one, put it on res.tpl.pub
 */
module.exports = function (objectrepository) {

    var pubModel = requireOption(objectrepository, 'pubModel');

    return function (req, res, next) {
        console.log('getPub');
        return next();
    };

};