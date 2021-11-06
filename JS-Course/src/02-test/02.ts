
type LocalCityType = {
    title: string
    countryTitle: string
}

type AdressType = {
    streetTitle: string
    city: LocalCityType
}

type TechnologiesType = {
    id: number
    title: string
}

export type StudentType = {
    id : number
    name: string
    age: number
    isActive: boolean
    adress: AdressType
    technologies: Array<TechnologiesType>
}

export const student: StudentType = {
    id :1,
    name: "Vlad",
    age: 24,
    isActive: true,
    adress: {
        streetTitle: "Pilawska 6-22",
        city: { 
            title: "Wroclaw",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        }
    ]
}



console.log(student.technologies[2].title);

console.log(student.adress.city.title);
console.log(student.name);
