import { Image } from 'minista'
import './PersonCard.scss'

const PersonCard = (props) => {
    const {
        imgSrc,
        imgAlt,
        name,
        subtitle,
    } = props

    const hasBody = Boolean(name || subtitle)

    return (
        <div className="person-card">
            <Image src={imgSrc} alt={imgAlt} title={imgAlt} className='person-card__image'/>
            {hasBody && (
                <div className="person-card__body">
                    {name && <h4 className='person-card__name'>{name}</h4>}
                    {subtitle && <h4 className='person-card__subtitle'>{subtitle}</h4>}
                </div>
            )}
        </div>
    )
}

export default PersonCard