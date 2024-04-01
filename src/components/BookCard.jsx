import { useEffect, useState } from "react"

export default function BookCard({ content, query, setQuery }) {

    const { homePage, setHomePage } = useState("")

    const formatTitle = (title) => {
        return title.toLowerCase().replace(/\s/g, "+")
    }

    const homeData = () => {
        setQuery("james bond original")
    }

    useEffect(() => {
        homeData()
    }, [])

    console.log("BookCard", content)



    return (
        <section id="books">
            {content.map(item => <article key={item.key}>
                <h3>{item.title}</h3>
                <img src={`https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg`} alt={item.title} />
                <p>{item.author_name}</p>
            </article>)}
        </section>

    )
}