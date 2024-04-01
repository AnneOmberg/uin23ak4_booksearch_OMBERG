import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import BookCard from './components/BookCard'
import SearchResults from './components/SearchResults'
import Category from './components/Category'


function App() {

  const [query, setQuery] = useState("james bond series")
  // const [title, setTitle] = useState("title=")
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

  return (
    <>
      <Layout>
        <Routes>
          {/* Bestemmer at BookCard blir startsiden */}
          <Route index element={<BookCard content={content} query={query} setQuery={setQuery} />} />
          <Route path="/search" element={<SearchResults />}>
          </Route>
        </Routes>
      </Layout >

    </>
  )
}

export default App