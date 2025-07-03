import React from 'react'
import { Route, Routes } from 'react-router'
import NoteDetailPage from './pages/NoteDetailPage'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'

const App = () => {
  return (
    <div data-theme="megaqueen">
      <button class="btn btn-neutral">Neutral</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-accent">Accent</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-error">Error</button>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/create' element={<CreatePage/>}/>
      <Route path='/note/:id' element={<NoteDetailPage/>}/>
    </Routes>
    </div>
  )
}

export default App