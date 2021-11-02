import { CityType } from "./02_02";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [],
        governmentBuildings: [],
        citizensNumber: 1000000
    }
})

test("test cite should contains 3 houses", () => {
    expect(city.houses.length).toBe(3);
    expect(city.houses[0].buildedAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].adress.number).toBe(100);
    expect(city.houses[0].adress.street.title).toBe('White street');
    
    expect(city.houses[1].buildedAt).toBe(2008);
} )