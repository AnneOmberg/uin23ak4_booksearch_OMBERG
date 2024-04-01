import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import BookCard from './components/BookCard'
import SearchResults from './components/SearchResults'


function App() {

  const [query, setQuery] = useState("")
  const [content, setContent] = useState([])

  const formatTitle = (title) => {
    return title.toLowerCase().replace(/\s/g, "+")
  }

  const getData = async () => {
    try {
      const res = await fetch(`https://openlibrary.org/search.json?title=${query}`)
      const data = await res.json()
      setContent(data.docs)
    } catch {
      console.error("somethinng is fucked")
    }
  }

  useEffect(() => {
    getData()
  }, [query])



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