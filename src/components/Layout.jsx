import { useEffect, useState } from 'react'
import { Link, Outlet } from "react-router-dom"
import SearchResults from './SearchResults'
import BookCard from './BookCard'

export default function Layout({ children, content, search, setQuery, includeSearchResults }) {

    return (
        <>
            <header>
                <h1>A DIGITAL LIBRARY</h1>
                <nav>
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/search">Search</Link></li>
                    </ul>
                    {/* {includeSearchResults && <SearchResults content={content} setQuery={setQuery} >
                        <BookCard />
                    </SearchResults>} */}
                    {/* <Link to={`/search`}>
                        <SearchResults content={content} setQuery={setQuery} >
                            <BookCard />
                        </SearchResults>
                    </Link> */}
                    {/* <SearchResults><Link> Search </Link></SearchResults> */}
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
