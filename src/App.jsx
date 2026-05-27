import { Routes, Route } from 'react-router'
import './App.css'
import Landing from './Pages/Landing'
import Modal from './Components/Common/Modal/Modal'
import SearchResult from './Components/Common/SearchResult'
import Layout from './Components/Layout'

// https://api.api-onepiece.com/v2/characters/en

const App = () => {
  return (
    <>
      <Routes >

        <Route element={<Layout />} >
          <Route path='/' element={<Landing />} />
          <Route path='/search' element={<SearchResult />} />
        </Route>

        <Route path='/modal' element={<Modal />} />
      </Routes >

    </>
  )
}

export default App