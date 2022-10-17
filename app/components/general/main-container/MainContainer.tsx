import classes from './MainContainer.module.scss'
import Header from '../header/Header'

const MainContainer = ({ children }: any) => {
    return (
        <div className={classes['main-container']}>
            <Header />
            <div>{children}</div>
        </div>
    )
}

export default MainContainer
