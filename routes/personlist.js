const renderMW = require('../middleware/generic/render');
const getPersonListMW = require('../middleware/people/getPersonList');
const updatePersonMW = require('../middleware/people/updatePerson');
const getPersonMW = require('../middleware/people/getPerson');
const deletePersonMW = require('../middleware/people/deletePerson');
const addPersonPreferenceMW = require('../middleware/people/addPersonPreference');
const delPersonPreferenceMW = require('../middleware/people/delPersonPreference');
const getPersonPreferencesMW = require('../middleware/people/getPersonPreferences');
const savePersonMW = require('../middleware/people/savePerson');
const getPubListMW = require('../middleware/pubs/getPubList');

const personModel = require("../models/person");
const pubModel = require("../models/pub");

module.exports = function (app) {

    const objectRepository = {
        personModel: personModel,
        pubModel: pubModel
    };

    /**
     * Send the preferred pubs of the person with :personid
     */

    app.get('/people/getpreferences/:personid',
        getPersonMW(objectRepository),
        getPubListMW(objectRepository),
        getPersonPreferencesMW(objectRepository)
    );

    /**
     * Add preference to the person with :personid, save the modified preference list
     */
    app.post('/people/addpreference/:personid',
        addPersonPreferenceMW(objectRepository),
        savePersonMW(objectRepository)
    );

    /**
     * Delete preference from the person with :personid, save the modified preference list
     */
    app.post('/people/delpreference/:personid',
        delPersonPreferenceMW(objectRepository),
        savePersonMW(objectRepository)
    );

    /**
     * List all people
     */

    app.get('/people/list',
        getPersonListMW(objectRepository),
        renderMW(objectRepository, 'people')
    );

    /**
     * Load add new person screen
     */

    app.get('/people/add',
        renderMW(objectRepository, 'people_edit')
    );

    /**
     * Add new person
     */
    app.post('/people/add',
        updatePersonMW(objectRepository),
        savePersonMW(objectRepository),
        renderMW(objectRepository, 'people_edit')
    );

    /**
     * Load the edit person screen
     */
    app.get('/people/mod/:personid',
        getPersonMW(objectRepository),
        renderMW(objectRepository, 'people_edit')
    );

    /**
     * Edit the person details
     */
    app.post('/people/mod/:personid',
        getPersonMW(objectRepository),
        updatePersonMW(objectRepository),
        savePersonMW(objectRepository),
        renderMW(objectRepository, 'people_edit')
    );

    /**
     * Delete person
     * - then redirect to /people
     */
    app.get('/people/del/:personid',
        getPersonMW(objectRepository),
        deletePersonMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/people/list');
        }
    );
};

