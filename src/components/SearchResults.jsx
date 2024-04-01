import { useEffect, useState } from 'react'
import BookCard from './BookCard'
import { Link, Outlet } from "react-router-dom"
import { useHistory } from 'react-router-dom'

export default function SearchResults({ content, setQuery }) {

    const [search, setSearch] = useState("")
    const history = useHistory()

    // const homeData = () => {
    //     setQuery("james bond series")
    // }

    // useEffect(() => {
    //     homeData()
    // }, [])

    const handleClick = (event) => {
        event.preventDefault()
        setQuery(search)
    }

    const handleChange = (event) => {
        setSearch(event.target.value)
        history.push(`/search`)
    }

    console.log("search", search)
    console.log("resultat", content)

    return (
        <>


            <form onSubmit={handleClick}>
                <input type="text" id="search" placeholder="Write a Title..." onChange={handleChange} />
                {/* <input type="submit" value="search"/> */}
                <button type="submit" onClick={handleClick}>SEARCH</button>
                {/* <button type="submit" onClick={handleClick}>Search</button> */}
            </form>

        </>
    )
}