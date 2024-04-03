import { useEffect, useState } from 'react'
import { Link, Route, useParams } from "react-router-dom"
import SearchResults from './SearchResults'
import BookCard from './BookCard'

export default function Layout({ children, content, query, setQuery, homeClick }) {
    const { slug } = useParams()
    const clickHome = () => {
        homeClick()
    }

    return (
        <>
            <header>
                <h1>A DIGITAL LIBRARY</h1>
                {/* <button><Link to=":slug">HOME</Link></button> */}
                <nav>
                    <button className='home'><Link to={"/"} onClick={clickHome}>HOME</Link></button>
                    {/* <div><Link to={":slug"}>HOME</Link></div> */}
                    <SearchResults content={content} setQuery={setQuery} />
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <p id="footer">
                    All data is gathered from <a src="https://openlibrary.org/">Open Library's</a> API
                </p>
            </footer>
        </>
    )
}
