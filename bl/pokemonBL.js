"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findByPokedexNr = exports.findAllSortedByName = exports.findAll = void 0;
const pokeMock = [
    {
        pokedexNr: 1,
        name: "Bisasam"
    }, {
        pokedexNr: 2,
        name: "Bisaknosp"
    }, {
        pokedexNr: 25,
        name: "Pikachu"
    },
    {
        pokedexNr: 151,
        name: "Mew"
    }
];
const findAll = () => {
    return pokeMock;
};
exports.findAll = findAll;
const findAllSortedByName = () => {
    return pokeMock.sort((a, b) => a.name.localeCompare(b.name));
};
exports.findAllSortedByName = findAllSortedByName;
const findByPokedexNr = (nr) => {
    const found = pokeMock.find(p => p.pokedexNr === nr);
    return found !== null && found !== void 0 ? found : null;
};
exports.findByPokedexNr = findByPokedexNr;
