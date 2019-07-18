/*3. Create one typescript application which contains one class named as CircleX which sill
inherits above Circle class.
In CircleX class we have to write one method (Behaviours) as Circumference which will return
circumference of circle.
After designing the class create two objects of that class by providing some hardcoded value.
Call Circumference and Area methods by using both the objects.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX(rad) {
        return _super.call(this, rad) || this;
    }
    CircleX.prototype.Circumference = function () {
        return 2 * this.PI * this.Radius;
    };
    return CircleX;
}(Circle));
var obj1 = new CircleX(5);
var obj2 = new CircleX(15);
console.log("var obj1 = new CircleX(5);");
console.log("obj1.Area() is= " + obj1.Area());
console.log("obj1.Circumference() is= " + obj1.Circumference());
console.log("var obj2 = new CircleX(15);");
console.log("obj2.Area() is= " + obj2.Area());
console.log("obj2.Circumference() is= " + obj2.Circumference());
