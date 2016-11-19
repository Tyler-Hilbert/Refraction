var fs = require('fs');
var vm = require('vm');
var path = './calculator.js';
var code = fs.readFileSync(path);
vm.runInThisContext(code);

/*
function test(calc, expectedAOR, expectedCriticalAngle) {
  print(calc);
  assert(aor == expectedAOR && criticalAngle == expectedCriticalAngle);
}*/

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('Test example cases', function() {
      var calc = new Calculator(1, 1, 30);

      // Cases to test:
      // low ni, high nr
      calc.ni = .5;
      calc.nr = 2;
      calc.aoi = 30;
      test(calc, 7.180755781458282, "nan");

      calc.ni = 1;
      calc.nr = 2.1;
      calc.aoi = 32;
      test(calc, 14.61617307583249, "nan");

      // high ni, low nr
      calc.ni = 4;
      calc.nr = 1;
      calc.aoi = 20;
      test(calc, "nan", 14.477512185929925, 14.477512185929925); // TODO Should this be "nan"?

      calc.ni = 3.8;
      calc.nr = 2;
      calc.aoi = 22;
      test(calc, 45.37768526107654, 31.756863859297123); // TODO Can a critical angle be at 90 degres when going from ni == nr

      // ni == nr
      calc.ni = 4;
      calc.nr = 4;
      calc.aoi = 60;
      test(calc, 59.99999999999999, 90);

      calc.ni = 1;
      calc.nr = 1
      calc.aoi = 31;
      test(calc, 31, 90);

      // large incidencec angle
      calc.ni = 1;
      calc.nr = 1.5;
      calc.aoi = 89;
      test(calc, 41.80251021963545, "nan");

      calc.ni = 1.5;
      calc.nr = 1;
      calc.aoi = 85;
      test(calc, "nan", 41.810314895778596);

      // small incidence angle
      calc.ni = 1.5;
      calc.nr = 1;
      calc.aoi = 1;
      test(calc, 1.5000952208635716, 41.810314895778596);

      calc.ni = 1;
      calc.nr = 1.5
      calc.aoi = 1.5;
      test(calc, 0.9999365315129298, "nan");

      function print(calc) {
        console.log("ni:" + calc.ni + " nr:" + calc.nr + " aoi: " + calc.aoi + " aor:" + calc.getAOR() + " critical angle:" + calc.getCriticalAngle());
      }


      function test(calc, aor, criticalAngle) {
        print(calc);
        if (aor != "nan") {
          assert(calc.getAOR() == aor);
        }

        if (criticalAngle != "nan") {
            assert(calc.getCriticalAngle() == criticalAngle);
        }
      }


    });
  });
});
