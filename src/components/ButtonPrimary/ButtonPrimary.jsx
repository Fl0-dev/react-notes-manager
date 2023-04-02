import s from './ButtonPrimary.module.css';

export function ButtonPrimary({ children, onClick }) {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`btn btn-primary ${s.button}`}
      >
        {children}
      </button>
    );
  }