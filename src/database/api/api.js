import monstersData from '../data/mockMonster.json';
import charactersData from '../data/mockCharacters.json';

const getMonsters = () => {
    const data = []
    monstersData.forEach(monster => {
        data.push({
            id: monster.id,
            name: monster.name,
            description: monster.description,
            picture: monster.picture
        });
    });

    return ({
        status: 200,
        monsters: data
    })
};

const getMonsterById = (id) => {
    let data = monstersData.find(monster => monster.id === id);
    
    return ({
        status: 200,
        monster: data
    });
};

const getCharacters = () => {
    const data = [];
    charactersData.forEach(character => {
        data.push({
            id: character.id,
            name: character.name,
            description: character.description,
            picture: character.picture
        });
    });

    return ({
        status: 200,
        characters: data
    })
};

const getCharactersById = (id) => {
    let data = charactersData.find(character => character.id === id);

    return({
        status: 200,
        character: data
    })
};

export {getCharacters, getCharactersById, getMonsterById, getMonsters};