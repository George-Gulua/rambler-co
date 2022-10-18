import classes from './Advantages.module.scss'
import AdvantageItem from './advantage-item/AdvantageItem'

const Advantages = () => {
    return (
        <div className={classes['advantages']}>
            <div className={classes['container']}>
                <AdvantageItem
                    title={'2 дня'}
                    text={'макет и сайт у вас'}
                    direction={'left'}
                />
                <AdvantageItem
                    title={'6 млн'}
                    text={'отзывов'}
                    main={true}
                    direction={'center'}
                />
                <AdvantageItem
                    title={'10 тыс.'}
                    text={'готовых проектов'}
                    direction={'right'}
                />
            </div>
        </div>
    )
}

export default Advantages
