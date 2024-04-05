import { useEffect, useState } from 'react'
import BookCard from './BookCard'
import { Link, useParams } from "react-router-dom"
export default function SearchResults({ content, query, setQuery, homeClick }) {

    const [search, setSearch] = useState("")

    const { slug } = useParams()

    const clickHome = () => {
        homeClick()
    }

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
            <nav>
                <ul>
                    <li><button className='home'><Link to={"/"} onClick={clickHome}>HOME</Link></button></li>
                    <Link to={"/search"}>
                        {/* <Link to={"/search"}> */}
                        <form onSubmit={handleClick}>
                            <li>
                                <input type="text" id="search" placeholder="Write a Title..." onChange={handleChange} />
                                {/* <input type="submit" value="search"/> */}
                                <button type="submit" onClick={handleClick}>SEARCH</button>
                                {/* <button type="submit" onClick={handleClick}>Search</button> */}
                            </li>
                        </form>
                    </Link>
                </ul>
            </nav>




            {/* </Link> */}
            <BookCard content={content} />

        </>
    )
}