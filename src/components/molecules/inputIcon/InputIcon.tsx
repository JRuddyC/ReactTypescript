import React from 'react'
import IProps from './type/IProps'
import Input from '../../atoms/input/Input'
import './styles.scss'

const InputIcon: React.FC<IProps> = (props: IProps) => {
    const { id, onChange, children, placeholder, onClick } = props

    return (
        <div className='input-icon'>
            <div className='container-input'>
                <Input id={id} onChange={onChange} placeholder={placeholder} />
            </div>
            <div onClick={onClick} className='container-icon'>
                {children}
            </div>
        </div>
    )
}

export default InputIcon