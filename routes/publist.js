var renderMW = require('../middleware/generic/render');
var getPubListMW = require('../middleware/pubs/getPubList');
var updatePubMW = require ('../middleware/pubs/updatePub');
var getPubMW = require ('../middleware/pubs/getPub');
var deletePubMW = require ('../middleware/pubs/deletePub');
var savePubMW=require('../middleware/pubs/savePub');

var pubModel = require("../models/pub");

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
        renderMW(objectRepository, 'pubs_edit')
    );

    app.post('/pubs/add',
        updatePubMW(objectRepository),
        savePubMW(objectRepository),
        renderMW(objectRepository, 'pubs_edit')
    );

    /**
     * Edit pub
     */

    app.get('/pubs/mod/:pubid',
        getPubMW(objectRepository),
        renderMW(objectRepository, 'pubs_edit')
    );

    app.post('/pubs/mod/:pubid',
        getPubMW(objectRepository),
        updatePubMW(objectRepository),
        savePubMW(objectRepository),
        renderMW(objectRepository, 'pubs_edit')
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
