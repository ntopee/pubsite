const renderMW = require('../middleware/generic/render');
const commonPrefListMW = require('../middleware/generic/commonPrefList');
const getPersonListMW = require('../middleware/people/getPersonList');
const getPubListMW = require('../middleware/pubs/getPubList');

const personModel = require("../models/person");
const pubModel = require("../models/pub");

module.exports = function (app) {

    const objectRepository = {
        personModel: personModel,
        pubModel: pubModel
    };

    /**
     * Sends the common pubs of the people in post
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
        renderMW('mainpage')
    );
};
