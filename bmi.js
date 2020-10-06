class BMI { // class called BMI
    constructor(height, weight) { // constructor taking two arguments
        this.height = height; // creating local instances so they can be accessed
        this.weight = weight;
    }

    calculateBMI() { // method
        let bmi = this.weight / (this.height ** 2); // calc for BMI
        return bmi; // returns bmi
    }

}

let MyBmi = new BMI(2, 86); // arguments for height/weight inputted
let calculatedBMI = MyBmi.calculateBMI(); // invoke calculateBMI method
console.log(calculatedBMI); // output to screen