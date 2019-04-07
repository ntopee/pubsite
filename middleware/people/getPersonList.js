var requireOption = require('../common').requireOption;

/**
 * Get the person list and put it on res.tpl.personList
 */
module.exports = function (objectrepository) {

    var personModel = requireOption(objectrepository, 'personModel');

    return function (req, res, next) {
        var ppl=[{
            name: "Nick1",
            fullname: "Lorem Ipsum",
            favourite:"sit amet"
        },{
            name: "Nick2",
            fullname: "Lorem Ipsum",
            favourite:"sit amet"
        },{
            name: "Nick3",
            fullname: "Lorem Ipsum",
            favourite:"sit amet"
        }];
        res.tpl.personList=ppl;
        console.log('getPersonlistMW');
        return next();
    };

};