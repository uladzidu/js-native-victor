import { StudentType } from "../02-test/02"
import { addSkill, makeStudentPassive } from "./03";

let student : StudentType;
beforeEach( () => {
    student  = {
        id : 1,
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

} )


test ("student isActive should be false" , () => {
    expect(student.isActive).toBe(true)

    makeStudentPassive(student)

    expect(student.isActive).toBe(false)

})