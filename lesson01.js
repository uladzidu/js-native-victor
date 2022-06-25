const obj = {}

obj.name = 'Vlad'
obj.age = 24
obj.status = 'Student'

let obj2 = {
    ...obj,
    friends: ['Alex', 'Bob', 'Serega']
}

console.log(obj)
console.log(obj2)

let copyObj2 = {
    ...obj2,
    friends : [...obj2.friends]
}

copyObj2.friends.push('Gyn')

console.log(copyObj2)

