
function incUser (u : UserType) {
    u.age = u.age ++
}

type UserType = {
    name : string
    age : number
}

test('09 test', () => {

    let user = {
        name : 'Vlad',
        age : 24
    }

    incUser(user)

    expect(user.age).toBe(24)

})