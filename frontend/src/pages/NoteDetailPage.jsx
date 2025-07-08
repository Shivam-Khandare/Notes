import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { ArrowLeft, Loader, Trash2 } from "lucide-react";
import Navbar from "../components/Navbar";

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        toast.error("Failed to fetch the note!");
        console.log("Error in fetching a note", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNote();
  }, [id]);

  if (loading) {
    return (
      <div className="items-center min-h-screen flex justify-center bg-base-200">
        <Loader className="animate-spin size-10 text-secondary" />
      </div>
    );
  }

  const handleSubmit = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;
    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted Successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Failed to delete note!");
      console.log("Error in deleting note!", error);
    }
  };

  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Please fill all the fields.");
      return;
    }

    setSaving(true);

    try {
      await api.put(`/notes/${id}`, note);
      toast.success("Note updated successfully!")
      navigate('/')
    } catch (error) {
      console.log("Error saving the note: ", error)
      toast.error("Failed to update note.")
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-base-200 overflow-hidden">
          <div className="pointer-events-none absolute left-[-10%] top-[25%] h-[200px] w-[200px] rounded-full bg-success opacity-30 blur-3xl"></div>
          <div className="pointer-events-none absolute right-[-5%] bottom-[10%] h-[200px] w-[200px] rounded-full bg-accent opacity-30 blur-3xl"></div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to={"/"} className="btn btn-ghost">
              <ArrowLeft className="size-5" />
              Back to Notes
            </Link>
            <button
              onClick={handleSubmit}
              className="btn btn-error btn-outline"
            >
              <Trash2 className="size-5" />
              Delete Note
            </button>
          </div>
          <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow">
            <div className="card-body">
              <div className="form-control flex flex-col gap-3 mb-4">
                <label className="label">
                  <span className="label-text font-bold text-lg">Title</span>
                </label>
                <input
                  type="text"
                  value={note.title}
                  className="input input-bordered w-full"
                  placeholder="Note title"
                  onChange={(e) => setNote({ ...note, title: e.target.value })}
                />
              </div>
              <div className="form-control flex flex-col gap-3 mb-4">
                <label className="label">
                  <span className="label-text font-bold text-lg">Content</span>
                </label>
                <textarea
                  type="text"
                  value={note.content}
                  className="textarea h-32 w-full"
                  placeholder="Write your note here..."
                  onChange={(e) =>
                    setNote({ ...note, content: e.target.value })
                  }
                />
              </div>
              <div className="card-actions justify-end">
                <button
                  disabled={saving}
                  onClick={handleSave}
                  className="btn btn-primary"
                >
                  {saving ? "Saving..." : "Save changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetailPage;
