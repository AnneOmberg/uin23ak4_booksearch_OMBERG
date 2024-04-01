import { useEffect, useState } from "react"

export default function BookCard({ content, query, setQuery }) {

    // const [homePage, setHomePage] = useState("")

    const hoemData = () => {
        setQuery("james bond series")
    }



    console.log("BookCard", content)



    return (
        <section id="books">
            {content?.map(item => <article key={item.key}>
                <h3>{item.title}</h3>
                <ul className="abcdeffff">
                    {item.author_name ?

                        (<li>{item.author_name
                        }</li>) : (<li></li>)
                    }
                    <li>{item.first_publish_year}</li>
                </ul>
                {/* <p>Author: {item.author_name}</p> */}
                {item.cover_i ? (
                    <img src={`https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg`} alt={item.title} />
                ) : (
                    <p className="noimage">NO IMAGE</p>
                )}
            </article>)}
        </section>

    )
}