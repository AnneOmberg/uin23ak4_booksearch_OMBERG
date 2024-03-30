import { useEffect, useState } from 'react'
import { Link, Outlet } from "react-router-dom"
import Search from './Search'

export default function Layout({ children }) {

    const [books, setBooks] = useState(); // Changed state variable name to 'books'


    // const getBooks = async () => {
    //     fetch(`https://openlibrary.org/search.json?q=crime+and+punishment&fields=key,title,author_name,editions`)
    //         .then(response => response.json())
    //         .then(data => setBooks(data))
    //         .catch(error => console.error(error))
    // }


    // useEffect(() => {
    //     getBooks()
    // }, [])

    return (
        <>
            <header>

                <h2>En digital bokoversikt</h2>
                <Search></Search>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Outlet />
            </footer>
        </>
    )
}
