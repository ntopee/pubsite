var renderMW = require('../middleware/generic/render');
var getPersonListMW = require('../middleware/people/getPersonList');
var updatePersonMW = require('../middleware/people/updatePerson');
var getPersonMW = require('../middleware/people/getPerson');
var deletePersonMW = require('../middleware/people/deletePerson');
var addPersonPreferenceMW = require('../middleware/people/addPersonPreference');
var delPersonPreferenceMW = require('../middleware/people/delPersonPreference');
var getPersonPreferencesMW = require('../middleware/people/getPersonPreferences');
var savePersonMW = require('../middleware/people/savePerson');
var getPubListMW = require('../middleware/pubs/getPubList');

var personModel = require("../models/person");
var pubModel = require("../models/pub");

module.exports = function (app) {

    var objectRepository = {
        personModel: personModel,
        pubModel: pubModel
    };

    /**
     * List all people
     */

    app.get('/people/getpreferences/:personid',
        getPersonMW(objectRepository),
        getPubListMW(objectRepository),
        getPersonPreferencesMW(objectRepository)
    );


    /**
     * Save the modified preference list
     */
    app.post('/people/addpreference/:personid',
        addPersonPreferenceMW(objectRepository),
        savePersonMW(objectRepository)
    );

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
     * Add new person
     */

    app.get('/people/add',
        renderMW(objectRepository, 'people_edit')
    );


    app.post('/people/add',
        updatePersonMW(objectRepository),
        savePersonMW(objectRepository),
        renderMW(objectRepository, 'people_edit')
    );

    /**
     * Edit the person details
     */

    app.get('/people/mod/:personid',
        getPersonMW(objectRepository),
        renderMW(objectRepository, 'people_edit')
    );

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

