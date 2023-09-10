class Factory{
    constructor(location, owner, vehicle, vin, paintColor) {
        this.location = location;
        this.owner = owner;
        this.vehicle = undefined;
        this.vin = undefined;
        this.paintColor = undefined;

    }
    createVehicle(vehicle) {
        this.vehicle = vehicle
    }
    listVehicles() {
        return this.vehicle
    }
    paintVehicle(vin, paintColor) {
        this.vin = vin;
        this.paintColor = paintColor;
    }
}

let factory = new Factory("Toyota", "Andrew Burr", undefined, undefined, undefined)
factory.createVehicle("Toyota Highlander")
factory.listVehicles()
factory.paintVehicle("1234", "white")