import React from 'react'
import IProps from './type/IProps'
import Styles from './Styles.module.scss'
import classNames from 'classnames'

const MenuButton: React.FC<IProps> = (props: IProps) => {
    const { onClick, status } = props
    return (
        <div
            className={classNames(Styles['menu-button'], { [Styles.active]: status })}
            onClick={onClick}
        >
            <div className={Styles['line-1']}></div>
            <div className={Styles['line-2']}></div>
            <div className={Styles['line-3']}></div>
        </div>
    )
}

export default MenuButton