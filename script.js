var greaterIndex = 1; // The medium with the greater index

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


function swap() {
	if (greaterIndex == 1) {
		document.getElementById("layer1").setAttribute("d", "M 0, 0 L300,200");
		document.getElementById("layer2").setAttribute("d", "M300, 0 L400,200");
		document.getElementById("layer3").setAttribute("d", "M400, 0 L700,200");
		document.getElementById("description").innerHTML = "When medium 1 has a lower index of refraction than medium 2";
		greaterIndex = 2;
	} else {
		document.getElementById("layer1").setAttribute("d", "M 0, 0 L100,200");
		document.getElementById("layer2").setAttribute("d", "M100, 0 L400,200");
		document.getElementById("layer3").setAttribute("d", "M400, 0 L500,200");
		document.getElementById("description").innerHTML = "When medium 1 has a higher index of refraction than medium 2";
		greaterIndex = 1;
	}

	// Calculator test
	var calc = new Calculator(1.5, 1, 30);
	console.log(calc.getAOR());
	console.log(calc.getCriticalAngle());
}
