import {findAll, findAllSortedByName, findByPokedexNr} from "../bl/pokemonBL";

test("find pokemon with pokedexNr 151", () => {
    expect(findByPokedexNr(151).name).toBe("Mew")
})

test("find all pokemon sorted by name", () => {
    const array = findAllSortedByName();
    for (let i = 0; i < array.length-1; i++) {
        expect(array[i].name.localeCompare(array[i+1].name)).toBeLessThanOrEqual(0)
    }
})