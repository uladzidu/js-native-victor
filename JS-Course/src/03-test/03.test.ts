import { StudentType } from "../02-test/02";
import { addSkill } from "./03";

let student: StudentType;

beforeEach( ()=> {
    student = {
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
} )


test("new skill should be added to student", () => {
    
    expect(student.technologies.length).toBe(3);

    addSkill(student, "JS");

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].id).toBe(100)
    expect(student.technologies[3].title).toBe("JS")
})