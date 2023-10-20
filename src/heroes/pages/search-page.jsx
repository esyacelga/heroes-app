export const SearchPage = () => {
    return (
        <>
            <h1>Search</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <hr/>
                    <form>
                        <input
                            type="text"
                            placeholder="Search Hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                        />
                        <button className="btn btn-outline-primary mt-1">Search</button>
                    </form>

                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>
                    <div className="alert alert-primary">
                        Search Hero
                    </div>

                    <div className="alert alert-danger">
                        No hero with <b> aaa</b>
                    </div>
                </div>
            </div>
        </>
    )
}