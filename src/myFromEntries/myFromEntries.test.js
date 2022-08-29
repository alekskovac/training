import myFromEntries from "./myFromEntries";

describe("myFromEntries method works as expected", () => {
    test("should return object from array of entries", () => {
        const entries = [
            ["a", 1],
            ["b", 2],
            ["c", 3],
            ["d", 4],
        ];
        const obj = {
            a: [1],
            b: [2],
            c: [3],
            d: [4],
        };
        const result = entries.myFromEntries();
        expect(result).toMatchObject(obj);
    });
});