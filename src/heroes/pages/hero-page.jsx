import {Navigate, useNavigate, useParams} from "react-router-dom";
import {getHeroById} from "../helpers/index.js";
import {useMemo} from "react";

export const HeroPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const hero = useMemo(() => getHeroById(id), [id]);
    if (!hero) {
        return <Navigate to="/marvel"/>
    }


    const onNavigateBack = () => {
        navigate(-1)
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`/assets/heroes/${id}.jpg`}
                    alt={hero.superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush animate__animated animate__fadeInRight">
                    <li className="list-group-item">
                        <b>Alter Edgo</b> {hero.alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher</b> {hero.publisher}
                    </li>
                    <li className="list-group-item">
                        <b>First appearance</b> {hero.first_appearance}
                    </li>
                    <h5 className="mt-3">Characteres</h5>
                    <p>{hero.characters}</p>
                    <button className="btn btn-outline-primary"
                            onClick={onNavigateBack}
                    >
                        Reresar
                    </button>

                </ul>
            </div>
        </div>
    )
}
