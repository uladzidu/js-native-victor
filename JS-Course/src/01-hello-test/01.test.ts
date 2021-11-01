import { NumberLiteralType } from "typescript";
import { mult, splitIntoWords, sum } from "./01"

let a: number;
let b: number;
let c: Number;

beforeEach(() => {
    a = 1
    b = 2
    c = 3
})


test('sum should be correct', () => {
    //data
    a = 100;

    //action
    const result = sum(a, b);

    //expect result

    expect(result).toBe(102);

})


test('multiply should be correct', () => {
    //data
    const a = 1;
    const b = 2;
    const c = 3;

    //action
    const result = mult(b, c);

    //expect result

    expect(result).toBe(6);

})

test('split into words should be correct', () => {
    //data
    const sent1 = "hello my friend!";
    const sent2 = "js the best programming language";


    //action
    const result1 = splitIntoWords(sent1)
    const result2 = splitIntoWords(sent2)

    //expect result

    expect(result1.length).toBe(3);
    expect(result1[0]).toBe("hello");
    expect(result1[1]).toBe("my");
    expect(result1[2]).toBe("friend");


    expect(result2.length).toBe(5);
    expect(result2[0]).toBe("js");
    expect(result2[1]).toBe("the");
    expect(result2[2]).toBe("best");
    expect(result2[3]).toBe("programming");
    expect(result2[4]).toBe("language");
})