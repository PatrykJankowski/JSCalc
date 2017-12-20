class Calculator {

    constructor() {
        this.val1 = 0;
        this.val2 = 0;
        this.operation = "";
        this.check = false;
    }

    setValue(value) {
        if (this.check == true || document.getElementById("screen").innerHTML == 0) {
            document.getElementById("screen").innerHTML = ""; /////////////////////////
            this.check = false;
        }
        document.getElementById("screen").innerHTML += value;
    }

    setOperation(operation) {
        if (!this.check) {
            this.calculate();
            this.operation = operation;
        }
    }

    calculate() {
        this.val2 = this.val1;
        this.val1 = parseFloat(document.getElementById("screen").innerHTML);

        switch(this.operation) {
            case "sum":
                this.sum();
                break;
            case "sub":
                this.sub();
                break;
            case "mul":
                this.mul();
                break;
            case "div":
                this.div();
                break;
            case "mod":
                this.mod();
                break;
        }
        this.check = true;
    }

    sum() {
        this.val1 += this.val2;
        document.getElementById("screen").innerHTML = +this.val1.toFixed(5);
    }
    sub() {
        this.val1 = this.val2 - this.val1;
        document.getElementById("screen").innerHTML = +this.val1.toFixed(5);
    }
    mul() {
        this.val1 = this.val2 * this.val1;
        document.getElementById("screen").innerHTML = +this.val1.toFixed(5);
    }
    div() {
        this.val1 = this.val2 / this.val1;
        document.getElementById("screen").innerHTML = +this.val1.toFixed(5);
    }
    mod() {
        this.val1 = this.val2 % this.val1;
        document.getElementById("screen").innerHTML = +this.val1.toFixed(5);
    }
    c() {
        this.val1 = "";
        this.val2 = "";
        this.operation = "";
        this.check = false;
        document.getElementById("screen").innerHTML = 0;
    }

}

let calculator = new Calculator();