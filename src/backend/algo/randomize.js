// Class Randomize
import {Array} from "./struct/Array.js";

export default class Randomize {

    constructor() {
        this.solution = new Array();
    }

    pick(num, textchoice, length) { 
        if (num <= length) {
            for (let i = 0; i < num; i++) {
                let temp = Math.floor(Math.random() * length);
                if (this.solution.indexOf(temp) == -1) {
                    this.solution.push(temp);
                } else {
                    i--;
                }
            }
            let ret = "Saya memilih ";
            for (let i = 0; i < this.solution.length(); i++) {
                ret += textchoice[this.solution.getElement(i)] 
                if (i < this.solution.length()-2) {
                    ret += ", ";
                }
                if (i == this.solution.length()-2 && this.solution.length() > 2) {
                    ret += ", dan ";
                }
                if (i == this.solution.length()-2 && this.solution.length() > 1) {
                    ret += " dan ";
                }
            }
            return ret;
        } else {
            return "Ga bisa milih! Jumlah pilihan terlalu sedikit"
        }
    }
}