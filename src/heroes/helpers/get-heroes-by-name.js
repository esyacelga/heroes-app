import {heroes} from "../data/heroes.js";

export const getHeroesByName = (name = '') => {
    if (name.length === 0) return [];
    name = name.toLocaleLowerCase().trim();
    return heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().includes(name)
    );

}