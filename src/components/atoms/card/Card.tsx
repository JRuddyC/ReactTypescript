import React from 'react'
import IProps from './type/IProps'
import Styles from './Styles.module.scss'
import classNames from 'classnames'

const Card: React.FC<IProps> = (props: IProps) => {
    const { variant = "default", size = "medium", children } = props
    return (
        <div className={classNames(Styles.card, Styles[variant], Styles[size])}>
            {children}
        </div>
    )
}

export default Card