import React from 'react'
import IProps from './type/IProps'
import Styles from './Styles.module.scss'
import classNames from 'classnames'
const Label: React.FC<IProps> = (props: IProps) => {
    const { text, variant, htmlFor } = props
    return (
        <label
            className={
                classNames(
                    Styles.label,
                    Styles['label-' + variant]
                )
            }
            htmlFor={htmlFor}
        >
            {text}
        </label>
    )
}

export default Label