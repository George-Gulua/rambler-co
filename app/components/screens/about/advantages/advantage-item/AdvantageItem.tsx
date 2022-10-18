import classes from './AdvantageItem.module.scss'
import { FC } from 'react'
import classNames from 'classnames'

interface AdvantageItemProps {
    title: string
    text: string
    main?: boolean
    direction: string
}

const AdvantageItem: FC<AdvantageItemProps> = ({
    title,
    text,
    main,
    direction
}) => {
    return (
        <div
            className={classNames([classes['advantage-item']], {
                [classes['advantage-item-main']]: main
            })}
        >
            <h2 className={classes['advantage-item__title']}>{title}</h2>
            <p
                className={classNames(classes['advantage-item__text'], {
                    [classes['advantage-item__text-left']]:
                        direction === 'left',
                    [classes['advantage-item__text-right']]:
                        direction === 'right',
                    [classes['advantage-item__text-center']]:
                        direction === 'center'
                })}
            >
                {text}
            </p>
        </div>
    )
}

export default AdvantageItem
