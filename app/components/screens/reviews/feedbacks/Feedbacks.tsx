import { IFeedback } from '../../../../types/IFeedback'
import { FC, useState } from 'react'
import FeedbackItem from './feedback-item/FeedbackItem'
import classes from './Feedbacks.module.scss'
import Image from 'next/image'
import classNames from 'classnames'

interface FeedbacksProps {
  feedbacks: IFeedback[]
}

const Feedbacks: FC<FeedbacksProps> = ({ feedbacks }) => {
  const [currentState, setCurrentState] = useState(0)
  return (
    <div className={classes['feedbacks']}>
      <div className={classes['container']}>
        <h2 className={classes['feedbacks__title']}>Отзывы</h2>
        <div
          className={classNames(classes['feedbacks__list-arrows'], {
            [classes['feedbacks__list-arrows-right-side']]: currentState === -1,
            [classes['feedbacks__list-arrows-left-side']]:
              currentState === feedbacks.length - 1
          })}
        >
          <Image
            className={classNames({
              [classes['feedbacks__left-arrow']]: -1 < currentState,
              [classes['feedbacks__arrow-none']]: -1 === currentState
            })}
            src={'/images/feedbacks/feedback-arrow.svg'}
            width={54}
            height={12}
            alt={'стрелка'}
            onClick={() => {
              setCurrentState(currentState - 1)
            }}
          />
          <div className={classes['feedbacks__list']}>
            {!!feedbacks.length ? (
              feedbacks.map(feedbackItem => (
                <FeedbackItem
                  key={feedbackItem.id}
                  item={feedbackItem}
                  currentState={currentState}
                  active={currentState + 1 === +feedbackItem.id}
                />
              ))
            ) : (
              <div>Список отзывов пуст</div>
            )}
          </div>
          <Image
            className={classNames({
              [classes['feedbacks__right-arrow']]:
                feedbacks.length > currentState + 2,
              [classes['feedbacks__arrow-none']]:
                feedbacks.length === currentState + 2
            })}
            src={'/images/feedbacks/feedback-arrow.svg'}
            width={54}
            height={12}
            alt={'стрелка'}
            onClick={() => {
              setCurrentState(currentState + 1)
              console.log(currentState)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Feedbacks
