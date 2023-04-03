import { NoteForm } from 'components/NoteForm/NoteForm';
import s from './NoteCreate.module.css';

export function NoteCreate(props) {
    return (
        <div className={s.NoteCreate}>
        <NoteForm title="Create a note" />
        </div>
    );
    }