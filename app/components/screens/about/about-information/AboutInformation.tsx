import React from 'react'
import classes from './AboutInformation.module.scss'
import Image from 'next/image'

const AboutInformation = () => {
  return (
    <div className={classes['about-information']}>
      <div className={classes['container']}>
        <div className={classes['about-information__block']}>
          <h1 className={classes['about-information__title']}>
            Rambler&#38;Co
          </h1>
          <Image
            src={'/images/about-info.png'}
            width={706}
            height={450}
            alt={'Офис'}
          />
        </div>
        <p className={classes['about-information__text']}>
          Rambler&Co — один из крупнейших российских медиахолдингов. Аудитория
          проектов — свыше 47,7 миллиона человек в месяц. Сейчас в Rambler&Co
          входит «Рамблер» — ведущий портал Рунета, объединяющий новостные,
          развлекательные и тематические медиа.
        </p>
      </div>
    </div>
  )
}

export default AboutInformation
