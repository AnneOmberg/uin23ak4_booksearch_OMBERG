// impoterer nødvendige React Hook fra react og react-router-dom til komponenten for å bruke i funksjoner
import { Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
// impoterer også de komponentene som trengs for å route til alle componentene på siden
import Layout from './components/Layout'
import SearchResults from './components/SearchResults'


function App() {

  // lager en props som bruker useState, der query setter initial state lik james bond series for startsiden/home
  const [query, setQuery] = useState("james bond series")
  // bracets indikerer array, så trenger det på content 
  const [content, setContent] = useState([])


  // en funksjon for å fetche API-et. her brukes propsene definert tidligere
  const getData = async () => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${query}`)
      const data = await response.json()
      setContent(data.docs)
      // bruker try og catch for å få en error meldign i consolen i nettleserterminalen
    } catch {
      console.error("Det har skjedd en feil")
    }
  }

  // bruker useEffect for å kjøre fetch på getData. query etterpå definerer at denne den avgjørende prop for effekten 
  useEffect(() => {
    getData()
  }, [query])


  // bruker denne funkjonen for at alle mellomrom skal byttes ut med + title, og kome ut med små bokstaver
  const formatTitle = (title) => {
    return title.toLowerCase().replace(/\s/g, "+")
  }

  // lagde en funksjon spesifikt for home-knappen for å kunne gå tilbake til startsiden etter søk
  const homeClick = () => {
    setQuery("james bond series");
  }

  // lagde et enkelt oppsett med routing og sender props til de forskjellige komponentene.
  return (
    <>
      <Layout content={content} query={query} setQuery={setQuery} homeClick={homeClick}>
        <Routes>
          {/* Bestemmer at home med james bond series blir startsiden */}
          <Route index element={<Navigate replace to="/home" />} />
          <Route path=":slug" element={<SearchResults content={content} setQuery={setQuery} homeClick={homeClick} />}>
          </Route>
        </Routes>
      </Layout >

    </>
  )
}

export default App