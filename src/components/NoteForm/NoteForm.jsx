import s from "./NoteForm.module.css";
import { PencilFill, Trash, TrashFill } from "react-bootstrap-icons";
import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import { useState } from "react";

export function NoteForm({ title, onClickEdit, onClickTrash, onSubmit }) {

    //contient les names de chaque input
    const [formValues, setFormValues] = useState({ title: "", content: "" });

    function updateFormValues(e) {
        //utilisation de spread operator pour ne pas écraser les autres valeurs
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
        // [e.target.name] permet de récupérer le name de l'input => key de l'objet
        // e.target.value permet de récupérer la valeur de l'input => value de l'objet
    }

    const actionIcons = (
        <>
            <div className="col-1">
                {onClickEdit && <PencilFill onClick={onClickEdit} className={s.icon} />}
            </div>
            <div className="col-1">
                {onClickTrash && <TrashFill onClick={onClickTrash} className={s.icon} />}
            </div>
        </>
    );

    const titleInput = (
        <>
            <label className="form-label">Title</label>
            <input
                onChange={updateFormValues}
                type="text"
                name="title"
                className="form-control"
            />
        </>
    );

    const contentInput = (
        <>
            <label className="form-label">Content</label>
            <textarea
                onChange={updateFormValues}
                type="text"
                name="content"
                className="form-control"
                row="5"
            />
        </>
    );

    const submitButton = (
        <div className={s.submit_btn}>
            <ButtonPrimary onClick={() => onSubmit(formValues)} >Submit</ButtonPrimary>
        </div>
    );

    return (
        <form className={s.container}>
            <div className="row justify-content-space-between">
                <div className="col-10">
                    <h2 className="mb-3">{title}</h2>
                </div>
                {actionIcons}
            </div>
            <div className={`mb-3 ${s.title_input_container}`}>{titleInput}</div>
            <div className="mb-3">{contentInput}</div>
            {onSubmit && submitButton}
        </form>
    );
}