import React from 'react'
import IProps from './types/IProps'
import Styles from './Styles.module.scss'

const Container: React.FC<IProps> = (props: IProps) => {
    const { children } = props
    return (
        <div className={Styles['main-container']}>
            {children}
        </div>
    )
}

export default Container