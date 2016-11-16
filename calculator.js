// Calculator class
function Calculator(ni, nr, aoi) {
	this.ni = ni;
	this.nr = nr;
	this.aoi = aoi;

	this.getAOR = function() {
		aoiRadians = this.degreesToRadians(aoi);
		aorRadians = Math.asin(ni * Math.sin(aoiRadians) / nr);
		aorDegrees = this.radiansToDegrees(aorRadians);
		return aorDegrees;
	};

	this.getCriticalAngle = function() {
		criticalAngleRadians = Math.asin(nr / ni);
		criticalAngleDegrees = this.radiansToDegrees(criticalAngleRadians);
		return criticalAngleDegrees;
	};

	this.radiansToDegrees = function(radians) {
		return radians * (180/Math.PI);
	};

	this.degreesToRadians = function(degrees) {
		return degrees * (Math.PI/180);
	};
};
