import React from 'react'
import IProps from './type/IProps'
import Button from '../../atoms/button/Button'
import Styles from './Styles.module.scss'
import classNames from 'classnames'

const IconButton: React.FC<IProps> = (props: IProps) => {
    const { name, onClick, children, variant, rounded, outline, type, text, right } = props
    return (
        <div>
            <Button name={name} onClick={onClick} variant={variant} rounded={rounded} outlined={outline} type={type} >
                <div className={classNames(Styles.icon, { [Styles.rigth]: right })}>
                    {children}
                    <div className={Styles['text-icon']}>
                        {text}
                    </div>
                </div>
            </Button>

        </div >

    )
}

export default IconButton