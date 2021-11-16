import {GoverType, HouseType} from '../02-test/02_02';


export const getStreetsTitlesOfGoverBuildings = (houses: Array<GoverType>) => {
    return houses.map( h => h.adress.street.title)
}


