import React from "react";

import AddToCart from './AddToCart';

const RenderMoviesInRows = ({movies}) => {
    const rows = [];
    let row = [];

    movies.forEach((movie, index) => {
        row.push(
            <div key={movie.id} className="col-md-6 mb-12 col-lg-3 col-xl-2">
                <br/><br/>
                <div className="movie-card">
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.title}
                        className="card-img-top movie-image"
                    />
                    <br/><br/>

                    <div className="d-flex align-items-center">
                        <div className="col-5">
                            <span className="float-right">
                                <i className="bi bi-star-fill"></i>&nbsp;&nbsp;{movie.vote_average.toFixed(1)}/10
                            </span>
                        </div>

                        <div className="col-5">
                            <span className="float-right">
                                <i className="bi bi-calendar"></i>&nbsp;&nbsp;{movie.release_date.substring(0, 4)}
                            </span>
                        </div>
                        <AddToCart movie={movie}/>
                    </div>
                </div>
            </div>
        );

        if (row.length === 4) {
            rows.push(<div key={index} className="row">{row}</div>);
            row = [];
        }
    });

    if (row.length > 0) {
        rows.push(<div key={movies.length} className="row">{row}</div>);
    }

    return <div className="movies-container">{rows}</div>
};

export default RenderMoviesInRows;
