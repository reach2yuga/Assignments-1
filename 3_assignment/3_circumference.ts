
/*3. Create one typescript application which contains one class named as CircleX which sill
inherits above Circle class.
In CircleX class we have to write one method (Behaviours) as Circumference which will return
circumference of circle.
After designing the class create two objects of that class by providing some hardcoded value.
Call Circumference and Area methods by using both the objects.
*/

class Circle{
    Radius:number;
    PI:number;

    constructor(rad:number){
        this.Radius = rad;
        this.PI = 3.14;
    }

    Area():number{
        return this.PI*this.Radius*this.Radius;
    }
}

class CircleX extends Circle{            //inheritance
    constructor(rad:number){
        super(rad);
    }
    Circumference():number{
        return 2*this.PI*this.Radius;
    }
}

var obj1 = new CircleX(5);
var obj2 = new CircleX(15);
console.log("var obj1 = new CircleX(5);");
console.log("obj1.Area() is= "+obj1.Area());
console.log("obj1.Circumference() is= "+obj1.Circumference());
console.log("var obj2 = new CircleX(15);");
console.log("obj2.Area() is= "+obj2.Area());
console.log("obj2.Circumference() is= "+obj2.Circumference());