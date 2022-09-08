"use strict";
class DataStorage {
    constructor(listofItems) {
        this.listOfItems = listofItems;
    }
    addItem(item) {
        this.listOfItems.push(item);
    }
    removeItem(item) {
        this.listOfItems.splice(this.listOfItems.indexOf(item), 1);
    }
    getItems() {
        return [...this.listOfItems];
    }
}
let numberDataStorage = new DataStorage([1, 2]);
numberDataStorage.addItem(3);
numberDataStorage.addItem(4);
numberDataStorage.removeItem(3);
console.log(numberDataStorage.getItems());
let stringDataStorage = new DataStorage(['Amar']);
stringDataStorage.addItem('Akbar');
stringDataStorage.addItem('Anthony');
stringDataStorage.removeItem('Akbar');
console.log(stringDataStorage.getItems());
//# sourceMappingURL=app.js.map