import { GoverType, HouseType } from "../02-test/02_02";


export const addMoneyToBudget = (building: GoverType, budget: number) => {
    building.budget += budget
}

export function repairHouses ( repair: HouseType) {
    repair.repaired = true
}