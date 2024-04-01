import { useEffect, useState } from 'react'
import BookCard from './BookCard'

export default function SearchResults({ content, query, setQuery }) {

    const [search, setSearch] = useState("")

    const handleClick = (event) => {
        event.preventDefault()
        setQuery(search)
    }

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    console.log("search", search)
    console.log("resultat", content)

    return (
        <>
            <form onSubmit={handleClick}>
                <input type="text" id="search" placeholder="Skriv inn en tittel..." onChange={handleChange} />
                <button type="submit" onClick={handleClick}>Search</button>
            </form>
            <section id="searchBooks">
                {content.map(item => <article key={item.key}>
                    <h3>{item.title}</h3>
                    <img src={`https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg`} alt={item.title} />
                    <p>{item.author_name}</p>
                </article>)}
            </section>

        </>
    )
}