import { Triangle, Circle } from './../src/triangle.js';


describe('Triangle', function() {

  it('should correctly determine if a triangle is equilateral', function() {
    var triangle = new Triangle(3,3,3);
    expect(triangle.checkType()).toEqual("an equilateral triangle");
  });

  it('should correctly determine whether three lengths can be made into a triangle', function() {
    var notTriangle = new Triangle(3,9,22);
    expect(notTriangle.checkType()).toEqual("not a triangle");
  });

  it('should correctly determine whether three lengths can be made into a isosceles', function() {
    var isocTriangle = new Triangle(5,5,7);
    expect(isocTriangle.checkType()).toEqual("an isosceles triangle");
  });

  it('should correctly determine whether three lengths can be made into a scalene', function() {
    var scalTriangle = new Triangle(4,5,7);
    expect(scalTriangle.checkType()).toEqual("a scalene triangle");
  });
  
  it('should correctly determine whether three lengths can be made into a equilateral', function() {
    var scalTriangle = new Triangle(5,5,5);
    expect(scalTriangle.checkType()).toEqual("an equilateral triangle");
  });
  
  it('should correctly calculate total length', function() {
    var triangle = new Triangle(5,5,5);
    expect(triangle.totalLength()).toEqual(15);
  });
});

describe('Circle', function() {

  it('should test whether a Circle has radius', function() {
    var circle = new Circle(3);
    expect(circle.radius).toEqual(3);
  });
  
  it('should testa circle area', function() {
    var circle = new Circle(3);
    console.log(circle.totalArea())
    expect(circle.totalArea()).toEqual(28.26);
  });
});