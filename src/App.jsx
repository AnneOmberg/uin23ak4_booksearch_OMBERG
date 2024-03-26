import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home'
import Layout from './components/Layout'
import Category from './components/Category'
import Books from './components/Books'


function App() {

  const [content, setContent] = useState([])

  const getData = async () => {
    const response = await fetch('https://openlibrary.org/search.json?q=the+lord+of+the+rings')
    const data = await response.json()
    setContent(data.docs)
    console.log(data)
  }

  useEffect(() => {
    getData()
  }, [])

  // console.log(content)

  return (
    <>
      <Layout>
        <Routes>
          {/* bestemmer at Home blir startsiden */}
          <Route index element={<Home content={content} />} />
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