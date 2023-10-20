import {useForm} from "../../hooks/use-form.js";
import {useLocation, useNavigate} from "react-router-dom";
import queryString from "query-string";
import {getHeroesByName} from "../helpers/index.js";
import {HeroCard} from "../components/index.js";

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);
    const {searchText, onInputChange} = useForm({
        searchText: q
    });
    const heroes = getHeroesByName(q)

    const onSearchSumbmit = (event) => {
        event.preventDefault();
        if (searchText.trim().length <= 1)
            return;
        navigate(`?q=${searchText}`)
    }


    return (
        <>
            <h1>Search</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <hr/>
                    <form onSubmit={onSearchSumbmit}>
                        <input
                            type="text"
                            placeholder="Search Hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange}
                        />
                        <button className="btn btn-outline-primary mt-1">Search</button>
                    </form>

                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>
                    {
                        q === ''
                            ? <div className="alert alert-primary"> Search Hero </div>
                            : (heroes.length === 0)
                            && <div className="alert alert-danger"> No hero with <b> {q}</b></div>

                    }


                    {
                        heroes.map(hero => (
                            <HeroCard key={hero.id} {...hero}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}