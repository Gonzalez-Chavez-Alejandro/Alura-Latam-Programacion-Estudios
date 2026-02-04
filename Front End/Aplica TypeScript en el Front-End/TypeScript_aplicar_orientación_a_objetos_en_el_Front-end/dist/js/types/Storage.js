export class Storage {
    constructor() { }
    save(key, value) {
        const valueToString = JSON.stringify(value);
        localStorage.setItem(key, valueToString);
    }
    read(key, restore) {
        const value = localStorage.getItem(key);
        if (value === null) {
            return null;
        }
        if (restore) {
            return JSON.parse(value, restore);
        }
        return JSON.parse(value);
    }
}
