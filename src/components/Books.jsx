import { useState } from "react"
import { Link } from "react-router-dom"

export default function BookCard() {

    const catArray = ["Action", "Romance", "Documenteries"]



    return (
        <>
            <h2>kategorier</h2>
            <ul>
                {/* {catArray.map((category, index) => <li key={category + index}><Link to={category}>{category}</Link></li>)} */}
            </ul>

        </>
    )
}





