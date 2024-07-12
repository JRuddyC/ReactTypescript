import React from 'react'
import IProps from './type/IProps'
import Styles from './Styles.module.scss'

const Form: React.FC<IProps> = (props: IProps) => {
    const { children, onSubmit } = props
    return (
        <form autoComplete='off' className={Styles.form} onSubmit={onSubmit}>
            {children}
        </form>
    )
}

export default Form