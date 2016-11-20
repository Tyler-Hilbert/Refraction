// Calculator class
function Calculator(ni, nr, aoi) {
	this.ni = ni;
	this.nr = nr;
	this.aoi = aoi;

	this.refractiveIndex = {"vacuum": 1, "air": 1.000293, "water": 1.33, "diamond": 2.419};

	this.getAOR = function() {
		aoiRadians = this.degreesToRadians(this.aoi);
		aorRadians = Math.asin(this.ni * Math.sin(aoiRadians) / this.nr);
		aorDegrees = this.radiansToDegrees(aorRadians);
		return aorDegrees;
	};

	this.getCriticalAngle = function() {
		criticalAngleRadians = Math.asin(this.nr / this.ni);
		criticalAngleDegrees = this.radiansToDegrees(criticalAngleRadians);
		return criticalAngleDegrees;
	};

	this.radiansToDegrees = function(radians) {
		return radians * (180/Math.PI);
	};

	this.degreesToRadians = function(degrees) {
		return degrees * (Math.PI/180);
	};

	// Log the variables being run and the calculators prediction
	this.printToConsole = function() {
		console.log("ni:" + this.ni + " nr:" + this.nr + " aoi: " + this.aoi + " aor:" + this.getAOR() + " critical angle:" + this.getCriticalAngle());
	}
};
