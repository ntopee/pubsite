var requireOption = require('../common').requireOption;

/**
 * Get the preferred and not preferred pubs for the person of the personid param
 *  - if there is no such person, redirect to /people
 *  - if there is one or more, put the preferred pubs on res.tpl.preferredList
 *   - and put the not preferred pubs on res.tpl.notPreferredList
 */
module.exports = function (objectrepository) {

    var personModel = requireOption(objectrepository, 'personModel');

    return function (req, res, next) {
        //Pub names(primary keys in the pubs table)
        res.tpl.preferredList=["Pub1","Pub2","Pub3","Pub4"];
        res.tpl.notPreferredList=["Pub8","Pub5","Pub6","Pub7"];
        console.log('getpersonpreferences');
        return next();
    };

};