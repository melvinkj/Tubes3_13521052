export default class Calendar {

    constructor() {
        this.weekday = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]
    }

    getDay(text) {
        let date = new Date(text);
        return text + " adalah hari " + this.weekday[date.getDay()]
    }
}

