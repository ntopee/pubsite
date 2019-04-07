var requireOption = require('../common').requireOption;

/**
 * Get the pub list and put it on res.tpl.pubList
 */
module.exports = function (objectrepository) {

    var pubModel = requireOption(objectrepository, 'pubModel');

    return function (req, res, next) {
        res.tpl.pubList=[{
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
        console.log('getPubList');
        return next();
    };
};