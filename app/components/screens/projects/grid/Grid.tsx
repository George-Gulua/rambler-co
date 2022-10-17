import classes from './Grid.module.scss'
import GridItem from './grid-item/GridItem'

const Grid = () => {
    const projects: IProject[] = [
        {
            id: 0,
            title: 'АфишаDaily',
            path: '/images/links/afisha-daily.png',
            link: 'https://daily.afisha.ru/',
            gradient: { from: '#E3E3E0', to: '#67C1F4' },
            width: 240
        },
        {
            id: 1,
            title: 'СекретФирмы',
            path: '/images/links/secret-firmi.png',
            link: 'https://secretmag.ru/',
            gradient: { from: '#E3E3E0', to: '#FDD97C' },
            width: 280
        },
        {
            id: 2,
            title: 'LentaRu',
            path: '/images/links/lentaru.png',
            link: 'https://lenta.ru/',
            gradient: { from: '#E3E3E0', to: '#767A8E' },
            width: 320
        },
        {
            id: 3,
            title: 'MoslentaRu',
            path: '/images/links/moslenta.png',
            link: 'https://moslenta.ru/',
            gradient: { from: '#E3E3E0', to: '#F6A8A8' },
            width: 340
        },
        {
            id: 4,
            title: 'РамблерМедиа',
            path: '/images/links/rambler-media.png',
            link: 'https://motor.ru/',
            gradient: { from: '#E3E3E0', to: '#7580E5' },
            width: 320
        }
    ]

    return (
        <div className={classes['project-section']}>
            <div className={classes['container']}>
                <h2 className={classes['project-section__title']}>
                    Наши проекты
                </h2>
                <p className={classes['project-section__text']}>
                    За все время существования компании Rambler&CO были созданы
                    тысячи проектов. Вы можете ознакомиться с каждой нашей
                    работой.
                </p>
                <div className={classes['project-section__grid']}>
                    {projects.map(item => (
                        <GridItem key={item.id} item={item} />
                    ))}
                    <div className={classes['project-section__add']}>
                        <div
                            className={classes['project-section__btn']}
                            style={{
                                backgroundImage: `linear-gradient(45deg, #1C1A18 0%, #625F5F 51%, #1C1A18 100%)`
                            }}
                        >
                            more...
                        </div>
                        <h3 className={classes['project-section__btn-title']}>
                            More
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grid
