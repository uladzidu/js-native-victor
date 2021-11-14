test.skip ("should take man older than 90", () => {

    const ages = [14,18,45,100,28,95];

    const oldAges = ages.filter((age : number) => age > 90);

    expect(oldAges.length).toBe(2)
    expect(oldAges[0]).toBe(100)
    expect(oldAges[1]).toBe(95)
})

test ("should take course chipper than 160$ ", () => {

    type CourseType = {
        title : string
        price : number
    }

    const courses = [
        { title : "CSS", price : 110},
        { title : "JS", price : 200},
        { title : "HTML", price : 150},
    ];


    const filteredArray = courses.filter(course => course.price < 160)

    expect(filteredArray.length).toBe(2)
    expect(filteredArray[0].price).toBe(110)
})