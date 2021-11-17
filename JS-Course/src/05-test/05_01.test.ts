import {CityType} from '../02-test/02_02';
import {budgetMessage, getStreetsTitlesOfGoverBuildings, getStreetsTitlesOfHouse, greetingMessage} from './05_01';

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1, buildedAt: 2012, repaired: false,
                adress: {
                    number: 100,
                    street: {
                        title: 'White street'
                    }
                }
            },
            {
                id: 2, buildedAt: 2008, repaired: false,
                adress: {
                    number: 100,
                    street: {
                        title: 'Happy street'
                    }
                }
            },
            {
                id: 3, buildedAt: 2020, repaired: false,
                adress: {
                    number: 101,
                    street: {
                        title: 'Happy street'
                    }
                }
            }
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 200000,
                staffCount: 200,
                adress: {
                    street: {
                        title: 'Central Str'
                    }
                }
            },
            {
                type: 'FIRE-STATION',
                budget: 500000,
                staffCount: 1000,
                adress: {
                    street: {
                        title: 'South Str'
                    }
                }
            }
        ],
        citizensNumber: 1000000
    }
})

test.skip('List of streets name', () => {

    let streets = getStreetsTitlesOfGoverBuildings(city.governmentBuildings)

    expect(streets.length).toBe(2)
    expect(streets[0]).toBe('Central Str')
    expect(streets[1]).toBe('South Str')

})

test.skip('List of streets titles of houses', () => {

    let houses = getStreetsTitlesOfHouse(city.houses)

    expect(houses.length).toBe(3)
    expect(houses[0]).toBe('White street')
    expect(houses[1]).toBe('Happy street')
    expect(houses[2]).toBe('Happy street')

})

test.skip('Greeting message for citizens', () => {

    let message = greetingMessage(city.houses)

    expect(message.length).toBe(3)
    expect(message[0]).toBe('Hello from White street ')
    expect(message[1]).toBe('Hello from Happy street ')
    expect(message[2]).toBe('Hello from Happy street ')

})

test.skip('Message for budget', () => {

    let budget = budgetMessage(city.governmentBuildings)

    expect(budget.length).toBe(2)
    expect(budget[0]).toBe('Your budget is 200000')
    expect(budget[1]).toBe('Your budget is 500000')

})