import React from 'react'
import { Route, Routes } from 'react-router'
import NoteDetailPage from './pages/NoteDetailPage'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'

const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/create' element={<CreatePage/>}/>
      <Route path='/note/:id' element={<NoteDetailPage/>}/>
    </Routes>
    </div>
  )
}

export default App