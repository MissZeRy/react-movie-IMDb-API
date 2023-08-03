import React, { useState } from 'react'

function SearchMovie({searchTitle}) {

    const [search, setSearch] = useState('')

    const handleFormSubmit  = (event) => {
        event.preventDefault()
        searchTitle(search)
    }

    return (
        <div>
            <h1>Movie</h1>
            <form className='form-search-movie' onSubmit={handleFormSubmit }>
                <input type="text" className='search-movie-input' onChange={(event) => setSearch(event.target.value)}></input>
                <button>Search</button>
            </form>
        </div>
    )
}

export default SearchMovie