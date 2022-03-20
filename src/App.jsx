import React, { useEffect, useState } from "react";


const App = () => {
    const [film, setFilm] = useState([]);
    const [people, setPeople] = useState([]);
    const [loadedFilms, setLoadedFilms] = useState(false);
    const [loadedPeople, setLoadedPeople] = useState(false);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(allFilms => setFilm(allFilms))
    }, [loadedFilms]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(res => res.json())
            .then(allPeople => setPeople(allPeople))
    }, [loadedPeople]);

    const getFilms = () => {
        setLoadedFilms(true);
        setLoadedPeople(false);
    }

    const getPeople = () => {
        setLoadedPeople(true);
        setLoadedFilms(false);
    }

    if (loadedFilms) {
        return (
            <main className="container">
                <div className="text-center m-5">
                    <h1>Studio Ghibli Films</h1>
                </div>

                <div className="text-center">
                    <div>
                        <button className="btn btn-link" onClick={getFilms} > Load Films </button>
                        <button className="btn btn-link" onClick={getPeople} > Load People </button>
                    </div>
                    <div className="row justify-content-center mt-5">
                        {film.map(films => {
                            return (
                                <div className="col-md-4" key={films.id}>
                                    <div className="card shadow my-2">
                                        <div className="card-body">
                                            <h3 className="card-title">{films.title}</h3>
                                            <img src={films.image} alt="" height="200px"  />
                                            <p className="card-text">{films.description}</p>
                                        </div>
                                    </div>



                                </div>
                            )

                        })}
                    </div>
                </div>



            </main>
        )
    } else if (loadedPeople) {
        return (
            <main className="container">
                <div className="text-center m-5">
                    <h1>Studio Ghibli Characters</h1>
                </div>



                <div className="text-center">
                    <div>
                        <button className="btn btn-link" onClick={getFilms} > Load Films</button>
                        <button className="btn btn-link" onClick={getPeople} > Load People</button>
                    </div>

                    <div className="row justify-content-center mt-5">
                        {people.map(person => {
                            return (
                                <div className="col-md-4" key={person.id}>
                                    <div className="card shadow my-2">
                                        <div className="card-header">
                                            <h3>{person.name}</h3>
                                        </div>
                                        <div className="card-body">
                                            
                                            <p className="card-subtitle">Age: {person.age}</p>
                                            <p className="card-subtitle">Gender: {person.gender}</p>
                                            <a target="_blank" href={person.url}>JSON Link</a>
                                        </div>
                                    </div>


                                </div>
                            )
                        })}
                    </div>
                </div>



            </main>

        )
    } else {
        return (
            <main className="container">
                <div className="text-center m-5">
                    <h1>Reacting To APIs</h1>
                </div>

                <div className="text-center">
                    <div>
                        <button className="btn btn-link" onClick={getFilms} > Load Films</button>
                        <button className="btn btn-link" onClick={getPeople} > Load People</button>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card shadow md-4 text-center m-5">
                            <div className="card-body">
                            A web application built to display all animated movies made by Studio Ghibli and the characters in them.
                            </div>
                        </div>
                    </div>
                </div>


            </main>
        )

    }

}

export default App;