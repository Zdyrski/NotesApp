import React, { useEffect, useState } from "react";
import Navbar from './Navbar'
import { useParams, useNavigate } from 'react-router-dom';

const NotePage = () => {
    let { id } = useParams();
    const [note, setNote] = useState({});

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    };

    const handleDelete = () => {
        const storageNotes = JSON.parse(localStorage.getItem('notes-app-data'));
        const storageNotesFiltered = storageNotes.filter((element) => element.id != id);
        localStorage.setItem('notes-app-data', JSON.stringify(storageNotesFiltered));
        navigate('/');
    };

    useEffect(() => {
        const storageNotes = JSON.parse(localStorage.getItem('notes-app-data'));
        if (storageNotes) {
            const storageNote = storageNotes.find((element) => element.id == id)
            if (storageNote) {
                setNote(storageNote);
            }
        }
    }, []);

    return (
        <div className='page'>
            <Navbar />
            {(note && note.id) ?
                <div className='note-page'>
                    <div className='note-page-buttons'>
                        <button className='button-add' onClick={handleBack}>Go back</button>
                        <button className='button-delete' onClick={handleDelete}>Delete</button>
                    </div>
                    <div className='note-page-display'>
                        <div className='note-page-text'>
                            {note.text}
                        </div>
                        <div className='note-page-date'>
                            {note.date}
                        </div>
                    </div>
                </div>
                :
                <div className='text'>
                    Sorry but there isn't a note with given id
                </div>
            }
        </div>
    )
}

export default NotePage