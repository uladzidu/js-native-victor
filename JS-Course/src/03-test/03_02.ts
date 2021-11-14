import {CityType, GoverType, HouseType} from "../02-test/02_02";


export function addMoneyToBudget(building: GoverType, budget: number) {
    building.budget += budget
}

export function repairHouses(repair: HouseType) {
    repair.repaired = true
}

export const toFireStaff = (st: GoverType, staffToFire: number) => {
    st.staffCount -= staffToFire
}

export const toHireStaff = (st: GoverType, staffToFire: number) => {
    st.staffCount += staffToFire
}

export function createMessage(props: CityType) {
    // return "Hello " + props.title + " citizens. All " + props.citizensNumber + " of you "
    return `Hello ${props.title} citizens. All ${props.citizensNumber} of you `
}


