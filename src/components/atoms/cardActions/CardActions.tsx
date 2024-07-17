import React from 'react'
import IProps from './type/IProps'
import Styles from './Styles.module.scss'
const CardActions: React.FC<IProps> = (props: IProps) => {
    const { children } = props
    return (
        <div className={Styles["card-actions"]}>
            {children}
        </div>
    )
}

export default CardActions