import React from 'react'
import IProps from './type/IProps'
import Styles from './Styles.module.scss'
import classNames from 'classnames'
const CardFooter: React.FC<IProps> = (props: IProps) => {
    const { children, variant = "primary" } = props
    return (
        <div className={classNames(Styles["card-footer"], Styles[variant])}>
            {children}
        </div>
    )
}

export default CardFooter