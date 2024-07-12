import React from 'react'
import IProps from './type/IProps'
import Input from '../../atoms/input/Input'
import Styles from './Styles.module.scss'

const InputIcon: React.FC<IProps> = (props: IProps) => {
    const { id, onChange, children, placeholder, onClick } = props

    return (
        <div className={Styles['input-icon']}>
            <Input id={id} onChange={onChange} placeholder={placeholder} />
            <div onClick={onClick} className={Styles['container-icon']}>
                {children}
            </div>
        </div>
    )
}

export default InputIcon