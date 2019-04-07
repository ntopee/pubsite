var renderMW = require('../middleware/generic/render');
var getPersonListMW = require('../middleware/people/getPersonList');
var updatePersonMW = require('../middleware/people/updatePerson');
var getPersonMW = require('../middleware/people/getPerson');
var deletePersonMW = require('../middleware/people/deletePerson');
var savePersonPreferencesMW = require('../middleware/people/savePersonPreferences');
var getPersonPreferencesMW = require('../middleware/people/getPersonPreferences');
var checkPersonMW = require('../middleware/people/deletePerson');
var savePersonMW = require('../middleware/people/deletePerson');

module.exports = function (app) {

    var objectRepository = {
        personModel: 'personModel'
    };

    /**
     * List all people, select :id, list the preferred pubs
     */

    app.get('/people/list/:id',
        getPersonListMW(objectRepository),
        getPersonPreferencesMW(objectRepository),
        renderMW(objectRepository, 'people')
    );

    /**
     * Save the modified preference list
     */
    app.post('/people/list/:id',
        getPersonListMW(objectRepository),
        savePersonPreferencesMW(objectRepository),
        renderMW(objectRepository, 'people')
    );

    /**
     * List all people
     */

    app.get('/people/list',
        getPersonListMW(objectRepository),
        getPersonPreferencesMW(objectRepository),
        renderMW(objectRepository, 'people')
    );

    /**
     * Add new person
     */

    app.get('/people/add',
        checkPersonMW(objectRepository),
        savePersonMW(objectRepository),
        renderMW(objectRepository, 'people_edit')
    );


    app.post('/people/add',
        checkPersonMW(objectRepository),
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
        checkPersonMW(objectRepository),
        deletePersonMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/people/list');
        }
    );
};

