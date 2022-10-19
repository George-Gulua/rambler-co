import classes from '../projects/Projects.module.scss'
import MainContainer from '../../general/main-container/MainContainer'
import MetaTitle from '../../ui/MetaTitle'
import Information from '../../general/Information/Information'

const Reviews = () => {
    return (
        <div className={classes['reviews']}>
            <MainContainer
                footerTitle={'Оставить отзыв!'}
                footerText={
                    'Ваши отзывы помогают повысить качество нашей работе '
                }
                feedbackType={true}
                btnText={'Отправить'}
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
            </MainContainer>
        </div>
    )
}

export default Reviews
