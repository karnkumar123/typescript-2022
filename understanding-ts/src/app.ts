class DataStorage<T extends number | string | boolean>{
    private listOfItems;

    constructor(listofItems: T[]){
        this.listOfItems = listofItems;
    }

    addItem(item: T){
        this.listOfItems.push(item);
    }

    removeItem(item: T){
        this.listOfItems.splice(this.listOfItems.indexOf(item),1);
    }

    getItems(): T[]{
        return [...this.listOfItems];
    }
}

let numberDataStorage = new DataStorage<number>([1,2]);
numberDataStorage.addItem(3);
numberDataStorage.addItem(4);
numberDataStorage.removeItem(3);
console.log(numberDataStorage.getItems());

let stringDataStorage = new DataStorage<string>(['Amar']);
stringDataStorage.addItem('Akbar');
stringDataStorage.addItem('Anthony');
stringDataStorage.removeItem('Akbar');
console.log(stringDataStorage.getItems());