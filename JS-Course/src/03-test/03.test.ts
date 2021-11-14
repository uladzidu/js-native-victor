import { StudentType } from "../02-test/02";
import { addSkill, changedPropietyIsActive, doesStudentLiveInCity } from "./03";

let student: StudentType;

beforeEach(() => {
    student = {
        id: 1,
        name: "Vlad",
        age: 24,
        isActive: false,
        adress: {
            streetTitle: "Pilawska 6-22",
            city: {
                title: "Wroclaw",
                countryTitle: "Poland"
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
})


test.skip("new skill should be added to student", () => {

    expect(student.technologies.length).toBe(3);

    addSkill(student, "JS");

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].id).toBe(100)
    expect(student.technologies[3].title).toBe("JS")
})

test.skip("boolean should be true", () => {

    expect(student.isActive).toBe(false);

    changedPropietyIsActive(student);

    expect(student.isActive).toBe(true);

})


test.skip("does student live in city?", () => {

let result1 = doesStudentLiveInCity(student, "Moscow")
let result2 = doesStudentLiveInCity(student, "Wroclaw")

expect(result1).toBe(false)
expect(result2).toBe(true)

})