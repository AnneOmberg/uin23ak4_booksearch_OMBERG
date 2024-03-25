import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Layout from './components/Layout'
import BookCard from './components/BookCard'
import Category from './components/Category'


function App() {

  return (
    <>
      <Layout>
        <Routes>
          {/* bestemmer at Home blir startsiden */}
          <Route index element={<Home />} />
          <Route path="books/*" element={<BookCard />}>
            <Route index element={<BookCard />} />
            <Route path=':slug' element={<Category />} />
          </Route>
        </Routes>
      </Layout >
    </>
  )
}

export default App