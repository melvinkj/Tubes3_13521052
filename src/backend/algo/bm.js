// Class Boyer Moore
import {Array} from "./struct/Array.js";

export default class BoyerMoore {
    constructor() {
        this.charTable = new Array();
    }
    
    charProcess(str) {
        let strProcess = String(str);
        let strlen = strProcess.length;

        for (let i = 0; i < 256; i++) {
            this.charTable.setElement(i, -1);
        }
        
        for (let i = 0; i < strlen; i++) {
            this.charTable.setElement(strProcess[i].charCodeAt(0), i);
        }    
    }

    calculate(text, pattern) {
        let textInput = String(text),
            textLength = textInput.length,
            patternInput = String(pattern),
            patternLength = patternInput.length;

        this.charProcess(patternInput);

        let idx = 0; 
        
        while(idx <= (textLength - patternLength)) {
            let j = patternLength - 1;
            while(j >= 0 && patternInput[j].toLowerCase() == textInput[idx + j].toLowerCase()) {
                j--;
            }

            if (j < 0) {
                return idx;
            } else {
                idx += Math.max(1, j - this.charTable.getElement(textInput[idx + j].charCodeAt(0)));
            }
        }
        return -1;
    }
}