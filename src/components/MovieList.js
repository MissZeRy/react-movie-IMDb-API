import React from 'react'

function MovieList({ movies }) {

    function truncateTextWithEllipsis(text, maxLength) {
        if (text.length <= maxLength) {
            return text;
        } else {
            return text.substring(0, maxLength - 3) + '...';
        }
    }

    return (
        <div className="movie-lists">
            {movies?.map((movie) => (
                <div className='card'>
                    <h3>{movie?.Title}</h3>
                    <div className="card-body">
                    <img src={movie?.Poster} alt="" />
                        <div className="detail">
                            <h3>{truncateTextWithEllipsis(movie?.Title, 35)}</h3>
                            <p>Year : {movie?.Year}</p>
                            <p>imdbID : {movie?.imdbID}</p>
                            <p>Type : {movie?.Type}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MovieList