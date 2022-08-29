import myAwesomeSuperCoolMap from "./myAwesomeSuperCoolMap";

describe("myAwesomeSuperCoolMap method works as expected", () => {

    test("should return an array with elements increased by 1", () => {
        const arr = [1, 2, 3, 4];
        const result = arr.myAwesomeSuperCoolMap((x) => x + 1);
        expect(result).toEqual([2, 3, 4, 5]);
    });
});
