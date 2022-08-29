"use strict";
class Department {
    constructor(name, state) {
        this.name = name;
        this.state = state;
    }
    static getInstance(deptname, state) {
        if (Department.instance) {
            return this.instance;
        }
        else {
            this.instance = new Department(deptname, state);
            return this.instance;
        }
    }
}
const d1 = Department.getInstance('d1', 'Bihar');
const d2 = Department.getInstance('d2', 'Delhi');
console.log(d1);
console.log(d2);
//# sourceMappingURL=app.js.map