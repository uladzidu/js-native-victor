const todolists = [
    {
        id: 1,
        title: 'What to learn',
        filter: 'all',
        tasks: [
            {id: 10, title: 'JS', isDone: false},
            {id: 11, title: 'HTML', isDone: false},
            {id: 12, title: 'React', isDone: false},
        ]
    },
    {
        id: 2,
        title: 'What to buy',
        filter: 'all',
        tasks: [
            {id: 20, title: 'Milk', isDone: false},
            {id: 21, title: 'Butter', isDone: false},
            {id: 22, title: 'ice-cream', isDone: false},
        ]
    },
]

const tasks = {
    [todolists[0].id]: [
        {id: 10, title: 'JS', isDone: false},
        {id: 11, title: 'HTML', isDone: false},
        {id: 12, title: 'React', isDone: false},
    ],
    [todolists[1].id]: [
        {id: 20, title: 'Milk', isDone: false},
        {id: 21, title: 'Butter', isDone: false},
        {id: 22, title: 'ice-cream', isDone: false},
    ]
}

const nums = [10, 20, 30, 15, 40, 20]

// console.log(nums.reduce((acc, elem) => {
//     acc = acc + elem
//     return acc
// }, 0))

console.log(nums.reduce((acc, elem) => acc + elem))

// console.log(nums.reduce( (acc, elem) => {
//     acc < elem ? acc = elem : ''
//     return acc
// } ))

console.log(nums.reduce((acc, elem) => acc < elem ? elem : acc))


const students = [
    {
        id : 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 120
    },
    {
        id : 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 85
    },
    {
        id : 3,
        name: "Michel",
        age: 20,
        isMarried: false,
        scores: 89
    },
    {
        id : 4,
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
]

console.log(students.reduce((acc, elem) =>
    acc.scores < elem.scores ? elem : acc
))

console.log(students.reduce( (acc, elem) => acc + elem.scores, 0))

const mapped = students.map( elem => ({...elem, scores : elem.scores + 10}) )

console.log(students.reduce( (acc, elem) => {
    acc[elem.id] = {...elem}
    delete acc[elem.id].id
    return acc
}, {} ))




