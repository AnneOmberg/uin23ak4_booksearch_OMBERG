import { useEffect, useState } from 'react'

export default function Home({ query, setQuery, content, setContent }) {


    // const jamesBondBooks = content.filter(item => {
    //     // item.title.toLowerCase().includes('james bond')
    //     setQuery('james+bond')
    // })

    // const jamesBondBooks = () => {
    //     setQuery("james+bond")
    // }

    // console.log("James Bond Books:", content)

    // const startContent = () => {
    //     setQuery('james+bond')
    // }

    return (
        <section>
            {content.map(item => <article key={item.key}>
                <h3>{item.title}</h3>
                <img src={`https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg`} alt={item.title} />
                <p>{item.author_name}</p>
            </article>)}
        </section>

    )
}