import { useEffect, useState } from 'react'
import { Link, Outlet } from "react-router-dom";

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
                <h1>Digitalt bibliotek</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/books">Books</Link></li> {/* Corrected link path */}
                    </ul>
                </nav>
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
