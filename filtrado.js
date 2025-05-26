// Now we make a filter with arrows functions, where we look up an especific value

let students = [
    {name:"Alex", age: 20, Enginner: true},
    {name:"Andrew", age: 24, Enginner: true},
    {name:"Valentine", age: 19, Enginner: true},
    {name:"Apache", age: 22, Enginner: false},
    {name:"Kevin", age: 18, Enginner: false}
]

// essencial when you use the word into the function must be the same when you are doing comparasing..
// i speak about the word in spanish "Estudiante"
let Range = students.filter((Estudiante) => Estudiante.age >= 20);

// With this validation , we will know who is grather than 20 
console.log("Ranges age --> ", Range);