// Class that returns values to draw on the UI and also contains the controller
function Drawer(calc) { // TODO can I force calc parameter to be a Calculator
  this.calc = calc;
  // TODO set these harcoded values
  this.sx = 100;              // Starting x position of light beam
  this.sy = 100;              // Starting y position of light beam
  this.WIDTH = 800;           // Width of the 2 mediums
  // TODO refactor this to contact x
  this.mx = .5 * this.WIDTH;  // The middle x location / the contacting x position of 2 mediums

  this.drawIncidenceLine = function() {
    this.draw("layer1", this.sx, this.sy, this.mx, this.getContactY());
  }

  this.drawReflectedLine = function () {
    // TODO -- add this line in and also have a function that checks if this should be called or / maybe both the draw refraction line also
  }

  // TODO remove displacement from this and draw onto layer 2;
  this.drawRefractionLine = function () {
    var endingY = this.mx * Math.tan(calc.degreesToRadians(calc.getAOR())) + this.getContactY();
    this.draw("layer2", this.mx, this.getContactY(), this.WIDTH, endingY); // TODO Update the WIDTH to not be off screen
  }

  // TODO make this private
  this.getContactY = function() {
    var displacementX = this.mx - this.sx; // The distance in the x direction the light must travel to meet the second medium
    var angleOfIncidenceRadians = calc.degreesToRadians(calc.aoi);
    var contactY = Math.tan(angleOfIncidenceRadians) * displacementX + this.sy;
    return contactY;
  }

  this.draw = function (id, x0, y0, x1, y1) {
    document.getElementById(id).setAttribute("d", "M"+x0+","+y0+",L"+x1+","+y1);
  }
}
