// Base class
class Shape {
    draw() {
        console.log('Drawing a shape');
    }
}

// Subclass- Circle
class Circle extends Shape {
    draw() {
        console.log('Drawing a circle');
    }
}

// Subclass- Rectangle
class Rectangle extends Shape {
    draw() {
        console.log('Drawing a rectangle');
    }
}




function drawShape(shape) {
    shape.draw();
}

// Creating instances of Circle and Rectangle
const myCircle = new Circle();
const myRectangle = new Rectangle();

// Polymorphism demonstration
drawShape(myCircle);    // Drawing a circle
drawShape(myRectangle); // Drawing a rectangle
