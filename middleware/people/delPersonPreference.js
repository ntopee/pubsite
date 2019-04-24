const requireOption = require('../common').requireOption;

/**
 * Remove a pub from the pubs list of the person, put result in res.locals.person
 */
module.exports = function (objectrepository) {

    const personModel = requireOption(objectrepository, 'personModel');

    return function (req, res, next) {
        if (typeof req.body.pub === 'undefined' || typeof req.params.personid === 'undefined') return next();

        personModel.findOne({
            _id: req.params.personid
        }, function (err, result) {
            if ((err) || (!result)) {
                console.log(err);
            }
            let list= result._pubs.filter(function(ele){
                return ele != req.body.pub;
            });
            res.locals.person=result;
            res.locals.person._pubs=list;
            return next();
        });
    };
};