import { student, StudentType } from "../02-test/02";

export const sum = (a: number, b: number) => {
    return a + b;
}


export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: 100,
        title: skill
    })
}

export function makeStudentPassive(s: StudentType) {
    s.isActive = false
}






























// https://vk.com/wall-6315911_23197