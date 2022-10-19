import MainContainer from '../../general/main-container/MainContainer'
import MetaTitle from '../../ui/MetaTitle'
import Information from '../../general/Information/Information'
import classes from './Projects.module.scss'
import Grid from './grid/Grid'

const Projects = () => {
    return (
        <div className={classes['projects']}>
            <MainContainer
                footerTitle={'Закажите Веб-Сайт!'}
                footerText={
                    'Закажите у нас сайт и мы обеащем вам пожизненную гарантию качества.'
                }
                feedbackType={false}
                btnText={'Оформить заказ'}
            >
                <MetaTitle title={'projects'} />
                <Information
                    title={'Дизайн и разработка'}
                    text={
                        'Наши проекты созданы лучшими программистами дизайнерами мира. Каждая задача прорабатывается до тончайших деталей и разрабаетывается согласно выстроенной ахритектуре.'
                    }
                    buttonText={'заказать проект'}
                    pathImg={'/images/information/computer.svg'}
                    width={340}
                    height={220}
                />
                <Grid />
            </MainContainer>
        </div>
    )
}

export default Projects
