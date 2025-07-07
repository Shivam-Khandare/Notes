import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import axios from "axios";
import api from "../lib/axios";
import Navbar from "../components/Navbar";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast.error("All fields are required");
      return;
    }
    setLoading(true);
    try {
      await api.post("/notes", {
        title,
        content,
      });
      toast.success("Note created successfully!");
      navigate("/");
    } catch (error) {
      console.log("Error in creating note", error);
      if (error.response.status === 429) {
        toast.error("Slow down! You're creating notes too fast", {
          duration: 4000,
          icon: "🫷",
        });
      } else {
        toast.error("Failed to create note!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-base-200 overflow-hidden">
          <div className="pointer-events-none absolute left-[-10%] top-[25%] h-[200px] w-[200px] rounded-full bg-success opacity-30 blur-3xl"></div>
          <div className="pointer-events-none absolute right-[-5%] bottom-[10%] h-[200px] w-[200px] rounded-full bg-accent opacity-30 blur-3xl"></div>
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6">
            <ArrowLeft className="size-5" />
            Back to Notes
          </Link>
          <div className="card bg-base-100 shadow-md hover:shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Create New Note</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-control mb-4 flex flex-col">
                  <label className="label">
                    <span className="label-text font-bold text-lg mb-2">
                      Title
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Title"
                    className="input input-bordered w-full "
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-control mb-4 flex flex-col">
                  <label className="label">
                    <span className="label-text font-bold text-lg mb-2">
                      Content
                    </span>
                  </label>
                  <textarea
                    placeholder="Write your note here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="textarea textarea-bordered h-32 w-full"
                  ></textarea>
                </div>

                <div className="card-actions justify-end">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {" "}
                    {loading ? "Creating..." : "Create Note"}{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
