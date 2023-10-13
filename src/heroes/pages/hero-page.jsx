import {Navigate, useParams} from "react-router-dom";
import {getHeroById} from "../helpers/index.js";

export const HeroPage = () => {
    const {id} = useParams();
    console.log(id);
    const hero = getHeroById(id);
    if (!hero) {
    return <Navigate to="/marvel"/>
    }


    return (
        <>
            <h1>Hero........</h1>
            <hr/>

        </>
    )
}
