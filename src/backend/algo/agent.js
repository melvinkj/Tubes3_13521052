import Calculator from "./calculator.js";
import Calendar from "./date.js";
import Levensthein from "./levensthein.js";
import KMP from "./kmp.js"
import BoyerMoore from "./bm.js"
import Randomize from "./randomize.js";

export default class Agent {
    constructor() {
        this.prompt = "";
        this.mode = true; // TRUE FOR KMP, FALSE FOR BM
        this.kmp = new KMP();
        this.bm = new BoyerMoore();
        this.lev = new Levensthein();
    }

    async process(text, mode) {
        let tool;
        let res;
        this.prompt = text;
        this.mode = mode;
        if (this.prompt.search(/[0-9]{1,2}[\/-][0-9]{1,2}[\/-][0-9]{4}/i) != -1 || this.prompt.search(/\bhariapa[0-9]{1,2}[\/-][0-9]{1,2}[\/-][0-9]{4}/i) != -1) {
            this.prompt = this.prompt.replaceAll(" ", "");
            tool = new Calendar();
            if (this.prompt.search(/\bhariapa[0-9]{1,2}[\/-][0-9]{1,2}[\/-][0-9]{4}/i) != -1) {
                this.prompt = this.prompt.substring(7);
            }
            let d = this.prompt.substring(0, this.prompt.search(/[\/-]/));
            this.prompt = this.prompt.substring(this.prompt.search(/[\/-]/) + 1);
            let m = this.prompt.substring(0, this.prompt.search(/[\/-]/));
            this.prompt = this.prompt.substring(this.prompt.search(/[\/-]/) + 1);
            return tool.getDay(d, m, this.prompt);
        } else if (this.prompt.search(/\bhitung/i) != -1 || this.prompt.search(/\bberapa/i) != -1) {
            this.prompt = this.prompt.replaceAll(" ", "");
            tool = new Calculator(mode);
            if (this.prompt.search(/\bhitung/i) != -1) {
                res = tool.evaluate(this.prompt.substring(this.prompt.search(/\bhitung/i) + 6));
            } else {
                res = tool.evaluate(this.prompt);
            }           
            return isNaN(res) ? "Perhitungan tidak valid": res;
        } else if (this.prompt.search(/\bpilih.*[0-9]+.*dari/i) != -1) {
            this.prompt = this.prompt.replaceAll(" ", "");
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
                this.prompt = this.prompt.replaceAll(" ", "");
                while (this.prompt.search(',') != -1) {
                    choice.push(this.prompt.substring(0, this.prompt.search(',')));
                    this.prompt = this.prompt.substring(this.prompt.search(',')+1);
                    tool = new Randomize()
                }
                return tool.pick(num, choice, choice.length);
            } else {
                return "Bukan sebuah range atau enumerasi!";
            }

        } else if (this.prompt.search(/Tambahkan pertanyaan.*dengan jawaban/i) == 0) {
            let a = this.prompt.substring(this.prompt.search(/dengan jawaban/i) + 15);
            this.prompt = this.prompt.substring(0, this.prompt.search(/dengan jawaban/i));
            let q = this.prompt.substring(21);

            const getQuestion = await fetch(`/api/questions`, {
                method: "GET",
            });
            const array = await getQuestion.json();

            let ans = -1;
            let idx = 0;
            let found = false;
            let levdis = []
            array.forEach(element => {
                let i;
                if (this.mode) {
                    i = this.kmp.calculate(element.question, q);
                } else {
                    i = this.bm.calculate(element.question, q);
                }
                if (i != -1 && !found) {
                    ans = idx;
                    found = true;
                } 
                levdis.push(this.lev.calculate(element.question, q));
                idx++;
            });
            if (ans != -1) {
                const updateQA = await fetch(`/api/questions`, {
                    method: "PUT",
                    body: JSON.stringify({
                        question: q,
                        answer: a,
                    })
                })
                return "Jawaban pertanyaan berhasil update";
            } else {
                if (Math.min(levdis) < 0.1) {
                    const updateQA = await fetch(`/api/questions`, {
                        method: "PUT",
                        body: JSON.stringify({
                            question: array[levdis.indexOf(Math.min(...levdis))].question,
                            answer: a,
                        })
                    })
                    return "Jawaban pertanyaan berhasil update";
                } else {
                    const insertQuestion = await fetch(`/api/questions`, {
                                                        method: "POST",
                                                        body: JSON.stringify({
                                                            question: q,
                                                            answer: a,
                                                        })
                                                    })
                    return "Pertanyaan berhasil ditambahkan";
                }
            }
        }else if (this.prompt.search(/Hapus pertanyaan/i) == 0) {
            let q = this.prompt.substring(17);

            const getQuestion = await fetch(`/api/questions`, {
                method: "GET",
            });
            const array = await getQuestion.json();

            let ans = -1;
            let idx = 0;
            let found = false;
            let levdis = []
            array.forEach(element => {
                let i;
                if (this.mode) {
                    i = this.kmp.calculate(element.question, q);
                } else {
                    i = this.bm.calculate(element.question, q);
                }
                if (i != -1 && !found) {
                    ans = idx;
                    found = true;
                } 
                levdis.push(this.lev.calculate(element.question, q));
                idx++;
            });
            if (ans != -1) {
                console.log(q);
                const deleteQA = await fetch(`/api/questions/${encodeURIComponent(q)}`, {
                    method: "DELETE",
                })
                return "Pertanyaan " + q + " sedang di hapus";
            } else {
                if (Math.min(levdis) < 0.1) {
                    const deleteQA = await fetch(`/api/questions/${array[levdis.indexOf(Math.min(...levdis))].question}`, {
                        method: "DELETE",
                    })
                    return "Pertanyaan " + q + " sedang di hapus";
                } else {
                    let text = "Pertanyaan gagal dihapus! Mungkin maksud Anda:\n";
                    for (let i = 0; i < 3; i++) {
                        let temp = array[levdis.indexOf(Math.min(...levdis))];
                        text += String(i+1) + ". " + String(temp.question) + "\n";
                        levdis[levdis.indexOf(Math.min(...levdis))] = 1;
                    }
                    return text;
                }
            }
        } else {
            const getQuestion = await fetch(`/api/questions`, {
                method: "GET",
            });
            const array = await getQuestion.json();

            let ans = -1;
            let idx = 0;
            let found = false;
            let levdis = []
            array.forEach(element => {
                let i;
                if (this.mode) {
                    i = this.kmp.calculate(element.question, this.prompt);
                } else {
                    i = this.bm.calculate(element.question, this.prompt);
                }
                if (i != -1 && !found) {
                    ans = idx;
                    found = true;
                } 
                levdis.push(this.lev.calculate(element.question, this.prompt));
                idx++;
            });
            if (ans != -1) {
                return String(array[ans].answer);
            } else {
                if (Math.min(levdis) < 0.1) {
                    console.log(array[levdis.indexOf(Math.min(...levdis))]);
                    return array[levdis.indexOf(Math.min(...levdis))].answer;
                } else {
                    let text = "Masukkan tidak valid! Mungkin maksud Anda:\n";
                    for (let i = 0; i < 3; i++) {
                        let temp = array[levdis.indexOf(Math.min(...levdis))];
                        text += String(i+1) + ". " + String(temp.question) + "\n";
                        levdis[levdis.indexOf(Math.min(...levdis))] = 1;
                    }
                    return text;
                }
            }
        }
    }
}