import { useParams } from "react-router-dom"
import BookCard from './BookCard'

export default function Category() {
    const { slug } = useParams()

    return (
        <>
            {/* Pass the query parameter to the BookCard component */}
            <BookCard slug={slug} />
        </>
    )
}
