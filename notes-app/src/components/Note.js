import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Note = (props) => {
    const [state, setState] = useState(props.info);
    const navigate = useNavigate();

    const handleDelete = () => {
        props.handleDelete(state.id);
    }

    const handleLink = () => {
        navigate('/note/'+state.id);
    }

    return (
        <div className='note'>
            <div className='note-text-date'>
                <div className="note-text">
                    {state.text}
                </div>
                <div className='date-link' onClick={handleLink}>
                    {state.date}
                </div>
            </div>
            <button className='button-delete' onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Note