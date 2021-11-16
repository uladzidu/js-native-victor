import {GoverType, HouseType} from '../02-test/02_02';


export const getStreetsTitlesOfGoverBuildings = (streets: Array<GoverType>) => {
    return streets.map( h => h.type)
}

export const getStreetsTitlesOfHouse = (houses: Array<HouseType>) => {
    return houses.map(h => h.adress.street.title)
}
