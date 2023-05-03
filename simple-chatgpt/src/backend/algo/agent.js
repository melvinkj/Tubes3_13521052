import BoyerMoore from "./bm.js";
import Calculator from "./calculator.js";
import Calendar from "./date.js";
import KMP from "./kmp.js";
import Levensthein from "./levensthein.js";
import Randomize from "./randomize.js";
import {Array} from "./struct/Array.js";

export default class Agent {
    constructor(text) {
        this.prompt = String(text);
    }

    process() {
        let tool;
        console.log()
        if (this.prompt.search(/\bhitung/i, ) != -1) {
            tool = new Calculator();
            return tool.evaluate(this.prompt.substring(this.prompt.search(/\bhitung/i) + 6))
        } else {
            return "Masukkan tidak valid";
        }
    }
}


let agent = new Agent("hitung 3 + 1/(7 + 1/(15 + 1/(1 + 1/(292 + 1/(1 + 1/(1 + 1/1))))))");
console.log(agent.process());

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
// console.log(x.calculate("ABABDABACDABABCABAB", "ABABCABAB"))

// var x = new BoyerMoore()
// console.log(x.calculate("ABAAABCD", "ABC"))