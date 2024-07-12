import React from 'react'
import IProps from './type/IProps'
import Styles from './Styles.module.scss'
import classNames from 'classnames'
const Subtitle: React.FC<IProps> = (props: IProps) => {
    const { text, align = "left", color } = props
    return (
        <h2 className={classNames(
            Styles[align],
            color ? Styles['text-'+color] : null,
        )}>{text}</h2>
    )
}

export default Subtitle