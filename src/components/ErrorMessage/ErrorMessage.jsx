import css from './ErrorMessage.module.css';

export default function ErrorMessage({ error })
{
    return (
        error && <p className={css.error}>{`There's an error occured (${error}) - please, try reload page`}</p>
    );
}