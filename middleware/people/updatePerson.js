const requireOption = require('../common').requireOption;

/**
 * update res.locals.person if we have the data for it
 */
module.exports = function (objectrepository) {

    const personModel = requireOption(objectrepository, 'personModel');

    return function (req, res, next) {
        if(typeof res.locals.person === 'undefined') {
            res.locals.person=new personModel();
            res.locals.person._pubs=[];
        }
        res.locals.person.name = req.body.name;
        res.locals.person.fullname = req.body.fullname;
        res.locals.person.favourite=req.body.favourite;
        return next();
    };

};