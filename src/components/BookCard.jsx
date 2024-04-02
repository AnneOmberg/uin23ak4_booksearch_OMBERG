import { useEffect, useState } from "react"

export default function BookCard({ content }) {

    // const [homePage, setHomePage] = useState("")

    {/*const hoemData = () => {
        setQuery("james bond series")
    }*/}



    console.log("BookCard", content)



    return (
        <>
            <section id="books">
                {content?.map(item => <article key={item.key}>
                    <h3>{item.title}</h3>
                    <ul>
                        {item.author_name ? <li><strong>{item.author_name}</strong></li> : null}
                        <li>{item.first_publish_year}</li>
                        <li>{item.content}</li>
                        {item.ratings_average ? <li><span>Rating </span> {item.ratings_average}/{item.ratings_count_5}</li> : null}
                    </ul>
                    {/* <p>Author: {item.author_name}</p> */}
                    {item.cover_i ? (<img src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`} alt={item.title} />)
                        : (<p className="noimage">NO IMAGE</p>)}
                    {item.id_amazon && item.id_amazon[0] !== "" ? <button><a href={`https://www.amazon.com/s?k=${item?.id_amazon[0]}`} target="_blank">Buy it here!</a></button> : null}

                </article>)
                }
            </section >

        </>
    )
}