export default class Calendar {

    constructor() {
        this.weekday = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]
    }
    
    isLeapYear(y) {
        if (y % 400 == 0) {
            return true;
        } else if (y % 100 == 0) {
            return false;
        } else if (y % 4 == 0) {
            return true;
        } else {
            return false;
        }
    }

    countLeapYear(low, high){
        let i = low;
        let count = 0;
        while (i <= high) {
            if (this.isLeapYear(i)) {
                count++;
            }
            i++;
        }
        return count;
    }

    getDayMonth(m, y) {
        if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
            return 31;
        } else if (m == 2 && this.isLeapYear(y)) {
            return 29;
        } else if (m == 2 && !this.isLeapYear(y)) {
            return 28;
        } else {
            return 30;
        }
    }

    getDayCount(d, m, y) {
        let plus = 0;
        let i = 0;
        if (Math.abs(y - 2023) > 1) {
            if (y < 2023) {
                plus += (2022 - y) * 365;
                plus += this.countLeapYear(y+1, 2022);
                plus++;
            } else {
                plus += (y - 2024) * 365;
                plus += this.countLeapYear(2024, y-1);
            }
        } 
        if (y == 2023) {
            i = 1;
            while (i < m) {
                plus += this.getDayMonth(i, y);
                i++;
            }
            plus += d;
            plus--;
        } else if (y > 2023) {
            plus += 365;
            i = 1
            while (i < m) {
                plus += this.getDayMonth(i, y);
                i++;
            }
            plus += d;
            plus--;
        } else {
            i = m + 1
            while (i <= 12) {
                plus += this.getDayMonth(i, y);
                i++;
            }
            plus += this.getDayMonth(m, y) - d;
            plus *= -1;
        } 
        return plus;
    }

    getDay(d, m, y) {
        let intd = parseInt(d), intm = parseInt(m), inty = parseInt(y);
        let dayCount;
        if (intd > 0 && intd <= 31 && intm > 0 && intm <= 12) {
            if (intm == 2) {
                if (this.isLeapYear(inty) && intd > 29) {
                    return "Tanggal tidak valid";
                } else if (!this.isLeapYear(inty) && intd > 28) {
                    return "Tanggal tidak valid";
                } 
            } else if (intm == 4 || intm == 6 || intm == 9 || intm == 11) {
                if (intd > 30) {
                    return "Tanggal tidak valid";
                } 
            } 
            dayCount = this.getDayCount(intd, intm, inty);
            return d + "/" + m + "/" + y + " adalah hari " + this.weekday[dayCount % 7 < 0 ? dayCount % 7 + 7 : dayCount % 7];
        } else {
            return "Tanggal tidak valid";
        }
    }
}

