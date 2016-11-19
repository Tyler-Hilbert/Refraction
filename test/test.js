var fs = require('fs');
var vm = require('vm');
var path = './calculator.js';
var code = fs.readFileSync(path);
vm.runInThisContext(code);

// Log the variables being run and the calculators prediction
function print(calc) {
  console.log("ni:" + calc.ni + " nr:" + calc.nr + " aoi: " + calc.aoi + " aor:" + calc.getAOR() + " critical angle:" + calc.getCriticalAngle());
}

// Test if the calculator has the values or aor for getAOR() and criticalAngle for getCriticalAngle()
function test(calc, aor, criticalAngle) {
  print(calc);
  if (aor != "nan") {
    assert(calc.getAOR() == aor);
  }

  if (criticalAngle != "nan") {
      assert(calc.getCriticalAngle() == criticalAngle);
  }
}

var refractiveIndex = {"vacuum": 1, "air":	1.000293, "water": 1.33, "diamond": 2.419}

var assert = require('assert');
describe('Calculator', function() {
  describe('.getAor() and .getCriticalAngle()', function() {
    it('low ni, high nr', function() {
      var calc = new Calculator(.5, 2, 30);
      test(calc, 7.180755781458282, "nan");

      calc = new Calculator(1, 2.1, 32);
      test(calc, 14.61617307583249, "nan");
    });

    it('high ni, low nr', function() {
      var calc = new Calculator(4, 1, 20);
      test(calc, "nan", 14.477512185929925);

      calc = new Calculator(3.8, 2, 22);
      test(calc, 45.37768526107654, 31.756863859297123);
    });

    it('ni == nr', function() {
      var calc = new Calculator(4, 4, 60);
      test(calc, 59.99999999999999, 90);

      calc = new Calculator(1, 1, 31);
      test(calc, 31, 90);
    });

    it('large incidencec angle', function() {
      var calc = new Calculator(1, 1.5, 89);
      test(calc, 41.80251021963545, "nan");

      calc = new Calculator(1.5, 1, 85);
      test(calc, "nan", 41.810314895778596);
    });

    it('small incidence angle', function() {
      var calc = new Calculator(1.5, 1, 1);
      test(calc, 1.5000952208635716, 41.810314895778596);

      calc = new Calculator(1, 1.5, 1.5);
      test(calc, 0.9999365315129298, "nan");
    });

    it('refractive index test', function() {
      var calc = new Calculator(refractiveIndex.vacuum, refractiveIndex.air, 30);
      test(calc, 29.990310949989453, "nan");

      calc = new Calculator(refractiveIndex.air, refractiveIndex.diamond, 15);
      test(calc, 6.143881507130866 , "nan");

      calc = new Calculator(refractiveIndex.diamond, refractiveIndex.water, 45);
      test(calc, "nan", 33.35425165725555);
    });
  });
});
