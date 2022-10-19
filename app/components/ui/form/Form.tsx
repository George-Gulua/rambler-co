import React, { FC, useRef } from 'react'
import classes from './Form.module.scss'
import Image from 'next/image'
import classNames from 'classnames'

interface FormProps {
    btnText: string
    feedbackType: boolean
}

const Form: FC<FormProps> = ({ btnText, feedbackType }) => {
    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const textRef = useRef<HTMLTextAreaElement>(null)

    const sendMessage = () => {
        const message = {
            name: nameRef.current?.value,
            text: textRef.current?.value,
            email: emailRef.current?.value
        }
        console.log(message)
        emailRef.current!.value = ''
        nameRef.current!.value = ''
        textRef.current!.value = ''
    }
    return (
        <div id={'form'} className={classes['form']}>
            <div className={classes['form__user-info']}>
                <div
                    className={classNames({
                        [classes['custom-input']]: !feedbackType,
                        [classes['custom-input-none']]: feedbackType
                    })}
                >
                    <div className={classes['custom-input__svg']}>
                        <Image
                            src={'/images/input-icons/mail.svg'}
                            width={28}
                            height={24}
                            alt={'иконка'}
                        />
                    </div>
                    <input
                        className={classes['custom-input__field']}
                        type="text"
                        ref={emailRef}
                        placeholder={'Email'}
                    />
                </div>
                <div className={classes['custom-input']}>
                    <div className={classes['custom-input__svg']}>
                        <Image
                            src={'/images/input-icons/human.svg'}
                            width={28}
                            height={24}
                            alt={'иконка'}
                        />
                    </div>
                    <input
                        className={classes['custom-input__field']}
                        type="text"
                        ref={nameRef}
                        placeholder={'Name'}
                    />
                </div>
            </div>
            <textarea
                className={classes['form__message']}
                ref={textRef}
                name="text"
                cols={30}
                rows={10}
                maxLength={1000}
                placeholder={'Message...'}
            />
            <button className={classes['btn']} onClick={sendMessage}>
                {btnText}
            </button>
        </div>
    )
}

export default Form
