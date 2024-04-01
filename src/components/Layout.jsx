import { useEffect, useState } from 'react'
import { Link, Outlet } from "react-router-dom"
import SearchResults from './SearchResults';

export default function Layout({ children, content, setQuery }) {

    return (
        <>
            <header>
                <h1>A DIGITAL LIBRARY</h1>
                <nav>
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="search">SEARCH</Link></li>
                    </ul>
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
