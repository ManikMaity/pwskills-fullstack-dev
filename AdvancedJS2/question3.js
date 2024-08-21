function Calculator() {
    this.value = 0;

    this.add = function(num) {
        this.value += num;
        return this;
    };

    this.subtract = function(num) {
        this.value -= num;
        return this; 
    };

    this.multiply = function(num) {
        this.value *= num;
        return this;
    };

    this.divide = function(num) {
        if (num !== 0) {
            this.value /= num;
        } else {
            console.error("Cannot divide by zero");
        }
        return this;
    };

    this.getResult = function() {
        return this.value;
    };
}

const calculator = new Calculator();
const calculation = calculator.add(5).subtract(2).multiply(3).divide(3).getResult();
console.log(calculation); // 3