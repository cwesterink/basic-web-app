import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return andrew id', () => {
        const query = "what is my andrew id";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "cwesteri"
          ));
    });
    test('should return andrew name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "c"
          ));
    });
    test('Which of the following numbers is the largest: 94, 12, 14?', () => {
        const query = "Which of the following numbers is the largest: 94, 12, 14?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "94"
          ));
    });
    test('mult', () => {
        const query =  "What is 13 multiplied by 48?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "624"
          ));
    });
    test('prime', () => {
        const query =  "Which of the following numbers are primes: 29, 24, 3, 34, 71?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "29"
          ));
    });
    
});