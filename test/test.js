var fs = require('fs');
var vm = require('vm');
var path = './calculator.js';
var code = fs.readFileSync(path);
vm.runInThisContext(code);

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {

      for (var aoi = 10; aoi <= 90; aoi+=10) {
        for (var nr = .5; nr <= 4; nr+= .5) {
          for (var ni = .5; ni <= 4; ni+= .5) {
            var calc = new Calculator(ni, nr, aoi);
            console.log("ni: " + ni + " nr: " + nr + " aoi (in degrees): " + aoi);
            console.log("Angle of refraction: " + calc.getAOR());
            console.log("Critical angle: " + calc.getCriticalAngle());
          }
        }
      }

      //assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});
