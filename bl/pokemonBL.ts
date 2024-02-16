const pokeMock = [
    {
        pokedexNr: 1,
        name: "Bisasam"
    }, {
        pokedexNr: 2,
        name: "Bisaknosp"
    },{
        pokedexNr: 25,
        name: "Pikachu"
    },
    {
        pokedexNr: 151,
        name: "Mew"
    }
]

export const findAll = ():any[] => {
    return pokeMock;
}

export const findAllSortedByName = ():any[] => {
    return pokeMock.sort((a,b) => a.name.localeCompare(b.name))
}

export const findByPokedexNr = (nr:number):any|null => {
    const found = pokeMock.find(p => p.pokedexNr === nr)
    return found??null
}