import Icon from '../Icon'
import './Button.scss'
import classNames from 'classnames'

const Button = (props) => {
    const {
        label,
        className,
        href,
        type = 'button',
        target,
        mode = "",
        isLabelHidden = false,
        iconName,
        iconPosition = 'before',
        hasFillIcon,
        extraAttrs,
    } = props

    const isLink = href !== undefined
    const Component = isLink ? 'a' : 'button'
    const linkProps = { href, target }
    const buttonProps = { type }
    const specificProps = isLink ? linkProps : buttonProps
    const title = isLabelHidden ? label : undefined
    const iconComponent = iconName && (
        <Icon className="button__icon" name={iconName} hasFill={hasFillIcon}/>
    )

    return (
        <Component
            {...specificProps} {...extraAttrs} className={classNames(className, 'button', {
                [`button--${mode}`]: mode,
            })} aria-label={title} title={title}
        >
            {iconPosition === 'before' && iconComponent}
            {!isLabelHidden && (
                <span className='button__label'>{label}</span>
            )}
            {iconPosition === 'after' && iconComponent}
        </Component>
    )
}

export default Button