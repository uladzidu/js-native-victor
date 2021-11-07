import {CityType} from "../02-test/02_02";
import {addMoneyToBudget, createMessage, repairHouses, toFireStaff, toHireStaff} from "./03_02";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                buildedAt: 2012,
                repaired: false,
                adress: {
                    number: 100,
                    street: {
                        title: "White street"
                    }
                }
            },
            {
                buildedAt: 2008,
                repaired: false,
                adress: {
                    number: 100,
                    street: {
                        title: "Happy street"
                    }
                }
            },
            {
                buildedAt: 2020,
                repaired: false,
                adress: {
                    number: 101,
                    street: {
                        title: "Happy street"
                    }
                }
            }
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                adress: {
                    street: {
                        title: "Central Str"
                    }
                }
            },
            {
                type: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                adress: {
                    street: {
                        title: "South Str"
                    }
                }
            }
        ],
        citizensNumber: 1000000
    }
})


test.skip("Budget should be changed for HOSPITAL", () => {

    addMoneyToBudget(city.governmentBuildings[1], -100000);

    expect(city.governmentBuildings[0].budget).toBe(300000)

})
test.skip("Budget should be changed for FIRE-STATION", () => {

    addMoneyToBudget(city.governmentBuildings[1], -100000);

    expect(city.governmentBuildings[1].budget).toBe(400000)

})

test.skip("House should be repaired", () => {
    repairHouses(city.houses[1]);
    expect(city.houses[1].repaired).toBeTruthy();
})

test.skip("staff should be increased", () => {

    toFireStaff(city.governmentBuildings[0], 20)

    expect(city.governmentBuildings[0].staffCount).toBe(180)
})

test("staff should be repared", () => {

    toHireStaff(city.governmentBuildings[0], 20)
    toHireStaff(city.governmentBuildings[1], 100)

    expect(city.governmentBuildings[0].staffCount).toBe(220)
    expect(city.governmentBuildings[1].staffCount).toBe(1100)
})

test("Greeting message", () => {

    expect(createMessage(city)).toBe("Hello New York citizens. All 1000000 of you ")

})
