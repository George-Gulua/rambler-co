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
        <div className={classes['feedbacks__list-arrows']}>
          <Image
            className={classNames({
              [classes['feedbacks__left-arrow']]: 0 < currentState,
              [classes['feedbacks__arrow-none']]: 0 === currentState
            })}
            src={'/images/projects.ts/feedback-arrow.svg'}
            width={240}
            height={12}
            alt={'стрелка'}
            onClick={() => {
              setCurrentState(currentState - 1)
            }}
          />
          <div className={classes['feedbacks__list']}>
            {!!feedbacks.length ? (
              feedbacks
                .slice(currentState, currentState + 3)
                .map(feedbackItem => (
                  <FeedbackItem
                    key={feedbackItem.id}
                    item={feedbackItem}
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
                feedbacks.length > currentState + 3,
              [classes['feedbacks__arrow-none']]:
                feedbacks.length === currentState + 3
            })}
            src={'/images/projects.ts/feedback-arrow.svg'}
            width={240}
            height={12}
            alt={'стрелка'}
            onClick={() => {
              setCurrentState(currentState + 1)
              console.log(feedbacks)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Feedbacks
