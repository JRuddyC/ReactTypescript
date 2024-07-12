import React from 'react'
import IProps from './type/IProps'
import classNames from 'classnames'
import Styles from './Styles.module.scss'

const CellBody: React.FC<IProps> = (props: IProps) => {
    const { variant = "default", children, onClick } = props
    return (
        <td onClick={onClick} className={classNames(Styles.cell, Styles['cell-' + variant])}>
            <span>{children}</span>
        </td>
    )
}

export default CellBody