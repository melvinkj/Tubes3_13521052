// Class Stack
import {Array} from "./struct/Array.js";

export default class Calculator {
    constructor() {
        this.number = new Array();
        this.operator = new Array();
        this.bracket = new Array();
    }

    evaluate(text) {
        let strtext = String(text);
        strtext = text.replaceAll(" ", "");
        let textlength = strtext.length;
        let currentIndex = 0,
            result = 0;
        let currentchar = strtext[currentIndex];
        let firstNumberNegative = false;

        if ("1234567890+-/.*()^".indexOf(currentchar) == -1) {
            return NaN;
        } else if (currentchar == "-") {
            firstNumberNegative = true;
            currentIndex++;
        } else if (currentchar == "+") {
            currentIndex++;
        }

        while (currentIndex < textlength) {
            let number1 = 0;
            currentchar = strtext[currentIndex];
            let parseNumber = false;
            let divisor = 1;

            while (!isNaN(strtext[currentIndex])) {
                parseNumber = true;
                if (divisor == 1) {
                    number1 = (number1*10) + parseInt(strtext[currentIndex]);
                } else {
                    number1 = (number1) + parseFloat(strtext[currentIndex]/divisor);
                }
                
                currentIndex++;
                if (currentIndex == strtext.length) {
                    break;
                }
                currentchar = strtext[currentIndex];
                if (currentchar == "." && divisor == 1) {
                    currentIndex++;
                    if (currentIndex == strtext.length) {
                        break;
                    }
                    currentchar = strtext[currentIndex];
                    divisor *= 10;
                } else if (currentchar == "." && divisor != 1) {
                    return NaN;
                } else if (divisor != 1) {
                    divisor *= 10
                }
            } 
            // (parseInt(strtext[i]) == NaN)
            if (parseNumber) {
                this.number.push(number1);
            }
            
            if (currentIndex == strtext.length) {
                break;
            }

            if (currentchar == "(") {
                if (this.number.length() != 0) {
                    this.operator.push("*");
                }
            } else {
                this.operator.push(strtext[currentIndex]);
                currentIndex++;
                currentchar = strtext[currentIndex];
            }

            if (currentchar == "(") {
                this.bracket.push("(");
                let subtext = "";
                currentIndex++;
                while (currentIndex < textlength && this.bracket.length() != 0) {
                    currentchar = strtext[currentIndex];
                    if (currentchar == ")") {
                        this.bracket.pop();
                        if (this.bracket.length() != 0) {
                            subtext += currentchar;
                        }
                    } else if (currentchar == "(") {
                        subtext += currentchar;
                        this.bracket.push("(");
                    } else {
                        subtext += currentchar;
                    }
                    currentIndex++;
                }
                if (this.bracket.length() == 0) {
                    let newstack = new Calculator();
                    console.log(subtext);
                    this.number.push(newstack.evaluate(subtext));
                    if (currentIndex < textlength && "1234567890".indexOf(strtext[currentIndex]) != -1) {
                        this.operator.push("*");
                    }
                } else {
                    return NaN
                }
            }
        }

        console.log(this.number.toString());
        console.log(this.operator.toString());

        if (this.number.length() != this.operator.length() + 1) {
            return NaN;
        } else {
            if (firstNumberNegative) {
                this.number.setElement(0, this.number.getElement(0) * -1);
            }
            while(this.operator.indexOf("^") != -1) {
                let idx = this.operator.indexOf("^");
                let number1 = this.number.getElement(idx);
                let number2 = this.number.getElement(idx+1);
                
                this.number.setElement(idx, Math.pow(number1, number2));

                this.operator.remove(idx);
                this.number.remove(idx+1);
            } 
            
            while(this.operator.indexOf("*") != -1 || this.operator.indexOf("/") != -1) {
                let idx1 = this.operator.indexOf("*");
                let idx2 = this.operator.indexOf("/");
                let idx;
                if (idx1 == -1) {
                    idx = idx2;
                } else if (idx2 == -1) {
                    idx = idx1;
                } else {
                    idx = idx1 < idx2 ? idx1 : idx2;
                }

                let number1 = this.number.getElement(idx);
                let number2 = this.number.getElement(idx+1);

                this.number.setElement(idx, idx == idx1 ? number1 * number2 : number1 / number2);

                this.operator.remove(idx);
                this.number.remove(idx+1);
            } 

            while(this.operator.indexOf("+") != -1 || this.operator.indexOf("-") != -1) {
                let idx1 = this.operator.indexOf("+");
                let idx2 = this.operator.indexOf("-");
                let idx;
                if (idx1 == -1) {
                    idx = idx2;
                } else if (idx2 == -1) {
                    idx = idx1;
                } else {
                    idx = idx1 < idx2 ? idx1 : idx2;
                }
                
                let number1 = this.number.getElement(idx);
                let number2 = this.number.getElement(idx+1);

                this.number.setElement(idx, idx == idx1 ? number1 + number2 : number1 - number2);

                this.operator.remove(idx);
                this.number.remove(idx+1);
            }
            return this.number.getElement(0);
        }
    }
}

