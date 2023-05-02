// Class Stack
import {Array} from "./struct/Array.js";

export default class Randomize {

    constructor() {
        this.solution = new Array();
    }

    pick(num, textchoice, length) { 
        if (num < length) {
            for (let i = 0; i < num; i++) {
                let temp = Math.floor(Math.random() * length);
                console.log(temp);
                if (this.solution.indexOf(temp) == -1) {
                    this.solution.push(temp);
                } else {
                    i--;
                }
            }
            let ret = "Saya memilih ";
            for (let i = 1; i < this.solution.length()-1; i++) {
                ret += textchoice[this.solution.getElement(i)] + ",";
            }
            ret += textchoice[this.solution.getElement(this.solution.length()-1)];
            return ret;
        } else {
            return "Ga bisa milih! Jumlah pilihan terlalu sedikit"
        }
    }
}