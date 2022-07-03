
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw');
    }
};

//Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw from Function Factory');
        }
    };
}

const circle2 = createCircle(1);
circle2.draw();
circle.draw();

//Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('constructor function draw');
    }
}
const another = new Circle(1);

//Adding or removing properties
another.location = {x: 1}

//Iterating object members
for (let key in another) {
    console.log(key,another[key]);
}

const keys = Object.keys(another);
console.log(keys);

//Checking for properties
if('radius' in another)
    console.log('Another has a radius.')