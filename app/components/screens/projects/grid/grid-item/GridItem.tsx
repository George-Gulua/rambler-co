import classes from './GridItem.module.scss'
import { FC } from 'react'
import Image from 'next/image'

interface ProjectItemProps {
    item: IProject
}

const GridItem: FC<ProjectItemProps> = ({ item }) => {
    return (
        <a
            href={item.link}
            rel={'noreferrer'}
            target={'_blank'}
            className={classes['grid-item']}
        >
            <div
                className={classes['gradient']}
                style={{
                    backgroundImage: `linear-gradient(45deg, ${item.gradient.from} 0%, ${item.gradient.to} 51%, ${item.gradient.from} 100%)`
                }}
            >
                <Image
                    src={item.path}
                    alt={'иконка проекта'}
                    width={260}
                    height={140}
                />
            </div>
            <h3 className={classes['grid-item__title']}>{item.title}</h3>
        </a>
    )
}

export default GridItem
