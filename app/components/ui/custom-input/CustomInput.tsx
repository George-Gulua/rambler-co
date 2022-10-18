import classes from './CustomInput.module.scss'
import Image from 'next/image'
import { FC, LegacyRef } from 'react'

interface CustomInputProps {
    path: string
    placeholder: string
    refInput: LegacyRef<HTMLInputElement>
}

const CustomInput: FC<CustomInputProps> = ({ path, placeholder, refInput }) => {
    return (
        <div className={classes['custom-input']}>
            <div className={classes['custom-input__svg']}>
                <Image src={path} width={28} height={24} alt={'иконка'} />
            </div>
            <input
                className={classes['custom-input__field']}
                type="text"
                ref={refInput}
                placeholder={placeholder}
            />
        </div>
    )
}

export default CustomInput
