import React from 'react'
import IProps from './type/IProps'
import Styles from './Styles.module.scss'

const CardHeader: React.FC<IProps> = (props: IProps) => {
    const { children } = props
    return (
        <div className={Styles["card-header"]}>
            {children}
        </div>
    )
}

export default CardHeader