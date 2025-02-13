import React, { useState, useEffect } from "react";

const NotesSection = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  // Load notes from localStorage on component mount
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  // Function to add a new note
  const addNote = () => {
    if (newNote.trim() === "") return;

    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setNewNote(""); // Clear input field
  };

  // Function to delete a note
  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  return (
    <div className="notes-container">
      <h2>My Notes</h2>
      <textarea
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Write your note here..."
        rows="10"
        cols="50"
      />
      <button onClick={addNote}>Add Note</button>

      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note} 
            <button onClick={() => deleteNote(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesSection;
