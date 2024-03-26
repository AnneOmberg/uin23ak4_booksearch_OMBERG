export default function Home({ books, setBooks, }) {



    return (
        <article>
            <h2>{books.id}</h2>
            <img src={books.docs} alt={books.docs}></img>
        </article>

    )
}