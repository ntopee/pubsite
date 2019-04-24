/**
 * Saves the changes to the database
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        if(typeof res.locals.pub !== 'undefined') res.locals.pub.save(function (err) {
            if (err) {
                return next(err);
            }
            return res.redirect('/pubs');
        });
        console.log('savepub');
    };
};