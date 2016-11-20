// IMPORTANT: make sure to include calculator.js before this class

var greaterIndex = 1; // The medium with the greater index
var calc = new Calculator(1, 1, 15); // TODO can this be referenced without instantiating an unused calculator

function swap() {
	if (greaterIndex == 1) {
		// Perform calculations

		calc = new Calculator(calc.refractiveIndex.air, calc.refractiveIndex.diamond, 15);
		calc.printToConsole()

		// Update ui
		document.getElementById("layer1").setAttribute("d", "M 0, 0 L300,200");
		document.getElementById("layer2").setAttribute("d", "M300, 0 L400,200");
		//document.getElementById("layer3").setAttribute("d", "M400, 0 L700,200");
		// TODO Add these labels in .... They need to not interact with the svg position or arrow
		//document.getElementById("medium-i-label").innerHTML = "Air";
		//document.getElementById("medium-r-label").innerHTML = "Diamond";
		document.getElementById("description").innerHTML = "When medium 1(air) has a lower index of refraction than medium 2(diamond)";

		greaterIndex = 2;
	} else {
		// Perform calculations
	 	calc = new Calculator(calc.refractiveIndex.diamond, calc.refractiveIndex.air, 15);
		calc.printToConsole();

		// Update ui
		document.getElementById("layer1").setAttribute("d", "M 0, 0 L100,200");
		document.getElementById("layer2").setAttribute("d", "M100, 0 L400,200")
		//document.getElementById("layer3").setAttribute("d", "M400, 0 L500,200");
		// TODO Add these labels in .... They need to not interact with the svg position or arrow
		//document.getElementById("medium-i-label").innerHTML = "Diamond";
		//document.getElementById("medium-r-label").innerHTML = "Air";
		document.getElementById("description").innerHTML = "When medium 1(diamond) has a higher index of refraction than medium 2(air)";
		greaterIndex = 1;
	}


}
