export default function BookCard({ content }) {

    console.log("BookCard", content)

    return (
        <>

            {/* har gitt tagger id for å kunne bruke i sass */}
            <div id="books">
                {/* brukte map på content for å hente den spesifike dataen fra API-et. her er alle key-ene det API-et har tilgjengelig */}
                {content?.map(item => <article key={item.key}>
                    <h2>{item.title}</h2>
                    <section id="content">
                        {/* har brukt ternary if-test for å spesifisere hva som skal skje hvis daten som er etterspurt mangler */}
                        <ul>
                            {item.author_name ? <li><strong>{item.author_name}</strong></li> : null}
                            <li>{item.first_publish_year}</li>
                            <li>{item.content}</li>
                            {item.ratings_average ? <li><span>Rating </span>{Math.round(item.ratings_average * 10) / 10}/5</li> : null}
                            {/* brukte isbn istedenfor id-amazon siden det ga flere tilgjengelige */}
                            <li id="button">{item.isbn ? <button><a href={`https://www.amazon.com/s?k=${item?.isbn[0]}`} target="_blank">Buy it here!</a></button> : null}</li>
                        </ul>
                        {item.cover_i ? (<img id="img" src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`} alt={item.title} />)
                            : (<p className="noimage">NO IMAGE</p>)}
                    </section>
                </article>)
                }
            </div >

        </>
    )
}