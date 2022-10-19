import classes from './Footer.module.scss'
import Form from '../../ui/form/Form'
import Image from 'next/image'
import { FC } from 'react'

interface FooterProps {
    footerTitle: string
    footerText: string
    btnText: string
    feedbackType: boolean
}

const Footer: FC<FooterProps> = ({
    footerTitle,
    footerText,
    btnText,
    feedbackType
}) => {
    return (
        <footer className={classes['footer']}>
            <div className={classes['footer__upper-side']}>
                <div className={classes['container']}>
                    <div className={classes['footer__information']}>
                        <h2 className={classes['footer__title']}>
                            {footerTitle}
                        </h2>
                        <p className={classes['footer__text']}>{footerText}</p>
                    </div>
                    <Form btnText={btnText} feedbackType={feedbackType} />
                </div>
            </div>
            <div className={classes['footer__under-side']}>
                <div className={classes['container']}>
                    <div className={classes['footer__under-side-text']}>
                        <h2 className={classes['footer__logo']}>
                            Rambler&#38;Co
                        </h2>
                        <p className={classes['footer__phrase']}>
                            2022. Все права защищены.
                        </p>
                    </div>
                    <div className={classes['footer__list']}>
                        <a
                            className={classes['footer__icon']}
                            href="https://daily.afisha.ru/"
                            rel={'noreferrer'}
                            target={'_blank'}
                        >
                            {' '}
                            <Image
                                src={'/images/footer-icons/telegram.svg'}
                                width={32}
                                height={32}
                                alt={'telegram'}
                            />
                        </a>
                        <a
                            className={classes['footer__icon']}
                            href="https://daily.afisha.ru/"
                            rel={'noreferrer'}
                            target={'_blank'}
                        >
                            <Image
                                src={'/images/footer-icons/mail-ru.svg'}
                                width={32}
                                height={32}
                                alt={'mail-ru'}
                            />
                        </a>
                        <a
                            className={classes['footer__icon']}
                            href="https://daily.afisha.ru/"
                            rel={'noreferrer'}
                            target={'_blank'}
                        >
                            <Image
                                src={'/images/footer-icons/whats-app.svg'}
                                width={32}
                                height={32}
                                alt={'whats-app'}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
