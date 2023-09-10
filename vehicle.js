class Vehicle {
    constructor(make, model, color, price, vin, year) {
        this.make = make;
        this.model = model;
        this.color = undefined;
        this.price = price;
        this.vin = vin;
        this.year = year;
    }
    drive() {
        this.year + " " + this.make + " " + this.model + " " + "drives"
    }
    paint(color) {
        this.color = color
    }
}

let ford = new Vehicle("Ford", "F-150", undefined, 19000, 1234, 2015)
Vehicle.drive()
Vehicle.paint("blue")