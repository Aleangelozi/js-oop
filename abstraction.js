function Circle(radius) {
    this.radius = radius;

    //Abstraction can be put in place with local variables and functions.
    let defaultLocation = {x: 0, y: 0};

    let computeOptimumLocation = function() {
        // ...
    }

    this.draw = function() {
        computeOptimumLocation();

        console.log('constructor function draw');
    };

    //Getting local variables
    this.getDefaultLocation = function() {
        return defaultLocation;
    };

    //Recommended way to define getters and setters.
    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            defaultLocation = value;
        }
    });
}

const circle = new Circle(1);
console.log('Default location', circle.defaultLocation);
