var requireOption = require('../common').requireOption;

/**
 * Get the preferred and not preferred pubs for the person of the personid param
 *  - if there is no such person, redirect to /people
 *  - if there is one or more, put the preferred pubs on res.locals.preferredList
 *   - and put the not preferred pubs on res.locals.notPreferredList
 */
module.exports = function (objectrepository) {

    var pubModel = requireOption(objectrepository, 'personModel');

    return function (req, res, next) {
        if(typeof res.locals.person === 'undefined') return next();
        res.locals.preferredList=[];
        //todo send valid data
        res.locals.person._pubs.forEach(function (pubid) {
            pubModel.findOne({
                _id: pubid
            }, function(err, result){
                if (err) {
                    return next(err);
                }
            res.locals.preferredList.push(result.name);
        });
        //res.locals.preferredList=["Pub1","Pub2","Pub3","Pub4"];
        res.locals.notPreferredList=["Pub8","Pub5","Pub6","Pub7"];
        console.log('getpersonpreferences');
        return next();
    });
    };
};