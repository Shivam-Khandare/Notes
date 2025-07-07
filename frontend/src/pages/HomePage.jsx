import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";
import toast from "react-hot-toast"
import NoteCard from "../components/NoteCard";
import api from "../lib/axios";
import NotesNotFound from "../components/NotesNotFound";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes")
        console.log(res.data)
        setNotes(res.data)
        setIsRateLimited(false)
      } catch (error) {
        console.log("Error in fetching notes")
        console.log(error)
        if(error.response?.status === 429){
          setIsRateLimited(true)
        }
        else{
          toast.error("Failed to load notes")
        }
      } finally{
        setLoading(false)
      }
    }

    fetchNotes();
  }, [])
  

  return (
    <div className="relative min-h-screen bg-base-200 overflow-hidden">
          <div className="pointer-events-none absolute left-[-10%] top-[25%] h-[200px] w-[200px] rounded-full bg-success opacity-30 blur-3xl"></div>
          <div className="pointer-events-none absolute right-[-5%] bottom-[10%] h-[200px] w-[200px] rounded-full bg-accent opacity-30 blur-3xl"></div>
      <Navbar />
      {isRateLimited && <RateLimitedUI/>}

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && <div className="text-center text-primary py-10">Loading Notes...</div>}

        {notes.length === 0 && !isRateLimited && <NotesNotFound/>}

        {notes.length>0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {notes.map((note)=>(
                <NoteCard key={note._id} note={note} setNotes={setNotes}/>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
