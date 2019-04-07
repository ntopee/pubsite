/**
 * Delete the Person object, if its already loaded
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log('deletepersonMW');
        return next();
    };

};