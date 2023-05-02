import Calculator from "./calculator.js";
import Calendar from "./date.js";
import KMP from "./kmp.js";
import Levensthein from "./levensthein.js";
import Randomize from "./randomize.js";
import {Array} from "./struct/Array.js";

// var x = new Randomize();
// var y = new Array([1,2,3,4,5,6,7,8]);

// console.log(x.pick(5, ["eugene", "yap", "jin", "quan"], 4));

// var x = new Calendar;
// console.log(x.getDay("2023-05-03"));

// var x = new Levensthein();
// console.log(x.calculate("Bagaimana caranya menjadi seorang", "Bagaimana caranya menjadi seekor"))

var x = new KMP()

console.log(x.calculate("ABABDABACDABABCABAB", "ABABCABAB"))