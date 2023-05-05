import Calculator from "./calculator.js";
import Calendar from "./date.js";
import Levensthein from "./levensthein.js";
import Randomize from "./randomize.js";
import {Array} from "./struct/Array.js";

export default class Agent {
    constructor() {
        this.prompt = "";
        this.mode = true; // TRUE FOR KMP, FALSE FOR BM
    }

    process(text, mode) {
        let tool;
        let res;
        this.prompt = text;
        this.mode = mode;
        this.prompt = this.prompt.replaceAll(" ", "");
        if (this.prompt.search(/[0-9]{1,2}[\/-][0-9]{1,2}[\/-][0-9]{4}/i) != -1 || this.prompt.search(/\bhariapa[0-9]{1,2}[\/-][0-9]{1,2}[\/-][0-9]{4}/i) != -1) {
            tool = new Calendar();
            if (this.prompt.search(/\bhariapa[0-9]{1,2}[\/-][0-9]{1,2}[\/-][0-9]{4}/i) != -1) {
                this.prompt = this.prompt.substring(7);
            }
            let d = this.prompt.substring(0, this.prompt.search(/[\/-]/));
            this.prompt = this.prompt.substring(this.prompt.search(/[\/-]/) + 1);
            let m = this.prompt.substring(0, this.prompt.search(/[\/-]/));
            this.prompt = this.prompt.substring(this.prompt.search(/[\/-]/) + 1);
            return tool.getDay(d, m, this.prompt);
        } else if (this.prompt.search(/\bhitung/i) != -1 || this.prompt.search(/\b([0-9]+[+-/^*])*[0-9]+/i) != -1) {
            tool = new Calculator(mode);
            if (this.prompt.search(/\bhitung/i) != -1) {
                res = tool.evaluate(this.prompt.substring(this.prompt.search(/\bhitung/i) + 6));
            } else {
                res = tool.evaluate(this.prompt);
            }           
            return isNaN(res) ? "Perhitungan tidak valid": res;
        } else if (this.prompt.search(/\bpilih[0-9]+dari/i) != -1) {
            this.prompt = this.prompt.substring(5);
            console.log(this.prompt);
            let num = 0;
            if (this.prompt.search(/[0-9]+dari/i) == 0) {
                num = parseInt(this.prompt.substring(0, this.prompt.search(/dari/i)));
            } else {
                return "Jumlah pilihan bukan sebuah angka!";
            } 
            this.prompt = this.prompt.substring(this.prompt.search(/dari/) + 4);
            let choice = [];
            if (this.prompt.search(/[0-9]+-[0-9]+/i) == 0) {
                let low = parseInt(this.prompt.substring(0, this.prompt.search(/-/i)));
                let high = parseInt(this.prompt.substring(this.prompt.search(/-/i)+1, this.prompt.length));
                if (low <= high) {
                    tool = new Randomize()
                    for (let i = low; i < high; i++) {
                        choice.push(i);
                    }
                    return tool.pick(num, choice, choice.length);
                } else {
                    return "Batas atas lebih tinggi dari batas bawah!";
                }         
            } else if (this.prompt.search(/([\w]+,)+\w+/i) == 0) {
                while (this.prompt.search(',') != -1) {
                    choice.push(this.prompt.substring(0, this.prompt.search(',')));
                    this.prompt = this.prompt.substring(this.prompt.search(',')+1);
                    tool = new Randomize()
                }
                return tool.pick(num, choice, choice.length);
            } else {
                return "Bukan sebuah range atau enumerasi!";
            }
        } else {
            return "Masukkan tidak valid";
        }
    }
}


let agent = new Agent();
console.log(agent.process("1*2+2+3+4", true));

// var x = new Calculator();
// console.log(x.evaluate("1+2+3"));

// var x = new Randomize();
// var y = new Array([1,2,3,4,5,6,7,8]);
// console.log(x.pick(5, ["eugene", "yap", "jin", "quan"], 4));

// var x = new Calendar;
// console.log(x.getDay("2023-05-03"));

// var x = new Levensthein();
// console.log(x.calculate("Bagaimana caranya menjadi seorang", "Bagaimana caranya menjadi seekor"))

// var x = new KMP()
// console.log(x.calculate("ABABDABACDABABCABAB", "ABAABA"))

// var x = new BoyerMoore()
// console.log(x.calculate("ABAAABCD", "ABC"))