import {CityType, GoverType} from '../02-test/02_02';


export function demolishHousesOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter(s => s.adress.street.title !== street)
}

export function getBuildingsWithStaffCountGreatherThen(buildings: Array<GoverType>, staff: number) {
    return buildings.filter(c => c.staffCount > staff)
}
