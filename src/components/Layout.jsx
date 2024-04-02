import { useEffect, useState } from 'react'
import { Link, Outlet } from "react-router-dom"
import SearchResults from './SearchResults'
import BookCard from './BookCard'

export default function Layout({ children, content, query, setQuery, formatTitle }) {

    return (
        <>
            <header>
                <h1>A DIGITAL LIBRARY</h1>
                {/* <button><Link to=":slug">HOME</Link></button> */}
                <nav>
                    {/* <div><Link to={"/"}>HOME</Link></div> */}
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
