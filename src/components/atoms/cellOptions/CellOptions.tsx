import React from 'react'
import Styles from './Styles.module.scss'
import IProps from './type/IProps'

const CellOptions: React.FC<IProps> = (props: IProps) => {
    const { children } = props
    return (
        <div className={Styles.options}>
            {children}
        </div>
    )
}

export default CellOptions