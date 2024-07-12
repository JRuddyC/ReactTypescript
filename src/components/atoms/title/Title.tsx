import React from 'react'
import IProps from './type/IProps'
import styles from './Styles.module.scss'
const Title: React.FC<IProps> = (props: IProps) => {
    const { text, align = 'left' } = props
    return (
        <h1 className={styles[align]}>{text}</h1>
    )
}

export default Title