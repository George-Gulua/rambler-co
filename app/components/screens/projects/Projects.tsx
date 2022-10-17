import MainContainer from '../../general/main-container/MainContainer'
import MetaTitle from '../../ui/MetaTitle'
import Information from './Information/Information'
import classes from './Projects.module.scss'
import Grid from './grid/Grid'

const Projects = () => {
    return (
        <div className={classes['projects']}>
            <MainContainer>
                <MetaTitle title={'projects'} />
                <Information />
                <Grid />
            </MainContainer>
        </div>
    )
}

export default Projects
