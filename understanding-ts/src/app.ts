class Department{
    private static instance: Department;
    static getInstance(deptname: string, state: string){
        if(Department.instance){
            return this.instance;
        }else{
            this.instance = new Department(deptname, state);
            return this.instance;
        }
    }
    private constructor(private name: string, private state: string){}
}
const d1 = Department.getInstance('d1', 'Bihar')
const d2 = Department.getInstance('d2', 'Delhi')
console.log(d1);
console.log(d2);
