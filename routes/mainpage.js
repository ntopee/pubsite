var renderMW = require('../middleware/generic/render');
var commonPrefListMW = require('../middleware/generic/commonPrefList');
var getPersonListMW = require('../middleware/people/getPersonList');
var userModel = {};

module.exports = function (app) {

    var objectRepository = {
        personModel: 'personModel'
    };

    /**
     * Main page, lists people
     */
    app.get('/',
        getPersonListMW(objectRepository),
        renderMW(objectRepository)
    );

    app.post('/out',
        getPersonListMW(objectRepository),
        commonPrefListMW(objectRepository),
        renderMW(objectRepository)
    );
};
