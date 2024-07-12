import React from 'react'
import Styles from './Styles.module.scss'
import IProps from './type/IProps'

const Pagination: React.FC<IProps> = (props: IProps) => {
    const { children } = props

    return (
        <div className={Styles.pagination}>
            {
                children
            }
        </div>
    )
}

export default Pagination