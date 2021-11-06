import { CityType, GoverType, HouseType } from "../02-test/02_02";


export const addMoneyToBudget = (building: GoverType, budget: number) => {
    building.budget += budget
}

export function repairHouses ( repair: HouseType) {
    repair.repaired = true
}

export const toFireStaff = (st : GoverType , staffToFire : number ) => {
    st.staffCount -= staffToFire
}

export const toHireStaff = (st : GoverType , staffToFire : number ) => {
    st.staffCount += staffToFire
}

export function createMessage (city : CityType) {
    return "Hello " + city.title + " citizens. All " + city.citizensNumber + " of you "
}