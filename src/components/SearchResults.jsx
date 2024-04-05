// impoterer nødvendige React Hook fra react og react-router-dom til komponenten for å bruke i funksjoner
import { useState } from 'react'
import { Link, useParams } from "react-router-dom"
// Impoterer også komponentet BookCard for å kunne rendre begge komponentene samtidig på siden
import BookCard from './BookCard'

// lager funksjonen til komponente SearchResults og henter props-ene fra App og andre komponenter 
export default function SearchResults({ content, setQuery, homeClick }) {

    // en variabel som utnytter useState for å kunne ta imot input i søkefeltet
    const [search, setSearch] = useState("")

    // Må bruker useParams i et underkomponent istedenfor App for å endre teksten i linken etter hvilken side man er på
    const { slug } = useParams()

    // en enkel arrow-function for en hjemknapp i nav
    const clickHome = () => {
        homeClick()
    }

    // arrow-function bestemmer at søk ikke skal fungere før minst 3 bokstaver er skrevet i søkefeltet, og endrer query-verdien til en prop istedefor initial state query med setQuery
    const handleClick = (event) => {
        event.preventDefault()
        if (search.length >= 3) {
            setQuery(search)
        }
    }

    // bestemmer at verdien til search-prop blir det bruker skiver i input-feltet
    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    // enkel html-struktur for knappene i nav-feltet med tagger og klasser som blir brukt i sass
    return (
        <>
            <nav>
                <ul id='nav'>
                    {/* bruker link for å endre link og utnytte routing,
                    bruker også funksjonene på elementene*/}
                    <li><button className='home'><Link to={"/"} onClick={clickHome}>HOME</Link></button></li>
                    <Link to={"/search"}>
                        <form onSubmit={handleClick}>
                            <li>
                                <input type="text" id="search" placeholder="Write a Title..." onChange={handleChange} />
                                <button type="submit" onClick={handleClick}>SEARCH</button>
                            </li>
                        </form>
                    </Link>
                </ul>
            </nav>
            {/* router til BookCard her for å oppdatere data på en side istedenfor å deligere til en ny */}
            <BookCard content={content} />
        </>
    )
}