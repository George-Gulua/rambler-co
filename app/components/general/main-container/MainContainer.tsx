import classes from './MainContainer.module.scss'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { FC } from 'react'

interface MainContainerProps {
  children: any
  footerTitle: string
  footerText: string
  btnText: string
  feedbackType: boolean
  createFeedback?: Function
}

const MainContainer: FC<MainContainerProps> = ({
  children,
  footerText,
  footerTitle,
  feedbackType,
  btnText,
  createFeedback
}) => {
  return (
    <div className={classes['main-container']}>
      <Header />
      {children}
      <Footer
        footerText={footerText}
        footerTitle={footerTitle}
        feedbackType={feedbackType}
        btnText={btnText}
        createFeedback={createFeedback}
      />
    </div>
  )
}

export default MainContainer
