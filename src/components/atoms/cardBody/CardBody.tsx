import React from 'react'
import IProps from './type/IProps'
import Styles from './Styles.module.scss'

const CardBody: React.FC<IProps> = (props: IProps) => {
    const { children } = props
    return (
        <div className={Styles["card-body"]}>
            {children}
        </div>
    )
}

export default CardBody