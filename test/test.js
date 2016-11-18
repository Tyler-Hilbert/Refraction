var fs = require('fs');
var vm = require('vm');
var path = './calculator.js';
var code = fs.readFileSync(path);
vm.runInThisContext(code);

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      var calc = new Calculator(ni, nr, aoi);

      // Cases to test:
      // low ni, high nr
      calc.ni = .5;
      calc.nr = 2;
      calc.aoi = 30;

      calc.ni = 1;
      calc.nr = 2.1;
      calc.aoi = 32;

      // high ni, low nr
      calc.ni = 4;
      calc.nr = 1;
      calc.aoi = 20;

      calc.ni = 3.8;
      calc.nr = 2;
      calc.aoi = 22;

      // ni == nr
      calc.ni = 4;
      calc.nr = 4;
      calc.aoi = 60;

      calc.ni = 1;
      calc.nr = 1
      calc.aoi = 31;

      // large incidencec angle
      calc.ni = 1;
      calc.nr = 1.5;
      calc.aoi = 89;

      calc.ni = 1.5;
      calc.nr = 1;
      calc.aoi = 85;

      // small incidence angle
      calc.ni = 1.5;
      calc.nr = 1;
      calc.aoi = 1;

      calc.ni = 1;
      calc.nr = 1.5
      calc.aoi = 1.5;

      // when there is no critical angle (try to get critical angle)
      calc.ni = 1;
      calc.nr = 1.5;

      function test(calc, expectedAOR, expectedCriticalAngle) {
        console.log("ni: " + calc.ni + ", nr: " + calc.nr + ", aoi(in degrees): " + calc.aoi + ", expected aor (in degrees): " + expectedAOR + ", expected critical angle(in degrees): " + expectedCriticalAngle);
        var aor = calc.getAOR();
        var criticalAngle = calc.getCriticalAngle();
        console.log("AOR(in degrees): " + aor);
        console.log("Critical angle(in degrees): " + criticalAngle);
        
        assert(aor == expectedAOR && criticalAngle == expectedCriticalAngle);
      }
    });
  });
});
