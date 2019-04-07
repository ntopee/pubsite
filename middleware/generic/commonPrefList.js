var requireOption = require('../common').requireOption;

/**
 * Get the preferred pubs for the persons in res.tpl.people
 * create a list of the common preferred Pubs
 */
module.exports = function (objectrepository) {

    var personModel = requireOption(objectrepository, 'personModel');

    return function (req, res, next) {
        res.tpl.commonPrefList=[{
            name: "Pub1",
            address: "1111 Lorem, Ipsum utca 12.",
            open :"8:00-18:00"
        },{
            name: "Pub2",
            address: "1111 Lorem, Ipsum utca 11.",
            open :"10:00-16:30"
        },{
            name: "Pub3",
            address: "1111 Lorem, Ipsum utca 13.",
            open :"10:00-17:00"
        }];
        return next();
    };

};