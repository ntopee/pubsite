var requireOption = require('../common').requireOption;

/**
 * Get the preferred and not preferred pubs for the person of the personid param
 *  - if there is no such person, redirect to /people
 *  - else send the lists
 */
module.exports = function (objectrepository) {

    var pubModel = requireOption(objectrepository, 'personModel');

    return function (req, res, next) {
        if(typeof res.locals.person === 'undefined') return next();
        //todo send valid data
        let preferredList=res.locals.person._pubs;
        let notPreferredList=res.locals.pubList;
        res.locals.person._pubs.forEach(function (pub) {
            for(let i=0; i<notPreferredList.length; i++){
                if(notPreferredList[i].name === pub.name){
                    notPreferredList.splice(i, 1);
                }
            }
        });
        console.log('getpersonpreferences');
       res.send({preferredList,notPreferredList});
    };
};