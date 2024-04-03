import { Routes, Route, Navigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import BookCard from './components/BookCard'
import SearchResults from './components/SearchResults'
// import Category from './components/Category'


function App() {

  const [query, setQuery] = useState("james bond series")
  // bracets indikerer array
  const [content, setContent] = useState([])


  const getData = async () => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${query}`)
      const data = await response.json()
      setContent(data.docs)
    } catch {
      console.error("Det har skjedd en feil")
    }
  }

  useEffect(() => {
    getData()
  }, [query])


  const formatTitle = (title) => {
    return title.toLowerCase().replace(/\s/g, "+")
  }

  const homeClick = () => {
    setQuery("james bond series");
  }


  return (
    <>
      <Layout content={content} query={query} setQuery={setQuery} formatTitle={formatTitle} homeClick={homeClick}>
        <Routes>
          {/* Bestemmer at BookCard blir startsiden */}
          <Route index element={<Navigate replace to="/james+bond" />} />
          <Route path=":slug" element={<BookCard content={content} />}>
          </Route>
        </Routes>
      </Layout >

    </>
  )
}

export default App