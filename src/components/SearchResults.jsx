import { useEffect, useState } from 'react'
import BookCard from './BookCard'
import { Link, Outlet } from "react-router-dom"
export default function SearchResults({ content, setQuery }) {

    const [search, setSearch] = useState("")

    const handleClick = (event) => {
        event.preventDefault()
        if (search.length >= 3) {
            setQuery(search)
        }
    }

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    // console.log("search", search)
    // console.log("resultat", content)

    return (
        <>

            <Link to={"/search"}>
                {/* <Link to={"/search"}> */}
                <form onSubmit={handleClick}>
                    <input type="text" id="search" placeholder="Write a Title..." onChange={handleChange} />
                    {/* <input type="submit" value="search"/> */}
                    <button type="submit" onClick={handleClick}>SEARCH</button>
                    {/* <button type="submit" onClick={handleClick}>Search</button> */}
                </form>
            </Link>
            {/* </Link> */}
            <BookCard content={content} />

        </>
    )
}