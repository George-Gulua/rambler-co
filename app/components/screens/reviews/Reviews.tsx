import classes from '../projects/Projects.module.scss'
import MainContainer from '../../general/main-container/MainContainer'
import MetaTitle from '../../ui/MetaTitle'
import Information from '../../general/Information/Information'
import Feedbacks from './feedbacks/Feedbacks'
import { IFeedback } from '../../../types/IFeedback'
import { FC } from 'react'

interface ReviewsProps {
  feedbacks: IFeedback[]
  createFeedback: Function
}

const Reviews: FC<ReviewsProps> = ({ feedbacks, createFeedback }) => {
  return (
    <div className={classes['reviews']}>
      <MainContainer
        footerTitle={'Оставить отзыв!'}
        footerText={'Ваши отзывы помогают повысить качество нашей работе '}
        feedbackType={true}
        btnText={'Отправить'}
        createFeedback={createFeedback}
      >
        <MetaTitle title={'reviews'} />
        <Information
          title={'Отзывы'}
          text={
            'Отзывы формируют лояльность клиента, информируют пользователей о продукте нативно, помогают выявить недостатки, улучшить продукт.'
          }
          buttonText={'Написать отзыв'}
          width={440}
          height={420}
          pathImg={'/images/information/feedback.png'}
        />
        <Feedbacks feedbacks={feedbacks} />
      </MainContainer>
    </div>
  )
}

export default Reviews
