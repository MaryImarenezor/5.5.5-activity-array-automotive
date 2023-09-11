class Vehicle {
    constructor(make, model, price, vin, year) {
        this.make = make;
        this.model = model;
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
