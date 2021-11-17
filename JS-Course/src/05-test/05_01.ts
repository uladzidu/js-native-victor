import {CityType, GoverType, HouseType} from '../02-test/02_02';

export const getStreetsTitlesOfGoverBuildings = (streets: Array<GoverType>) => {
    return streets.map( h => h.type)
}

export const getStreetsTitlesOfHouse = (houses: Array<HouseType>) => {
    return houses.map(h => h.adress.street.title)
}

export const greetingMessage = (mess: Array<HouseType>) => {
     return mess.map(m => `Hello from ${m.adress.street.title} `)
}

export const budgetMessage = (governmentBuildings: Array<GoverType>) => {

    let callbackfn = (m : GoverType) => `Your budget is ${m.budget}`;
    return governmentBuildings.map(callbackfn)

}