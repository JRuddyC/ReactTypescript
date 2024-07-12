import React from 'react'
import IProps from './type/IProps'
import classNames from 'classnames'
import Styles from './Styles.module.scss'

const CellHeader: React.FC<IProps> = (props: IProps) => {
    const { scope, variant = "primary", children } = props
    return (
        <th scope={scope} className={classNames(Styles.cell, Styles['cell-' + variant])}>
            {children}
        </th>
    )
}

export default CellHeader