let requireOption = require('../common').requireOption;

/**
 * Get the preferred pubs for the persons in req.body.data
 * send a list of the common preferred Pubs
 */
module.exports = function (objectrepository) {

    let personModel = requireOption(objectrepository, 'personModel');

    return function (req, res, next) {
        let pubs = [];
        if (typeof req.body.data === 'undefined') res.send({pubList: pubs});
        else {
            personModel.find({_id: req.body.data}).populate('_pubs').exec(function (err, result) {
                if (err) {
                    return next(err);
                }
                result.some(function (person) {
                    if (pubs.length === 0) {
                        pubs = person._pubs;
                    } else {
                        for (let i = 0; i < pubs.length;) {
                            if (!(person._pubs.includes(pubs[i]))) pubs.splice(i, 1);
                            else i++;
                        }
                    }
                    if (pubs.length === 0) return true;
                });
                res.send({pubList: pubs});
            });
        }
    }
};