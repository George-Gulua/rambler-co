import classes from './Information.module.scss'
import Image from 'next/image'

const Information = () => {
    return (
        <div className={classes['information']}>
            <Image
                src="/images/computer.svg"
                width={200}
                height={200}
                alt="computer"
            />
        </div>
    )
}

export default Information
