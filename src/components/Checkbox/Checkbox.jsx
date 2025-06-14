import getIdFromTitle from '@/utils/getIdFromTitle'
import './Checkbox.scss'
import classNames from 'classnames'

const Checkbox = (props) => {
    const { className,
        id = getIdFromTitle(props.label),
        label,
        isRequired
    } = props

    return (
        <label className={classNames(className, 'checkbox')} htmlFor={id}>
            <input type="checkbox" className='checkbox__input' id={id} required={isRequired}/>
            <span className='checkbox__label'>
                {label}
            </span>
        </label>
    )
}

export default Checkbox