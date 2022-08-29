type Person = {
    name: string;
    greet?(name: string): string;
}
let user: Person = {
    name: 'Karan'
}