import React, { useEffect, useState } from "react";
import Note from './Note'
import Navbar from "./Navbar";

const Main = () => {
    const [newNote, setNewNote] = useState('');
    const [notes, setNotes] = useState([]);

    const handleChange = (e) => {
        setNewNote(e.target.value)
    };

    const handleAdd = () => {
        if (newNote.length >= 2) {
            const current = new Date();
            const date = `${current.getHours() < 10 ? '0' : ''}${current.getHours()}:${current.getMinutes() < 10 ? '0' : ''}${current.getMinutes()}  ${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
            const maxId = notes.reduce((max, note) => (note.id > max ? note.id : max), 0);
            let noteToAdd = {
                id: maxId + 1,
                text: newNote,
                date: date
            }
            setNotes([noteToAdd, ...notes]);        //getting max id from array + 1 and adding at start of array means u display last note as first
            setNewNote('');
        } else {
            alert('Note needs at least 2 characters')
        }
    };

    const handleDelete = (id) => {
        setNotes(notes.filter((note) => note.id !== id));
    };

    useEffect(() => {                               //on load get notes from loacalstorage
        const storageNotes = JSON.parse(localStorage.getItem('notes-app-data'));
        if (storageNotes) {
            setNotes(storageNotes);
        }
    }, []);

    useEffect(() => {                               //on add or delete updates localstorage
        localStorage.setItem('notes-app-data', JSON.stringify(notes))
    }, [notes]);

    return (
        <div className='page'>
            <Navbar />
            <div className='note-add'>
                <div className='text'>Note:</div>
                <textarea value={newNote} onChange={handleChange} />
                <button className='button-add' onClick={handleAdd}>Add Note</button>
            </div>
            <div className='text'>Latest notes</div>
            {notes.map((note) => (
                <Note key={note.id.toString()} info={note} handleDelete={handleDelete} />
            ))}
        </div>
    )
}

export default Main