import React from 'react'
import IProps from './type/IProps'
import './styles.scss'

const InputError: React.FC<IProps> = (props: IProps) => {
    const { error } = props
    return (
        <span className='validation-error'>
            {error}
        </span>
    )
}
export default InputError