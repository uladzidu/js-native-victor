const bob = {
    name : "Bob",
    age : 23,
    isStudent : true,
    friends : ["Ann", "Dimon"]
}

const alex = bob
alex.name = "Alex"

//const copyBob = {...bob}

const copyBob = {...bob, friends : [...bob.friends]}

bob.name = "Bob"
bob.friends.push("Helga")
console.log(bob)
console.log(copyBob)


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


const stTostring = st => `Hi! I am ${st.name}. I have ${st.scores}`