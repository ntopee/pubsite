var expect = require('chai').expect;
var getPubListMW = require('../../../middleware/pubs/getPubList');

describe('getPubList middleware ', function () {

    it('should return pubs', function (done) {
        var req = {};
        var res = {
            locals: {}
        };
        var fakePubModel = {
            find: function (some, cb) {
                cb(undefined, ['pub1', 'pub2'])
            }
        };

        getPubListMW({
            pubModel: fakePubModel
        })(req, res, function (err) {
            expect(res.locals.pubList).to.eql(['pub1', 'pub2']);
            expect(err).to.eql(undefined);
            done();
        });
    });

    it('should return error when db returns error', function (done) {
        var fakePubModel = {
            find: function (some, cb) {
                cb('asd', undefined)
            }
        };

        getPubListMW({
            pubModel: fakePubModel
        })({}, {}, function (err) {
            expect(err).to.eql('asd');
            done();
        });
    });
});