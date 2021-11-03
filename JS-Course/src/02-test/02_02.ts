import { type } from "os"

export type StreetType = {
    title: string
}
export type AdressType = {
    number: number
    street: StreetType
}
export type HouseType = {
    buildedAt: number
    repaired: boolean
    adress: AdressType
}
export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GoverType>
    citizensNumber: number
}


export type StreetGovType = {
    title: string
}
export type AdressGovType = {
    street: StreetGovType
}
export type GoverType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    adress: AdressGovType
}

