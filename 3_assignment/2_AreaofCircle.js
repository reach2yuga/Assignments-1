/*2. Create one typescript application which contains one class named as Circle.
Circle class contains two characteristics (Class data members) as Radius, PI.
Create one parametrised constructor which accept one value and assign it to Radius. Value of
PI member is set to 3.14.
In Circle class we have to one method (Behaviours) as Area which will return area of Circle.
After designing the class create two objects of that class by providing some hardcoded value.
Call the method Area by using both the objects.
*/
var Circle = /** @class */ (function () {
    function Circle(rad) {
        this.Radius = rad;
        this.PI = 3.14;
    }
    Circle.prototype.Area = function () {
        return this.PI * this.Radius * this.Radius;
    };
    return Circle;
}());
var obj1 = new Circle(5);
var obj2 = new Circle(15);
console.log("var obj1 = new Circle(5);");
console.log("obj1.Area() is= " + obj1.Area());
console.log("var obj2 = new Circle(15);");
console.log("obj2.Area() is= " + obj2.Area());
