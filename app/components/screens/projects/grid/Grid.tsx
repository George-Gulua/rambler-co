import classes from './Grid.module.scss'
import GridItem from './grid-item/GridItem'
import { FC, useState } from 'react'
import classNames from 'classnames'
import { IProject } from '../../../../types/IProject'

interface GridProps {
  projects: IProject[]
}

const Grid: FC<GridProps> = ({ projects }) => {
  const [amount, setAmount] = useState(5)
  return (
    <div className={classes['project-section']}>
      <div className={classes['container']}>
        <h2 className={classes['project-section__title']}>Наши проекты</h2>
        <p className={classes['project-section__text']}>
          За все время существования компании Rambler&CO были созданы сотни
          проектов. Вы можете ознакомиться с каждой нашей работой.
        </p>
        <div className={classes['project-section__grid']}>
          {projects.map(item => (
            <GridItem key={item.id} item={item} amount={amount} />
          ))}
          <div
            className={classNames({
              [classes['project-section__add']]: projects.length >= amount,
              [classes['project-section__add-hidden']]: projects.length < amount
            })}
            onClick={() => setAmount(amount + 3)}
          >
            <div
              className={classes['project-section__btn']}
              style={{
                backgroundImage: `linear-gradient(45deg, #1C1A18 0%, #625F5F 51%, #1C1A18 100%)`
              }}
            >
              more...
            </div>
            <h3 className={classes['project-section__btn-title']}>More</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Grid
