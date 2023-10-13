import {getHeroByPublisher} from "../helpers/index.js";
import {HeroCard} from "./hero-card.jsx";

export const HeroList = ({publisher}) => {
    const heroes = getHeroByPublisher(publisher);
    return (
        <ul className="row row-cols-1 row-cols-md-3 g-3">
            {
                heroes.map(hero => (
                    // <li key={hero.id}>{hero.superhero}</li>
                    <HeroCard key={hero.id} {...hero}  ></HeroCard>
                ))
            }

        </ul>
    )
}