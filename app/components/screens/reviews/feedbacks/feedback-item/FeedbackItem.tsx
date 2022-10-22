import { IFeedback } from '../../../../../types/IFeedback'
import { FC } from 'react'
import classes from './FeedbackItem.module.scss'
import classNames from 'classnames'

interface FeedbackItemProps {
  item: IFeedback
  active: boolean
  currentState: number
}

const FeedbackItem: FC<FeedbackItemProps> = ({
  item,
  active,
  currentState
}) => {
  return (
    <div
      onClick={() => {
        console.log(item.id)
        console.log(currentState)
      }}
      className={classNames(classes['feedback-item'], {
        [classes['feedback-item-hidden']]:
          item.id > currentState + 2 || item.id < currentState,
        [classes['active']]: active
      })}
    >
      <h2 className={classes['feedback-item__title']}>{item.name}</h2>
      <p className={classes['feedback-item__text']}>{item.text}</p>
    </div>
  )
}

export default FeedbackItem
