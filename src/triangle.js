export function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

Triangle.prototype.checkType = function() {
  if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
    return "not a triangle";

  }  else if ((this.side1 === this.side2) && (this.side2 === this.side3)) {
    return "an equilateral triangle";

  } else if ((this.side1 === this.side2) || ((this.side1 === this.side3)) || ((this.side2 === this.side3))) {
    return "an isosceles triangle";

  } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
    return "a scalene triangle";
  } else {
    return "unable to compute";
  }
};

Triangle.prototype.totalLength = function() {
  return this.side1 + this.side2 + this.side3;
};

export function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.totalArea = function() {
  var area = this.radius * this.radius * 3.14;
  return area;
}



