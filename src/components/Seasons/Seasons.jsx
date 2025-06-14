import EpisodeCard from '../EpisodeCard'
import Accordion from '../Slider/components/Accordion'
import AccordionGroup from '../Slider/components/AccordionGroup'
import seasonItems from './seasonItems'
import './Seasons.scss'

const Seasons = () => {
    return (
        <AccordionGroup mode="dark" isOrderedList={false} className="seasons">
            {seasonItems.map(({ title, subtitle, episodes }, index) => (
                <Accordion title={title} subtitle={subtitle} titleLevelClassName="h4" id={`season-${index}`} name="seasons" isOpen={index === 0} key={index} isArrowButton>
                    <ul className="seasons__list">
                        {episodes.map((episode, index) => (
                            <li className="seasons__item" key={index}>
                                <EpisodeCard {...episode}/>
                            </li>
                        ))}
                    </ul>
                </Accordion>
            ))}
        </AccordionGroup>
    )
}

export default Seasons