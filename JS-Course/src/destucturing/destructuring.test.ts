
export type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string }>
    address: {
        street: {
            title: string
        }
    }
}

let props : ManType;

beforeEach(() => {
    props = {
        name: 'Vlados',
        age: 24,
        lessons: [
            {title: '1'},
            {title: '2'}
        ],
        address : {
            street : {
                title: 'Pilawska'
            }
        }
    }
})

test('', () => {

    const {age,lessons} = props
    const {title} = props.address.street

    expect(age).toBe(24)
    expect(lessons.length).toBe(2)
})