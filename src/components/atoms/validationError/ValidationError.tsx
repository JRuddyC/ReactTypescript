import React from 'react'
import IProps from './type/IProps'
import Styles from './Styles.module.scss'

const InputError: React.FC<IProps> = (props: IProps) => {
    const { error } = props
    return (
        <span className={Styles['validation-error']}>
            {error}
        </span>
    )
}
export default InputError