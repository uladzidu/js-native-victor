
test.skip('should be completed', () => {

    type peopleType = {
        name: string
        age: number
    }

    const people: Array<peopleType> = [
        {name: 'Andrew Ivanov', age: 33},
        {name: 'Aleks Petrov', age: 24},
        {name: 'Dmitry Sidorov', age: 18},

    ]

    const messages = people.map(m => `Hello ${m.name.split(' ')[0]}. You are ${m.age}`);

    expect(messages).toBe('Hello')
})








