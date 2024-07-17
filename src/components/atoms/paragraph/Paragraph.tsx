import React from 'react'
import Styles from './Styles.module.scss'
import IProps from './type/IProps'
import classNames from 'classnames'
const Paragraph: React.FC<IProps> = (props: IProps) => {
    const { text, size = "medium" } = props
    return (
        <p className={classNames(Styles.text, Styles["text-" + size])}>
            {text}
        </p>
    )
}
export default Paragraph