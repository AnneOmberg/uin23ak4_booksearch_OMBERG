import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home'
import Layout from './components/Layout'
import Category from './components/Category'
import Books from './components/Books'


function App() {

  const [query, setQuery] = useState("")
  const [content, setContent] = useState([])

  const getData = async () => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${query}`)
      // 'https://openlibrary.org/search.json?q=james+bond'
      // 'https://openlibrary.org/search.json?q={search_query}'
      const data = await response.json()
      setContent(data.docs)
      setQuery("query")
    } catch {
      console.error("somethinng is fucked")
    }
  }

  useEffect(() => {
    getData()
  }, [query])

  console.log("Home", content)


  return (
    <>
      <Layout>
        <Routes>
          {/* bestemmer at Home blir startsiden */}
          <Route index element={<Home content={content} setQuery={setQuery} />} />
          <Route path="books/*" element={<Books />}>
            <Route index element={<Books />} />
            <Route path=':slug' element={<Category />} />
          </Route>
        </Routes>
      </Layout >
    </>
  )
}

export default App