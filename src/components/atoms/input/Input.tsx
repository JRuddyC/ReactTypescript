import React from 'react'
import Styles from './Styles.module.scss'
import IProps from './type/IProps'
import classNames from 'classnames'

const Input: React.FC<IProps> = (props: IProps) => {
    const { id, type, values, placeholder, variant, onChange, rounded = false } = props
    return (
        <input
            value={values}
            name={id}
            id={id}
            className={
                classNames(
                    Styles.input,
                    Styles['input-' + variant],
                    { [Styles.rounded]: rounded }
                )
            }
            type={type}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}

export default Input