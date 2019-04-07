var requireOption = require('../common').requireOption;

/**
 * Get the task for the pubid param
 *  - if there is no such pub, redirect to /pubs
 *  - if there is one, put it on res.tpl.pub
 */
module.exports = function (objectrepository) {

    var pubModel = requireOption(objectrepository, 'pubModel');

    return function (req, res, next) {
        res.tpl.pub={
            name: "Pub1",
            address: "1111 Lorem, Ipsum utca 11.",
            open :"10:00-18:00"
        };
        console.log('getPub');
        return next();
    };

};