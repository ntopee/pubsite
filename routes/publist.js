var renderMW = require('../middleware/generic/render');

var getPubListMW = require('../middleware/pubs/getPubList');
var updatePubMW = require ('../middleware/pubs/updatePub');
var getPubMW = require ('../middleware/pubs/getPub');
var deletePubMW = require ('../middleware/pubs/deletePub');
var checkPubMW =('../middleware/pubs/checkPub');
var savePubMW=('../middleware/pubs/savePub');
var pubModel = {};

module.exports = function (app) {

    var objectRepository = {
        pubModel: pubModel
    };

    /**
     * List all pubs
     */

    app.get('/pubs',
        getPubListMW(objectRepository),
        renderMW(objectRepository, 'pubs')
    );

    /**
     * Create new pub
     */

    app.get('/pubs/add',
        renderMW(objectRepository, 'newpub')
    );

    app.post('/pubs/add',
        updatePubMW(objectRepository),
        checkPubMW(objectRepository),
        savePubMW(objectRepository),
        renderMW(objectRepository, 'newpub')
    );

    /**
     * Edit pub
     */

    app.get('/pubs/mod/:pubid',
        renderMW(objectRepository, 'newpub')
    );

    app.post('/pubs/mod/:pubid',
        getPubMW(objectRepository),
        checkPubMW(objectRepository),
        updatePubMW(objectRepository),
        savePubMW(objectRepository),
        renderMW(objectRepository, 'newpub')
    );

    /**
     * Delete pub
     * - then redirect to /pubs
     */

    app.get('/pubs/del/:pubid',
        getPubMW(objectRepository),
        deletePubMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/pubs');
        }
    );

};
