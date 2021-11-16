// @ts-ignore
test.skip('should take man older than 90', () => {

    const ages = [14, 18, 45, 100, 28, 95];

    const oldAges = ages.filter((age: number) => age > 90);

    expect(oldAges.length).toBe(2)
    expect(oldAges[0]).toBe(100)
    expect(oldAges[1]).toBe(95)
})

test.skip('should take course chipper than 160$ ', () => {


    const courses = [
        {title: 'CSS', price: 110},
        {title: 'JS', price: 200},
        {title: 'HTML', price: 150},
    ];


    const filteredArray = courses.filter(course => course.price < 160)

    expect(filteredArray.length).toBe(2)
    expect(filteredArray[0].price).toBe(110)
})

test.skip('get only completed tasks', () => {

    const tasks = [
        {id: 1, title: 'bread', isDone: false},
        {id: 2, title: 'milk', isDone: true},
        {id: 3, title: 'salt', isDone: false},
        {id: 4, title: 'sugar', isDone: true},
        {id: 5, title: 'tea', isDone: false},
    ]

    const filteredTasks = tasks.filter(task => task.isDone)

    expect(filteredTasks.length).toBe(2)
    expect(filteredTasks[0].title).toBe('milk')
})


test.skip('get only uncompleted tasks', () => {

    const tasks = [
        {id: 1, title: 'bread', isDone: false},
        {id: 2, title: 'milk', isDone: true},
        {id: 3, title: 'salt', isDone: false},
        {id: 4, title: 'sugar', isDone: true},
        {id: 5, title: 'tea', isDone: false},
    ]

    const uncompletedTasks = tasks.filter(task => !task.isDone)

    expect(uncompletedTasks.length).toBe(3)
    expect(uncompletedTasks[0].title).toBe('bread')
})

