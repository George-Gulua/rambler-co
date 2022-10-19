import Image from 'next/image'
import classes from './Information.module.scss'
import { FC } from 'react'

interface InformationProps {
    title: string
    text: string
    pathImg: string
    width: number
    height: number
    buttonText: string
}

const Information: FC<InformationProps> = ({
    title,
    text,
    pathImg,
    width,
    height,
    buttonText
}) => {
    return (
        <div className={classes['information']}>
            <div className={classes['container']}>
                <Image
                    className={classes['information__img']}
                    priority={true}
                    src={pathImg}
                    width={width}
                    height={height}
                    alt="computer"
                />
                <div className={classes['information__block']}>
                    <h2 className={classes['information__title']}>{title}</h2>
                    <p className={classes['information__text']}>{text}</p>
                    <a href={'#form'} className={classes['btn']}>
                        {buttonText}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Information
