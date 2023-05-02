// Class Levensthein

export default class Levensthein {
    calculate(text1, text2) {
        let text1str = String(text1);
        let text2str = String(text2);
        let minlen, denom;
        let val = 0;

        if (text1str.length < text2str.length) {
            minlen = text1str.length;
            denom = text2str.length
        } else {
            minlen = text2str.length;
            denom = text1str.length;
        }

        for (let i = 0; i < minlen; i++) {
            if (text1str[i] != text2str[i]) {
                val++;
            }
        }

        val += Math.abs(denom - minlen);

        return val/denom;
    }
}