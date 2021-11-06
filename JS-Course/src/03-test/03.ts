import { StudentType } from "../02-test/02"


export const sum = (a: number, b: number) => {
    return a + b;
}

export function sum2(a: number, b: number) {
    return a + b;
}



export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: 100,
        title: skill
    })
}

export const changedPropietyIsActive = (stu: StudentType) => {

    stu.isActive = true

}


export const doesStudentLiveInCity = (s: StudentType, cityName : string) => {

    return s.adress.city.title === cityName;

}






















// https://vk.com/wall-6315911_23197