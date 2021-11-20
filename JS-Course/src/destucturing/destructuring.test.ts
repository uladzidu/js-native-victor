
type streetType = { title : string}
type addressType = { street : streetType}
type lessonsType = {title : number}
type propsType = {
    name : string
    age : number
    lessons : Array<lessonsType>
    address : addressType
}

let props : propsType;

beforeEach(() => {
    props = {
        name: 'Vlados',
        age: 24,
        lessons: [
            {title: 1},
            {title: 2}
        ],
        address : {
            street : {
                title: 'Pilawska'
            }
        }
    }
})

test('', () => {


    const {age,lessons, } = props
    const {title} = props.address.street


    expect(age).toBe(24)
    expect(lessons.length).toBe(2)

})