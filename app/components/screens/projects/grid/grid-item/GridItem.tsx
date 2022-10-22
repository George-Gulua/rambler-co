import classes from './GridItem.module.scss'
import { FC } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import { IProject } from '../../../../../types/IProject'

interface ProjectItemProps {
  item: IProject
  amount: number
}

const GridItem: FC<ProjectItemProps> = ({ item, amount }) => {
  return (
    <a
      href={item.link}
      rel={'noreferrer'}
      target={'_blank'}
      className={classNames(classes['grid-item'], {
        [classes['grid-item-hidden']]: item.id >= amount
      })}
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
          height={120}
        />
      </div>
      <h3 className={classes['grid-item__title']}>{item.title}</h3>
    </a>
  )
}

export default GridItem
