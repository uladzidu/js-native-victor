
const students = [
    {
        name : "Bob",
        age : 22,
        isMarried : true,
        scores : 120
    },
    {
        name : "Alex",
        age : 21,
        isMarried : true,
        scores : 85
    },
    {
        name : "Michel",
        age : 20,
        isMarried : false,
        scores : 89
    },
    {
        name : "John",
        age : 19,
        isMarried : false,
        scores : 100
    }
]


const arrayOfNames = students.map( element => element.name )

const increasedScoresInStudents = students.map(e => e)

console.log(students)
console.log(increasedScoresInStudents)