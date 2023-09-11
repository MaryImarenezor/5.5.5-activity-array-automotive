class Factory{
    constructor(location, owner) {
        this.location = location;
        this.owner = owner;
        this.vehicles = []

    }
    createVehicle(vehicle) {
        this.vehicles.push(vehicle)
    }
    listVehicles() {
        return this.vehicles
    }
    paintVehicle(vin, paintColor) {
        let vIndex = this.vehicles.findIndex(v => v.vin === vin)
        this.vehicles[vIndex].paint(paintColor)
    }
}

let factory = new Factory("Toyota", "Andrew Burr", undefined, undefined, undefined)
factory.createVehicle("Toyota Highlander")
factory.listVehicles()
factory.paintVehicle("1234", "white")
