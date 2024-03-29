const renderMW = require('../middleware/generic/render');
const getPubListMW = require('../middleware/pubs/getPubList');
const updatePubMW = require('../middleware/pubs/updatePub');
const getPubMW = require('../middleware/pubs/getPub');
const deletePubMW = require('../middleware/pubs/deletePub');
const savePubMW = require('../middleware/pubs/savePub');

const pubModel = require("../models/pub");

module.exports = function (app) {

    const objectRepository = {
        pubModel: pubModel
    };

    /**
     * List all pubs
     */
    app.get('/pubs',
        getPubListMW(objectRepository),
        renderMW('pubs')
    );

    /**
     * Load the Create new pub screen
     */
    app.get('/pubs/add',
        renderMW('pubs_edit')
    );

    /**
     * Create new pub
     */
    app.post('/pubs/add',
        updatePubMW(objectRepository),
        savePubMW(),
        renderMW('pubs_edit')
    );

    /**
     * Load the Edit pub screen
     */
    app.get('/pubs/mod/:pubid',
        getPubMW(objectRepository),
        renderMW('pubs_edit')
    );

    /**
     * Edit pub
     */
    app.post('/pubs/mod/:pubid',
        getPubMW(objectRepository),
        updatePubMW(objectRepository),
        savePubMW(objectRepository),
        renderMW('pubs_edit')
    );

    /**
     * Delete pub
     * - then redirect to /pubs
     */

    app.get('/pubs/del/:pubid',
        getPubMW(objectRepository),
        deletePubMW(),
        function (req, res, next) {
            return res.redirect('/pubs');
        }
    );

};
