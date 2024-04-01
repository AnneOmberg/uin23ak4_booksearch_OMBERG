import { useEffect, useState } from 'react'
import { Link, Outlet } from "react-router-dom"
import SearchResults from './SearchResults';

export default function Layout({ children, content, setQuery }) {

    return (
        <>
            <header>
                <h2>En digital bokoversikt</h2>
                <nav>
                    <ul>
                        <li><Link to="/">BookCard</Link></li>
                        <li><Link to="search">SearchResults</Link></li>
                    </ul>
                </nav>

            </header>
            <main>
                {children}
            </main>
            <footer>
                footer
            </footer>
        </>
    )
}
