import React from 'react'
import AboutInformation from './about-information/AboutInformation'
import MainContainer from '../../general/main-container/MainContainer'
import MetaTitle from '../../ui/MetaTitle'
import Advantages from './advantages/Advantages'

const About = () => {
    return (
        <div id={'about'}>
            <MainContainer
                footerTitle={'Закажите Веб-Сайт!'}
                footerText={
                    'Закажите у нас сайт и мы обеащем вам пожизненную гарантию качества.'
                }
                feedbackType={false}
                btnText={'Оформить заказ'}
            >
                <MetaTitle title={'about'} />
                <AboutInformation />
                <Advantages />
            </MainContainer>
        </div>
    )
}

export default About
