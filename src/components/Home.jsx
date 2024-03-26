export default function Home({ books, setBooks, content }) {

    console.log("Home", content)

    return (
        <section>
            <h2>Home</h2>
            {content?.map(item => <article key={item.key}>
                <h3>{item.title}</h3>
                <img src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`} alt={item.title} />
                <p>{item.publish_date}</p>
            </article>)}
            {/* <h2>{books.title}</h2> */}
            {/* <img src={books.olid} alt={books.olid}></img> */}
        </section>

    )
}