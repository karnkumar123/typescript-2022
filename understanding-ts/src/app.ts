function merge<T extends object, U extends object>(obj1: T, obj2: U){
    return Object.assign(obj1, obj2);
}

const ans1 = merge({name: 'ramesh'}, {age: 23})
console.log(ans1);

