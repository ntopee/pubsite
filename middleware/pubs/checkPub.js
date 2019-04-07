var requireOption = require('../common').requireOption;

/**
 * Check/validate attributes
 */
module.exports = function (objectrepository) {

    var pubModel = requireOption(objectrepository, 'pubModel');

    return function (req, res, next) {
        console.log('checkPub');
        return next();
    };

};