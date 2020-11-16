var assert = require('assert');
const ApiHelper = require('../src/js/apiHelper')


describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });

    it('should return API results', async()=> {
      let results = await ApiHelper.getResponseForApiRequest("hello");
      console.log("results are" , results);
      assert.ok(results);
    });

  });
});
