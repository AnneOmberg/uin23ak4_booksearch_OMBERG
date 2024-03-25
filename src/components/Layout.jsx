import { Link, Outlet } from "react-router-dom";

export default function Layout({ children }) {


    return (
        <>
            <header>
                <h1>Digitalt bibliotek</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="books">Books</Link></li>
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