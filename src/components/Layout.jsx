export default function Layout({ children }) {

    // forbeholdt layout til grunnstrukturen av dokumentet med children og la inn elementer som var minimale og uten bruk av funksjoner. 

    return (
        <>
            <header>
                <h1>A DIGITAL LIBRARY</h1>
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
