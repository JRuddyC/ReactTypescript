import React from 'react'
import IProps from './type/IProps'
import Styles from './Styles.module.scss'
import classNames from 'classnames'

const Separator: React.FC<IProps> = (props: IProps) => {
    const { direction } = props
    return (
        <div className={classNames(Styles.separator, Styles[direction])} />
    )
}

export default Separator