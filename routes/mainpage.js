var renderMW = require('../middleware/generic/render');
var commonPrefListMW = require('../middleware/generic/commonPrefList');
var getPersonListMW = require('../middleware/people/getPersonList');

module.exports = function (app) {

    var objectRepository = {
        personModel: 'personModel'
    };

    /**
     * Main page, lists people
     */
    app.get('/',
        getPersonListMW(objectRepository),
        commonPrefListMW(objectRepository),
        renderMW(objectRepository, 'mainpage')
    );

    /**
     * Main page, with a list of the common preferred pubs
     */
    app.post('/out',
        getPersonListMW(objectRepository),
        commonPrefListMW(objectRepository),
        renderMW(objectRepository, 'mainpage')
    );
};
