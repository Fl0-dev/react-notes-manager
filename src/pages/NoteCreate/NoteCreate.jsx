import { NoteForm } from 'components/NoteForm/NoteForm';
import s from './NoteCreate.module.css';
import { NoteAPI } from 'api/note-api';
import { useDispatch } from 'react-redux';
import { addNote } from 'store/note/note-slice';
import { useNavigate } from 'react-router-dom';

export function NoteCreate(props) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function createNote(formValues) {
        //ajout de la date
       const createdNote = await NoteAPI.create({...formValues, created_at: new Date().toLocaleDateString()});
         dispatch(addNote(createdNote));
            navigate("/");
    }
    return (
        <div className={s.NoteCreate}>
            <NoteForm
                title="Create a note"
                onSubmit={createNote}
            />
        </div>
    );
}