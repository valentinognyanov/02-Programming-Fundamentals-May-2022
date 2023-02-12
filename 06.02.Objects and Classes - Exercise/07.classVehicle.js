class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.fuel = fuel;
        this.parts.quality = this.parts.engine * this.parts.power;
    }
    drive(lostFuel) {
        return this.fuel -= lostFuel;
    }
}

    // input1:
    // let vehicle = new Vehicle('a', 'b', parts, 200);
    // vehicle.drive(100);
    // console.log(vehicle.fuel);
    // console.log(vehicle.parts.quality);
    
    //input2:
    // let parts = {engine: 9, power: 500};
    // let vehicle = new Vehicle('l', 'k', parts, 840);
    // vehicle.drive(20);
    // console.log(vehicle.fuel);