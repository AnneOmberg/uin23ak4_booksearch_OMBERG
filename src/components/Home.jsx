import { useEffect, useState } from 'react'

export default function Home({ query, setQuery, content }) {


    const jamesBondBooks = content.filter(item => {
        return (
            item.title.toLowerCase().includes('james bond')
        )
    })

    console.log("James Bond Books:", jamesBondBooks.map(item => item.title));


    return (
        <section>
            <h2>Home</h2>
            {content?.map(item => <article key={item.key}>
                <h3>{item.title}</h3>
                <img src={`https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg`} alt={item.title} />
                <p>{item.author_name}</p>
            </article>)}
        </section>

    )
}