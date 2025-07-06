import { NotebookText } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const NotesNotFound = () => {
  return (
    <div className='flex flex-col text-center items-center justify-center mx-auto space-y-5 py-16 max-w-md'>
        <div className='bg-primary/10 rounded-full p-8'>
            <NotebookText className='size-10 text-primary'/>
        </div>
        <h3 className='text-xl font-bold'>No notes yet</h3>
        <p className='text-base-content/70'>Ready to organize your thoughts? Create your first note to get started on your journey.</p>
        <Link to={"/create"} className='btn btn-primary'>Create Your first Note</Link>
    </div>
  )
}

export default NotesNotFound