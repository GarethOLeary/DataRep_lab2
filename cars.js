class Vehicle{ // class called Vehicle
    constructor(make, model, year){ // constructor taking 3 arguments
     this.make = make; // creating local instances so they can be accessed
     this.model = model;
     this.year = year;
    }

    Information(){ // method called information
        // logs make model and year to the screen
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }

}

class Cars extends Vehicle{ // Cars class that inherits from Vehicle class
    constructor(make, model, year, doors){ // constructor taking 4 arguments
        super(make, model, year); // invoke the constructor on the parent class
        this.doors = doors; // local instance doors
    }

    Information(){ // Information method
        super.Information(); // invoke method information on vehicle class
        console.log(`Doors: ${this.doors}`); // logs doors to the screen
    }
}

let myCar = new Cars('VW', 'Golf', 2020, 4); // creating variable and creating instance of this class
myCar.Information(); // outputs the information