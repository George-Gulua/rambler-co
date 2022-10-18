import Image from 'next/image'
import classes from './Information.module.scss'

const Information = () => {
    return (
        <div className={classes['information']}>
            <div className={classes['container']}>
                <Image
                    className={classes['information__img']}
                    src="/images/computer.svg"
                    width={340}
                    height={220}
                    alt="computer"
                />
                <div className={classes['information__block']}>
                    <h2 className={classes['information__title']}>
                        Дизайн и разработка
                    </h2>
                    <p className={classes['information__text']}>
                        Наши проекты созданы лучшими программистами и
                        дизайнерами мира. Каждая задача разбивается до тончайших
                        деталей и разрабаетывается согласно выстроенной
                        ахритектуре.
                    </p>
                    <a href={'#form'} className={classes['btn']}>
                        Заказать проект
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Information
