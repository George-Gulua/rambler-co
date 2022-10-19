import { IFeedback } from '../../../../../types/IFeedback'
import { FC } from 'react'
import classes from './FeedbackItem.module.scss'
import classNames from 'classnames'

interface FeedbackItemProps {
  item: IFeedback
  active: boolean
}

const FeedbackItem: FC<FeedbackItemProps> = ({ item, active }) => {
  return (
    <div
      className={classNames(classes['feedback-item'], {
        [classes['active']]: active
      })}
    >
      <h2 className={classes['feedback-item__title']}>{item.name}</h2>
      <p className={classes['feedback-item__text']}>{item.text}</p>
    </div>
  )
}

export default FeedbackItem
