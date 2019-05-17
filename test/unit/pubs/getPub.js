var expect = require('chai').expect;
var getPubListMW = require('../../../middleware/pubs/getPub');

describe('getPub middleware ', function () {

    it('should return a pub', function (done) {
        var req = {
            params: {
                pubid: {}
            }
        };
        var res = {
            locals: {}
        };
        var fakePubModel = {
            findOne: function (some, cb) {
                cb(undefined, {name: "pub1"})
            }
        };

        getPubListMW({
            pubModel: fakePubModel
        })(req, res, function (err) {
            expect(res.locals.pub.name).to.eql("pub1");
            expect(err).to.eql(undefined);
            done();
        });
    });

    it('should call res.redirect when db returns error', function (done) {
        var req = {
            params: {
                pubid: {}
            }
        };
        var res = {
          redirect: function(str){
              expect(str).to.be.eql('/pubs');
              done();
          }
        };
        var fakePubModel = {
            findOne: function (some, cb) {
                cb('asd', undefined)
            }
        };

        getPubListMW({
            pubModel: fakePubModel
        })(req, res, function (err) {
            expect('next should not be called').to.be.eql(false);
            done();
        });
    });
});