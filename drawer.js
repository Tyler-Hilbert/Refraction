// Class that returns values to draw on the UI and also contains the controller
function Drawer(calc) { // TODO can I force calc parameter to be a Calculator
  this.calc = calc;
  // TODO set these harcoded values
  this.sx = 100;              // Starting x position of light beam
  this.sy = 100;              // Starting y position of light beam
  this.WIDTH = 400;           // Width of the 2 mediums // TODO get this programmatically instead of hardcode
  // TODO refactor this to contact x
  this.mx = .5 * this.WIDTH;  // The middle x location / the contacting x position of 2 mediums

  this.drawIncidenceLine = function() {
    this.draw("incidence-line", this.sx, this.sy, this.mx, this.getContactY());
  }

  this.drawReflectedLine = function () {
    // TODO -- add this line in and also have a function that checks if this should be called or / maybe both the draw refraction line also
    var xr = this.WIDTH;
    var yr = Math.tan(calc.degreesToRadians(calc.aoi)) * xr;

    var xe = this.mx - xr;
    var ye = this.getContactY() + yr;

    console.log("mx:"+this.mx+",contact y"+this.getContactY()+",xe:"+xe+",ye"+ye);
    this.draw("reflection-line", this.mx, this.getContactY(), xe, ye);
  }

  // TODO remove displacement from this and draw onto layer 2;
  this.drawRefractionLine = function () {

    var endingY = this.mx * Math.tan(calc.degreesToRadians(calc.getAOR())) + this.getContactY();
    this.draw("refraction-line", this.mx, this.getContactY(), this.WIDTH, endingY); // TODO Update the WIDTH to not be off screen
    // TODO -- how do I make this draw based on the 2 layers instead of 1 big canvas?  I shouldn't have to update the y position, just the x because that's where the canvas is extended, correct?
    //var endingY = this.mx * Math.tan(calc.degreesToRadians(calc.getAOR())) + this.getContactY();
    //this.draw("refraction-line", this.mx, this.getContactY(), this.WIDTH, endingY);
  }

  // TODO make this private
  this.getContactY = function() {
    var displacementX = this.mx - this.sx; // The distance in the x direction the light must travel to meet the second medium
    var angleOfIncidenceRadians = calc.degreesToRadians(calc.aoi);
    var contactY = Math.tan(angleOfIncidenceRadians) * displacementX + this.sy;
    return contactY;
  }

  // TODO This is going to swap the x and y coordinates.  The math needs to be double checked for this and then have the coordinates swapped in the calculation not in the draw method.
  this.draw = function (id, x0, y0, x1, y1) {
    console.log(id + y0+","+x0+",L"+y1+","+x1)
    document.getElementById(id).setAttribute("d", "M"+y0+","+x0+",L"+y1+","+x1);
  }
}
