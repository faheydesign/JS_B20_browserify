var expect  = require('chai').expect,
    Counter = require('../../lib/counter');

describe('Counter object tests', function() {

  describe('constructor', function() {
      var counter;
      counter = new Counter();

      it('should return the counter value as zero after the object is created', function() {
        expect( counter.getValue() ).to.equal(0);
      });

      it('should be one more than before', function() {
        expect( counter.increment() ).to.equal(1);
      });

      it('should be one more than before', function() {
        expect( counter.increment() ).to.equal(2);
      });
  });

});
