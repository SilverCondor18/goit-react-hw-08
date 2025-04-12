import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css'
import { useId } from 'react'
import { changeFilter } from '../../redux/filters/slice'
import { selectFilter } from '../../redux/filters/selectors';

export default function SearchBox()
{
    const value = useSelector(selectFilter);
    const dispatch = useDispatch();
    const onFilter = val => {
        dispatch(changeFilter(val));
    }
    const id = useId();
    return (
        <div className={css.wrapper}>
            <label htmlFor={id}>Find contacts by name</label>
            <input value={value} type="text" name="filter" id={id} onChange={event => onFilter(event.target.value)} />
        </div>
    )
}