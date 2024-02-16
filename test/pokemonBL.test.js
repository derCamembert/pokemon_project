"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pokemonBL_1 = require("../bl/pokemonBL");
test("find pokemon with pokedexNr 151", () => {
    expect((0, pokemonBL_1.findByPokedexNr)(151).name).toBe("Mew");
});
test("find all pokemon sorted by name", () => {
    const array = (0, pokemonBL_1.findAllSortedByName)();
    for (let i = 0; i < array.length - 1; i++) {
        expect(array[i].name.localeCompare(array[i + 1].name)).toBeLessThanOrEqual(0);
    }
});
