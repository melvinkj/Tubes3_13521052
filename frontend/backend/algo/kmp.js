import {Array} from "./struct/Array.js";

// Knuth Morris Pratt Pattern Matching Algorithm

export default class KMP {
    
    constructor() {
        this.patternTable = new Array();
    }

    reinitializeTable(pattern, length) {
        this.patternTable.push(0);

        let len = 0;
        let i = 1;
        while (i < length) {
            if (pattern[i] == pattern[len]) {
                len++;
                this.patternTable.setElement(i, len);
                i++;
            } else {
                if (len != 0) {
                    len = this.patternTable.getElement(len-1);
                } else {
                    this.patternTable.setElement(i, 0);
                    i++;
                }
            }
        }
    }
    
    calculate(text, pattern) {
        let textInput = String(text),
            textLength = textInput.length,
            patternInput = String(pattern),
            patternLength = patternInput.length;

        this.reinitializeTable(patternInput, patternLength);

        let i = 0, 
            j = 0;
        while ((textLength - i) >= (patternLength - j)) {
            if (patternInput[j] == textInput[i]) {
                j++;
                i++;
            }
            if (j == patternLength) {
                return (i - j);
            } else if (i < textLength && patternInput[j] != textInput[i]) {
                if (j != 0)
                    j = this.patternTable.getElement(j - 1);
                else
                    i++;
            }
        }
        return -1;
    }
}
