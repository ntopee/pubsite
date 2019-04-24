var renderMW = require('../middleware/generic/render');
var commonPrefListMW = require('../middleware/generic/commonPrefList');
var getPersonListMW = require('../middleware/people/getPersonList');
var getPubListMW = require('../middleware/pubs/getPubList');

var personModel = require("../models/person");
var pubModel = require("../models/pub");

module.exports = function (app) {

    var objectRepository = {
        personModel: personModel,
        pubModel: pubModel
    };

    /**
     * Main page, with a list of the common preferred pubs
     */
    app.post('/commonpreflist',
        getPersonListMW(objectRepository),
        commonPrefListMW(objectRepository)
    );

    /**
     * Main page, lists people
     */
    app.get('/',
        getPersonListMW(objectRepository),
        getPubListMW(objectRepository),
        renderMW(objectRepository, 'mainpage')
    );
};
