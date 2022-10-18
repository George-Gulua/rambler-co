import React from 'react'
import AboutInformation from './about-information/AboutInformation'
import MainContainer from '../../general/main-container/MainContainer'
import MetaTitle from '../../ui/MetaTitle'
import Advantages from './advantages/Advantages'

const About = () => {
    return (
        <div id={'about'}>
            <MainContainer>
                <MetaTitle title={'about'} />
                <AboutInformation />
                <Advantages />
            </MainContainer>
        </div>
    )
}

export default About
