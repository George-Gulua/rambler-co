import classes from './MainContainer.module.scss'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const MainContainer = ({ children }: any) => {
    return (
        <div className={classes['main-container']}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default MainContainer
