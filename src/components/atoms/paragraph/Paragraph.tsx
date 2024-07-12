import React from 'react'
import Styles from './Styles.module.scss'
import IProps from './type/IProps'
const Paragraph: React.FC<IProps> = (props: IProps) => {
    const { text } = props
    return (
        <p className={Styles.text}>
            {text}
        </p>
    )
}
export default Paragraph