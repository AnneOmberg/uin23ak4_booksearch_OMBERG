export default function BookCard({ content }) {
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