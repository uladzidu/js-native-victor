
type UserPropsType = {
    [key : string] : { id : number, name : string}
}

export let users : UserPropsType = {
    '101': {id: 101, name: 'Dimych'},
    '113231': {id: 113231, name: 'Dimych'},
    '321312': {id: 321312, name: 'Dimych'},
    '1': {id: 1, name: 'Dimych'},
}

let user = { id: 100500, name : 'Igor'}
users[user.id] = user
users[user.id].name = 'Vitya'

export const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 113231, name: 'Dimych'},
    {id: 321312, name: 'Dimych'},
    {id: 1, name: 'Dimych'},
]


/*const user = {
    name : 'Vlad',
    age : 22,
    address : {
        city : {
            title : 'Wroclaw'
        }
    }
}*/

const usersObj = {
    '0' : 'Vlad',
    '1' : 'Vlad2',
    '2' : 'Vlad3',
    '3' : 'Vlad4'
}
usersObj [ {} ] = 'hey'