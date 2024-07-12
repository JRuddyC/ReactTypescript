import React from 'react'
import Styles from './Styles.module.scss'
import IProps from './type/IProps'
const InfoField: React.FC<IProps> = (props: IProps) => {
    const { title, value } = props
    return (
        <div className={Styles['field-info']}>
            <span>{title}:</span><span className={Styles.info}>{value}</span>
        </div>
    )
}

export default InfoField