/**
 * Delete the Pub object, if its already loaded
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log('deletePub');
        return next();
    };

};