import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import BookCard from './components/BookCard'
import SearchResults from './components/SearchResults'


function App() {

  const [query, setQuery] = useState("")
  // bracets indikerer array
  const [content, setContent] = useState([])


  const getData = async () => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${query}`)
      const data = await response.json()
      setContent(data.docs)
    } catch {
      console.error("error with fetch from getData")
    }
  }

  {/*const getData = async () => {
    fetch(`https://openlibrary.org/search.json?title=${query}`)
      .then((response) => response.json())
      .then((data) => setContent(data.docs))
      .catch((error) => console.error(error))
  }*/}

  useEffect(() => {
    getData()
  }, [query])


  const formatTitle = (title) => {
    return title.toLowerCase().replace(/\s/g, "+")
  }

  return (
    <>
      <Layout>
        <Routes>
          {/* Bestemmer at BookCard blir startsiden */}
          <Route index element={<BookCard content={content} query={query} setQuery={setQuery} />} />
          <Route path="/search" element={<SearchResults content={content} setQuery={setQuery} />} />
        </Routes>
      </Layout>

    </>
  )
}

export default App